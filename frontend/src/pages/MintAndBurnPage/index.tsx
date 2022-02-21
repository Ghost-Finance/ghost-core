import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AppBar, Tab } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import useStyles from './style';
import { ContextPage, ContentPage } from '../ContentPage';
import CardContent from '../../components/CardContent';
import { TabsListWithTheme, TabWithTheme } from '../../components/TabsContent';
import useRedirect from '../../hooks/useRedirect';
import BurnPage from '../BurnPage';
import MintPage from '../MintPage';

const MintAndBurnPage = () => {
  const { redirect, redirectHome, setRedirect, setRedirectHome } =
    useRedirect();
  const [page, setPage] = useState('mint');
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newPage: string) => {
    setPage(newPage);
  };

  return (
    <ContextPage.Provider
      value={{ redirect, redirectHome, setRedirect, setRedirectHome }}
    >
      <ContentPage>
        <CardContent typeCard={page}>
          <TabContext value={page}>
            <AppBar
              position="static"
              style={{ boxShadow: 'none', marginTop: 50 }}
            >
              <TabsListWithTheme
                centered
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                aria-label="mint or burn"
              >
                <TabWithTheme label="Mint" value="mint" />
                <TabWithTheme label="Burn" value="burn" />
              </TabsListWithTheme>
            </AppBar>
            <TabPanel className={classes.panel} value="mint">
              <MintPage />
            </TabPanel>
            <TabPanel className={classes.panel} value="burn">
              <BurnPage />
            </TabPanel>
          </TabContext>
        </CardContent>
      </ContentPage>
    </ContextPage.Provider>
  );
};

export default MintAndBurnPage;
