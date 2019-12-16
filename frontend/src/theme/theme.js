const white = "#FFFFFF"
const black = "#161617"
const gray = "#F8F8F9"

const themeLight = {
    background:gray,
    body:black
}

const themeDark = {
    background:black,
    body:white
}

const theme = mode => (mode === "dark" ? themeDark : themeLight)

export default theme


const defaultContextData = {
    dark:false,
    toggle:() => {}
}

const ThemeContext = React.createContext(defaultContextData)
const useTheme = () => React.useContext(ThemeContext)

export {useTheme}


const useEffectDarkMode = () => {
    const [themeState, setThemeState] = React.useState({
        dark:false,
        hasThemeMounted: false
    });
    React.useEffect(() =>{
        const lsDark = localStorage.getItem("dark") === "true";
        setThemeState({...themeState, dark:lsDark, hasThemeMounted: true});
    }, [])
    return[themeState, setThemeState]
}
//https://medium.com/maxime-heckel/switching-off-the-lights-adding-dark-mode-to-your-react-app-with-context-and-hooks-f41da6e07269
