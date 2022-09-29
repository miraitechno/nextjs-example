import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import {
  Link,
  Stack,
} from '@mui/material';
import { MenuProps, MenuItemProps } from './type';

// ----------------------------------------------------------------------

const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none',
  },
}));

// ----------------------------------------------------------------------

export default function MenuDesktop({ isOffset, isHome, navConfig }: MenuProps) {
  return (
    <Stack direction="row">
      {navConfig.map((link) => (
        <MenuDesktopItem
          key={link.title}
          item={link}
          isOffset={isOffset}
          isHome={isHome}
        />
      ))}
    </Stack>
  );
}

// ----------------------------------------------------------------------

type MenuDesktopItemProps = {
  item: MenuItemProps;
  isHome: boolean;
  isOffset: boolean;
};

function MenuDesktopItem({
  item,
  isHome,
  isOffset,
}: MenuDesktopItemProps) {
  const { pathname } = useRouter();

  const { title, path } = item;

  const isActive = (path: string) => pathname === path;

  return (
    <NextLink href={path} passHref>
      <LinkStyle
        sx={{
          ...(isHome && { color: 'text.primary' }),
          ...(isOffset && { color: 'text.primary' }),
          ...(isActive(path) && {
            color: 'primary.main',
          }),
        }}
      >
        {title}
      </LinkStyle>
    </NextLink>
  );
}
