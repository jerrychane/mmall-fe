import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { AutoComplete, DataSourceTpye } from './autoComplete'
interface LakerPlayerProps {
    value: string;
    number: number
}
const SimpleComplete = () => {
    const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins', 'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
    const lakersWithNumber = [
        { value: 'bradley', number: 11 },
        { value: 'pope', number: 1 },
        { value: 'caruso', number: 4 },
        { value: 'cook', number: 2 },
        { value: 'cousins', number: 15 },
        { value: 'james', number: 23 },
        { value: 'AD', number: 3 },
        { value: 'green', number: 14 },
        { value: 'howard', number: 39 },
        { value: 'kuzma', number: 0 },
    ]
    const handleFecth = (query: string) => {
        return lakers.filter(name => name.includes(query)).map(name => ({ value: name }))
    }
    // const handleFecth = (query: string) => {
    //     return lakersWithNumber.filter(player => player.value.includes(query))
    // }
    // const renderOption = (item: DataSourceTpye) => {
    //     const itemWithNumber = item as DataSourceTpye<LakerPlayerProps>
    //     return (
    //         <>
    //             <h2>Name:{item.value}</h2>
    //             <p>Number:{itemWithNumber.number}</p>
    //         </>
    //     )
    // }
    return (
        <>
            <AutoComplete
                fetchSuggestions={handleFecth}
                onSelect={action('selected')}
            // renderOption={renderOption}
            />
        </>
    )
}

storiesOf('AutoComplete Component', module)
    .add('AutoComplete', SimpleComplete)