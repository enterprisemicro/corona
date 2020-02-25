import React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';

const useStyles = makeStyles((theme : Theme) => 
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 20,
        },
        formLabelRoot: {
            '& label.Mui-focused': {
                color: '#4db5d9',
            },
            '& .MuiFilledInput-underline:after': {
                borderBottomColor: '#4db5d9',
            }
        },
        focused: {
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
}));

export default function SearchToolInput(props : any) {
    var toolKeyword = props.toolKeyword;
    const classes = useStyles();

    const handleSearchToolInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        props.searchToolKeywordChange(event);
    }

    const handleClickShowPassword = () => {
        //setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = () => {
        //event.preventDefault();
    };

    return (
                <FormControl className={clsx(classes.formLabelRoot)} fullWidth variant="filled">
                    <InputLabel htmlFor="filled-search-tool-input">Search Tool</InputLabel>
                    <FilledInput
                        id="filled-search-tool-input"
                        type='text'
                        value={toolKeyword}
                        onChange={handleSearchToolInputChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle search"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    <Search />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
    );
}