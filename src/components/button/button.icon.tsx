import { colors } from '@/src/styles/colors';
import { IconProps } from '@tabler/icons-react-native';

interface Props {
  icon: React.ComponentType<IconProps>;
}

export function ButtonIcon({ icon: Icon }: Props) {
  return <Icon size={24} color={colors.gray[100]} />;
}
