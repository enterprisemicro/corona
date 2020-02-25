import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import ShuffleArray from '../utils/sort';
import ToolCard from '../components/card/cardTool';
import { GenericTool } from '../components/common/tools';

export default function HomeGeneric(props : any) {
    var keyword = props.filterKeyword;
    return (
        <Box>
            <ToolCard toolConfigs={ShuffleArray(GenericTool).filter((concert : any) =>
              concert.keyword.toLowerCase().includes(keyword.toLowerCase()))}>
            </ToolCard>
      </Box>
    )
}