import { Skeleton } from '../../ui/skeleton';
import { SettingHeader } from './setting-header';
import { SettingRow } from './setting-row';
import { SettingWrapper } from './wrapper';

export const WorkspaceDetailSkeleton = () => {
  return (
    <>
      <SettingHeader title={<Skeleton />} subtitle={<Skeleton />} />

      {Array.from({ length: 3 })
        .fill(0)
        .map((_, index) => {
          return (
            <SettingWrapper title={<Skeleton />} key={index}>
              <SettingRow
                name={<Skeleton />}
                desc={<Skeleton />}
                spreadCol={false}
              ></SettingRow>
            </SettingWrapper>
          );
        })}
    </>
  );
};
