import { TouchableOpacity, View, TouchableOpacityProps } from 'react-native';
import { s } from './styles';
import { Loading } from '../loading';
import { colors } from '@/src/styles/colors';

interface Props extends TouchableOpacityProps {
  isLoading?: boolean;
}

export function ButtonRoot({ children, isLoading, style, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[s.container, style]}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <Loading
          color={colors.gray[100]}
          style={{ backgroundColor: colors.green.base }}
        />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
