import React, {useState} from 'react';
import { Divider, Input } from 'antd';


function SearchFood(props) {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
        props.search(e.target.value)
    }

  return (
    <div>
    <Divider>Search</Divider>
    <label>Search:</label>
    <Input type="text" value={search} onChange={handleSearch} />
    </div>
  )
}

export default SearchFood