import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { s } from './styles';

export function Loading(props: ActivityIndicatorProps) {
  return (
    <ActivityIndicator color={props.color} style={[s.container, props.style]} />
  );
}
