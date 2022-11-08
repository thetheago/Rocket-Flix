import { ReactElement, useState } from 'react'

import './App.css'
import { ReactComponent as Svg } from './assets/shuffle.svg'
import { Container, Footer, Header, TextSection } from './styles'
import { Button, FilmDefail } from './components'
import { FilmClienteAPI } from './api'
import { IDataGetFilm } from './api/FilmClienteAPI'

const filmClienteAPI = new FilmClienteAPI()

const App = (): ReactElement => {
  const [dataFilm, setDataFilm] = useState<IDataGetFilm | undefined>()
  const [loading, setLoading] = useState<boolean>(false)

  const searchFilm = () => {
    setLoading(true)
    filmClienteAPI.getRandomFilm()
    .then((response: IDataGetFilm) => {
      setDataFilm(response)
    })
    .then(() => setLoading(false))
  }

  return (
    <>
      <Container>
        <Header>
          <Svg style={{width: "100px"}}/>
          <b>Não sabe oque assistir?</b>
        </Header>

        <FilmDefail
          dataFilm={dataFilm}
          loading={loading}
        />

        <Footer>
          <Button onClick={():void => searchFilm()}>
            Encontrar filme
          </Button>
          <TextSection>
            Clique em "Encontrar filme" que traremos informações<br />de algum filme para você assistir hoje.
          </TextSection>
        </Footer>
      </Container>
    </>
  );
}

export { App }
export default App
