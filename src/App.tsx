import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// First Page
import Casinos from './pages/Dashboard/Casinos';

import BitcoinFaucets from './pages/Bonuses/BitcoinFaucets';
import BitcoinFreeSpins from './pages/Bonuses/BitcoinFreeSpins';

// Cryptocurencies
import Bitcoin from './pages/Cryptocurrencies/Bitcoin';
import Ethereum from './pages/Cryptocurrencies/Ethereum';
import Tether from './pages/Cryptocurrencies/Tether';
import Dogecoin from './pages/Cryptocurrencies/Dogecoin';
import Litecoin from './pages/Cryptocurrencies/Litecoin';
import Ripple from './pages/Cryptocurrencies/Ripple';
import Binance from './pages/Cryptocurrencies/Binance';
import Cardano from './pages/Cryptocurrencies/Cardano';

// Games
import Crash from './pages/Games/Crash';
import Jackpots from './pages/Games/Jackpots';
import Slots from './pages/Games/Slots';
import Roulette from './pages/Games/Roulette';
import Blackjack from './pages/Games/Blackjack';
import Dice from './pages/Games/Dice';
import Plinko from './pages/Games/Plinko';
import Poker from './pages/Games/Poker';

// Providers
import Providers from './pages/Providers';

// Guides
import Guide1 from './pages/Guides/Guide1';
import Guide2 from './pages/Guides/Guide2';
import Guide3 from './pages/Guides/Guide3';

// review pages start
import BCGameReview from './pages/Reviews/BCGameReview';
import StakeCasinoReview from './pages/Reviews/StakeCasinoReview';
import RocketpotGameReview from './pages/Reviews/RocketpotGameReview';
import CloudbetGameReview from './pages/Reviews/CloudbetGameReview';
import TrueFlipGameReview from './pages/Reviews/TrueFlipGameReview';
import BitcoinComGameReview from './pages/Reviews/BitcoinComGameReview';
import BitStarzGameReview from './pages/Reviews/BitStarzGameReview';
import KingBillyGameReview from './pages/Reviews/KingBillyGameReview';
import MBitGameReview from './pages/Reviews/MBitGameReview';
import EarnBetGameReview from './pages/Reviews/EarnBetGameReview';
// review pages end

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Casinos />} />

        <Route path='/bitcoin-free-spins' element={<BitcoinFaucets />} />
        <Route path='/are-bitcoin-faucets-worth-it' element={<BitcoinFreeSpins />} />

        <Route path='/best-bitcoin-casinos' element={<Bitcoin />} />
        <Route path='/best-ethereum-casinos' element={<Ethereum />} />
        <Route path='/tether-casinos' element={<Tether />} />
        <Route path='/dogecoin-casinos' element={<Dogecoin />} />
        <Route path='/litecoin-casinos' element={<Litecoin />} />
        <Route path='/ripple-casinos' element={<Ripple />} />
        <Route path='/binance-casinos' element={<Binance />} />
        <Route path='/cardano-casinos' element={<Cardano />} />

        <Route path='/crash-crypto-game' element={<Crash />} />
        <Route path='/bitcoin-jackpot' element={<Jackpots />} />
        <Route path='/slots-bitcoin-casino' element={<Slots />} />
        <Route path='/roulette-bitcoin-casino' element={<Roulette />} />
        <Route path='/blackjack-bitcoin-casino' element={<Blackjack />} />
        <Route path='/dice-bitcoin-casino' element={<Dice />} />
        <Route path='/plinko-casino' element={<Plinko />} />
        <Route path='/bitcoin-poker-sites' element={<Poker />} />

        <Route path='/game-providers' element={<Providers />} />

        <Route path='/best-bitcoin-wallet-for-online-gambling' element={<Guide1 />} />
        <Route path='/stablecoin-casinos' element={<Guide2 />} />
        <Route path='/metamask-casinos' element={<Guide3 />} />

        {/* review pages start */}
        <Route path='/review/bc.game' element={<BCGameReview />} />
        <Route path='/review/stake.com' element={<StakeCasinoReview />} />
        <Route path='/review/rocketpot.io' element={<RocketpotGameReview />} />
        <Route path='/review/cloudbet.com' element={<CloudbetGameReview />} />
        <Route path='/review/trueflip.io' element={<TrueFlipGameReview />} />
        <Route path='/review/games.bitcoin.com' element={<BitcoinComGameReview />} />
        <Route path='/review/bitstarz.com' element={<BitStarzGameReview />} />
        <Route path='/review/kingbillycasino.com' element={<KingBillyGameReview />} />
        <Route path='/review/mbitcasino.com' element={<MBitGameReview />} />
        <Route path='/review/earnbet.io' element={<EarnBetGameReview />} />
        {/* review pages end */}
      </Routes>
      <ToastContainer style={{ fontSize: '16px' }} theme='dark' />
    </div>
  );
}

export default App;