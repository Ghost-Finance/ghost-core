pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";

interface IMedian {
  function peek() external view returns (uint256, bool);
  function read() external view returns (uint256);
}

contract Ssm is AccessControl {
  uint256 public stopped;
  bytes32 public constant READER_ROLE = keccak256("READER_ROLE");
  modifier stoppable { require(stopped == 0, "Method stopped for ADMIN_ROLE"); _; }

  address public medianizer;
  uint16  constant ONE_HOUR = 1 hours;
  uint16  public hop = ONE_HOUR;
  uint64  public zzz;

  struct Feed {
    uint256 val;
    uint256 has;
  }

  event AddPrice(address sender, uint256 val);
  event ChangeMedian(address sender, address contractAddress);

  Feed cur;
  Feed nxt;

  constructor (address medianizer_) {
    _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    medianizer = medianizer_;
  }

  function stop() external onlyRole(DEFAULT_ADMIN_ROLE) {
    stopped = 1;
  }

  function start() external onlyRole(DEFAULT_ADMIN_ROLE) {
    stopped = 0;
  }

  function change(address medianizer_) external onlyRole(DEFAULT_ADMIN_ROLE) {
    medianizer = medianizer_;

    emit ChangeMedian(msg.sender, medianizer);
  }

  function era() internal view returns (uint) {
    return block.timestamp;
  }

  function prev(uint time) internal view returns (uint64) {
    require(hop != 0, "OSM/hop-is-zero");
    return uint64(time - (time % hop));
  }

  function step(uint16 time) external onlyRole(DEFAULT_ADMIN_ROLE) {
    require(time > 0, "Can't be zero!");
    hop = time;
  }

  function void() external onlyRole(DEFAULT_ADMIN_ROLE) {
    cur = nxt = Feed(0, 0);
    stopped = 1;
  }

  function pass() public view returns (bool ok) {
    return era() >= zzz + hop;
  }

  function poke() external stoppable {
    require(pass(), "Waiting for one hour");
    (uint256 price, bool ok) = IMedian(medianizer).peek();
    if (ok) {
      cur = nxt;
      nxt = Feed(price, 1);
      zzz = prev(era());

      emit AddPrice(msg.sender, cur.val);
    }
  }

  function peek() external view onlyRole(READER_ROLE) returns (uint256, bool) {
    return (cur.val, cur.has == 1);
  }

  function peep() external view onlyRole(READER_ROLE) returns (uint256, bool) {
    return (nxt.val, nxt.has == 1);
  }

  function read() external view onlyRole(READER_ROLE) returns (uint256) {
    require(cur.has == 1, "Is not a current value");
    return cur.val;
  }
}
