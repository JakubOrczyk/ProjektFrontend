import React, { useState } from 'react';


export default function AsideLeft() {

    const [open, setOpen] = useState(null)
    const data = [
        {
            sport: "Piłka nożna",
            kluby: ["FC Barcelona", "Real Madryt"],
            ikona: "⚽️"
        },
        {
            sport: "Koszykówka",
            kluby: ["FC Barcelona", "Real Madryt"],
            ikona: "🏀"
        },
        {
            sport: "Baseball",
            kluby: ["FC Barcelona", "Real Madryt"],
            ikona: "⚾️"
        },
        {
            sport: "Boks",
            kluby: ["FC Barcelona", "Real Madryt"],
            ikona: "🥊"
        },
        {
            sport: "Counter-Strike 2",
            kluby: ["FC Barcelona", "Real Madryt"],
            ikona: "🎮"
        }
    ]
    const popularne = [
        {
            liga: "Liga Mistrzów",
        },
        {
            liga: "Ekstraklasa",
        },
        {
            liga: "La Liga",
        },
        {
            liga: "Premier Liga",
        }
    ]

    const toggle = (index) => {
        setOpen(open === index ? null : index)
    }

    return (
        <aside>
            <div id='szukajka'>
                <p>🔍</p>
                <input placeholder='Drużyna, turniej...'/>
            </div>
            <div id='kategorie'>
                <h2>Popularne</h2>
                <ul>
                    {popularne.map((item, index) => (
                        <div key={index} style={{borderBottomWidth: 1, borderBottomColor: 'rgb(239,240,240)', borderBottomStyle: 'solid'}}>
                            {item.liga}
                        </div>
                    ))
                    }
                </ul>
            </div>
            <div id='kategorie'>
                <h2>Sport</h2>
                <ul>
                    {data.map((item, index) => (
                        <div key={index} onClick={() => { toggle(index) }} style={{borderBottomWidth: 1, borderBottomColor: 'rgb(239,240,240)', borderBottomStyle: 'solid'}}>
                            {item.ikona}{item.sport}
                            {open === index &&
                                <ul>
                                    {item.kluby.map((klub) => (
                                        <li key={klub}>{klub}</li>
                                    ))}
                                </ul>
                            }
                        </div>
                    ))
                    }
                </ul>
            </div>
        </aside>
    );
};