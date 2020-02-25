import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import ToolCard from '../components/card/cardTool';
import SearchToolInput from '../components/search/searchTool';
import LogoMT from '../components/logo/logoMT';
import Copyright from '../components/common/copyright';
import ShuffleArray from '../utils/sort';
import { GenericTool, AzureTool, CASTool } from '../components/common/tools';

export default function Welcome() {

  const CONCERTS = GenericTool.concat(AzureTool, CASTool);

  const [toolKeyword, setToolKeyword] = React.useState('');

  const searchToolKeywordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setToolKeyword(event.target.value);
  };

  return (
    <Container>
      <LogoMT></LogoMT>
      <Box mx="10%">
        <Grid container justify="center" style={{ marginTop: 20}} spacing={3}>
          <Grid item xs={12}>
            <SearchToolInput toolKeyword={toolKeyword} searchToolKeywordChange={searchToolKeywordChange}></SearchToolInput>
          </Grid>
          <Grid item xs={12}>
            <ToolCard toolConfigs={ShuffleArray(CONCERTS).filter((concert : any) =>
              concert.name.toLowerCase().includes(toolKeyword.toLowerCase())
            )}></ToolCard>
          </Grid>
        </Grid>
      </Box>
      <Box my={5}>
        <Copyright />
      </Box>
    </Container>
  );
}