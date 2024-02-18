import React, { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import SearchIcon from '@/src/components/search-icon'
import { pythCoins } from '@/src/common/constants/pyth-coins'
import { setSelectedCrypto } from '@/src/common/redux/slices/cryptoSlice'
import { Coin } from '@/src/common/types/CoinType'
import { getCoinPrice } from '@/src/common/utils/pyth'

type SearchProps = {}

const MIN_SEARCH_LENGTH = 2

const Search: React.FC<SearchProps> = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleCoinSelect = async (coin: Coin) => {
    const res = await getCoinPrice(coin.key)
    dispatch(setSelectedCrypto({ ...coin, price: res[0] ?? 0 }))
    setInputValue(`${coin.symbol} - ${coin.name}`)
  }

  const filterCoins = (filter: string): Coin[] => {
    if (filter.length < MIN_SEARCH_LENGTH) return []
    if (!filter) return pythCoins as Coin[]

    return pythCoins.filter(
      coin =>
        coin.symbol.toLowerCase().indexOf(filter.toLowerCase()) !== -1 ||
        coin.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
    ) as Coin[]
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value
    setInputValue(newValue)
  }

  // TODO
  // Goal when user is searching, send what they type to filter out coins via the pythCoins.ts
  // Once a coin is selected return a coin object with it's current price
  // { name: Bitcoin, symbol: BTC, price: '$34,329.92' }
  const filteredCoins = filterCoins(inputValue)
  console.log('filteredCoins', filteredCoins)

  return (
    <div className="search-container">
      <div className="search-input">
        <div className="search-icon">
          <SearchIcon />
        </div>

        <input
          type="search"
          value={inputValue}
          placeholder="Search coins"
          onChange={handleInputChange}
        />
      </div>

      {inputValue.length >= MIN_SEARCH_LENGTH && filteredCoins.length > 0 && (
        <div className="search-dropdown">
          <div>
            <ul>
              {filteredCoins.map((coin, i) => (
                <li key={i} onClick={() => handleCoinSelect(coin)}>
                  {coin.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
