import { Box, Divider } from '@mui/material';
import { Monster } from '../../models/interfaces/monster.interface';
import { Title } from '../title/Title';
import {
  BattleMonsterCard,
  BattleMonsterImage,
  BattleMonsterTitle,
  ProgressBar,
  ProgressBarLabel,
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

type ProgressBarProps = {
  label?: string;
  value?: number;
};

const MonsterBattleProgressBar: React.FC<ProgressBarProps> = ({
  label,
  value,
}) => {
  return (
    <Box width="100%">
      <ProgressBarLabel>{label}</ProgressBarLabel>
      <ProgressBar variant="determinate" value={value} />
    </Box>
  );
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ title, monster }) => {
  return (
    <>
      {monster ? (
        <BattleMonsterCard>
          <BattleMonsterImage image={monster.imageUrl} />
          <Box>
            <BattleMonsterTitle>{title!}</BattleMonsterTitle>
            <Divider light />
          </Box>
          <MonsterBattleProgressBar label="HP" value={monster.hp} />
          <MonsterBattleProgressBar label="Attack" value={monster.attack} />
          <MonsterBattleProgressBar label="Defense" value={monster.defense} />
          <MonsterBattleProgressBar label="Speed" value={monster.speed} />
        </BattleMonsterCard>
      ) : (
        <BattleMonsterCard centralized>
          <Title>{title!}</Title>
        </BattleMonsterCard>
      )}
    </>
  );
};

export { MonsterBattleCard };
