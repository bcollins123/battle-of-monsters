import styled from "@emotion/styled"
import { Card, CardMedia, LinearProgress, linearProgressClasses, Typography } from "@mui/material"
import { colors } from "../../constants/colors"

export const BattleMonsterCard = styled(Card, { shouldForwardProp: (prop) => prop !== "centralized" })<{ centralized?: boolean; }>(({ centralized }) => ({
    padding: '13px 11px 24px',
    width: 'calc(307px - 22px)',
    height: '415px',
    background: colors.white,
    boxShadow: '-2px 3px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '7px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: centralized ? 'center' : 'space-between',
}))
  
export const BattleMonsterTitle = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '22px',
    lineHeight: '25.78px',
    color: colors.black,
    marginBottom: '5px',
}))

export const BattleMonsterImage = styled(CardMedia)(() => ({
    width: '283px',
    height: '178px',
    filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))',
    borderRadius: '7px'
}))

export const ProgressBar = styled(LinearProgress)(() => ({
    height: 8,
    borderRadius: 15,
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.25)',
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: colors.progressBarBackground,
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 15,
        backgroundColor: colors.progressColor,
    },
}));

export const ProgressBarLabel = styled(Typography)(() => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '14px',
    color: colors.black,
    marginBottom: '5px',
}));