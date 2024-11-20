import ScreenView from '@/components/screen-view';
import StyledText from '@/components/styled-text';
import useInitialization from '@/hooks/use-initialization';
import { memo, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

const AppInitialization = ({ children }: PropsWithChildren) => {
  const { hasInitialized } = useInitialization();
  const { t } = useTranslation();

  if (!hasInitialized) {
    return (
      <ScreenView>
        <View style={styles.root}>
          <StyledText>{t('common.loading')}...</StyledText>
        </View>
      </ScreenView>
    );
  } else {
    return <>{children}</>;
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(AppInitialization);
