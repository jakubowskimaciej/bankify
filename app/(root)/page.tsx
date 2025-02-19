import HeaderBox from '@/components/header-box';
import TotalBalanceBox from '@/components/TotalBalanceBox';

export default function Home() {
  const loggenIn = { firstName: 'Mac' };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type={'greeting'}
            title={'Welcome'}
            user={loggenIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently. "
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={120.22}
          />
        </header>
      </div>
    </section>
  );
}
