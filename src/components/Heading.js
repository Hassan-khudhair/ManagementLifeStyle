import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faHomeUser } from '@fortawesome/free-solid-svg-icons'
import useLocalStorage from 'use-local-storage';

export default function Heading() {
    
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    }
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    console.log(theme)
    
    return (
        <div className='Heading'>
            <div className='navbar'>
                <a href="/"><FontAwesomeIcon icon={faHomeUser} className='icon' /></a>
                <FontAwesomeIcon icon={theme === 'light' ? faSun : faMoon } className={theme === 'light' ? 'icon sun' : 'icon moon' }
                    onClick={switchTheme}
                />
            </div>
            <h1>lifestyle Management</h1>
        </div>
    )
}

