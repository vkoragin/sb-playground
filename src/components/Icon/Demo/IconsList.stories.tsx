import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import s from './IconsList.module.scss';
import { TIconNames } from '../../../types';
import { useIcons } from '../useIcons.hook';
import Icon from '../Icon';

const meta = {
  title: 'IconsList',
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

type TIconsData = {
  name: TIconNames;
  isClicked: boolean;
};

const sortIcons = (icons: TIconsData[]) => icons.sort((a, b) => (a.name < b.name ? -1 : 1));

const IconsWithHooks = (args: any) => {
  const [search, setSearch] = useState('');
  const [iconsData, setIconsData] = useState<TIconsData[]>([]);

  const icons = useIcons(args);

  const filteredIconsNames = useMemo<TIconsData[]>(() => {
    if (!search) return iconsData;

    return iconsData.filter((icon) => icon.name.toLowerCase().includes(search.toLowerCase()));
  }, [iconsData, search]);

  const copy = useCallback(({ name, isClicked }: TIconsData) => {
    navigator.clipboard.writeText(name);

    setIconsData((prev) =>
      prev.map((icon) => {
        if (icon.name === name) {
          icon.isClicked = !isClicked;
        }
        return icon;
      }),
    );
  }, []);

  useEffect(
    () => {
      const res = Object.keys(icons).map((iconName) => ({
        name: iconName,
        isClicked: false,
      })) as TIconsData[];

      setIconsData(sortIcons(res));
    },
    /* eslint-disable-next-line */
    [],
  );

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          className={s.search}
          placeholder="Поиск по названию"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={s.description}>Кликни по иконке, чтобы скопировать её имя</div>

      <div className={s.container}>
        {filteredIconsNames.map((icon: TIconsData) => (
          <button className={s.item} key={icon.name} type="button" onClick={() => copy(icon)}>
            {icon.isClicked ? (
              <div>Скопировано</div>
            ) : (
              <>
                <div className={s.title}>{icon.name}</div>
                <Icon {...args} name={icon.name} />
              </>
            )}
          </button>
        ))}
      </div>
    </>
  );
};

export const IconsListDefault: Story = {
  render: (args) => <IconsWithHooks {...args} />,
  args: {
    name: 'body_check',
    product: 'ofd',
    iconFill: false,
    iconStroke: true,
    width: '35',
    height: '35',
  },
};
