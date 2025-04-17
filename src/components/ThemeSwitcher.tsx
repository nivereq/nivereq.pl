"use client"

import { Inconsolata } from 'next/font/google';
import { useState, useEffect } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useTranslations } from 'next-intl';


const inconsolata = Inconsolata({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '700'],
    style: 'normal'
})


const ThemeSwitcher: React.FC = () => {
    const [theme, setTheme] = useState<string>('system');
    // Sync theme with localStorage and apply it
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'system';
        setTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const applyTheme = (theme: string) => {
        if (theme === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        } else {
            document.documentElement.setAttribute('data-theme', theme);
        }
    };

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    };


    const isDark = () => {
        const theme = localStorage.getItem('theme') || 'system';
        if (theme === 'system') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return prefersDark ? true : false;
        }
        return theme == "dark" ? true : false;
    };

    let i = 0;

    const t = useTranslations('HomePage');
    return (
        <div className={`themeswitcher ${inconsolata.className}`}>
            <Menu>
                <MenuButton className="shadow-md data-[hover]:cursor-pointer toggler"><i className={`themeicon bi ${isDark() ? "bi-moon" : "bi-brightness-high"}`}></i></MenuButton>
                <MenuItems anchor="top" className={`shadow-md themeoptions ${inconsolata.className}`}>
                    <MenuItem>
                        <a className="block" onClick={() => handleThemeChange('system')}>
                            {t("themes.system")}
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a className="block" onClick={() => handleThemeChange('light')}>
                            {t("themes.light")}
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a className="block" onClick={() => handleThemeChange('dark')}>
                            {t("themes.dark")}
                        </a>
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    );
}

export default ThemeSwitcher;