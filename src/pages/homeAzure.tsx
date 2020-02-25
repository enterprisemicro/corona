import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import ShuffleArray from '../utils/sort';
import ToolCard from '../components/card/cardTool';
import { AzureTool } from '../components/common/tools';

export default function HomeAzure(props : any) {
    var keyword = props.filterKeyword;
    return (
        <Box>
            <ToolCard toolConfigs={ShuffleArray(AzureTool).filter((concert : any) =>
              concert.keyword.toLowerCase().includes(keyword.toLowerCase()))}>
            </ToolCard>
      </Box>
    )
}