import { ThemeSwitch } from '@/components/ThemeSwitch';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';
import { HeaderContainer } from './styles';

export const Header = () => {
  const currentDate = format(new Date(), 'EEEEEE, d, MMMM', {
    locale: ptBR
  });

  return (
    <HeaderContainer>
      <Link shallow href="/">
        <a>
          <img src="/logo.svg" alt="Podcastr" />
        </a>
      </Link>

      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
      <ThemeSwitch />
    </HeaderContainer>
  );
};
