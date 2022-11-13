import { ReactElement, useState } from 'react'

import './App.css'
import { ReactComponent as Svg } from './assets/shuffle.svg'
import { Container, Footer, Header, TextSection } from './styles'
import { Button, ErrorField, FilmDefail } from './components'
import { FilmClienteAPI } from './api'
import { IDataGetFilm } from './api/FilmClienteAPI'

const filmClienteAPI = new FilmClienteAPI()

interface IError {
  /* Flag para dizer se há erro. */
  status: boolean,
  /* Mensagem do erro. */
  message: string,
}

const App = (): ReactElement => {
  const [dataFilm, setDataFilm] = useState<IDataGetFilm | undefined>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<IError>({status: false, message: ''})

  const searchFilm = () => {
    setError({
      status: false,
      message: '',
    })
    setLoading(true)
    filmClienteAPI.getRandomFilm()
    .then((response: IDataGetFilm) => {
      setDataFilm(response)
    })
    .then(() => setLoading(false))
    .catch((err) => {
      const status = err.response.status
      status === 404 && setError({
        status: true,
        message: 'Houve um problema na busca do filme, vamos buscar outro para você, aguarde um momento por favor.'
      })
      setTimeout(() => {
        searchFilm()
      }, 3000);
    })
  }

  return (
    <>
      <Container>
        <Header>
          <Svg style={{width: "100px"}}/>
          <b>Não sabe oque assistir?</b>
        </Header>

        {!error.status && (
          <FilmDefail
            dataFilm={dataFilm}
            loading={loading}
          />
        )}

        {error.status && (
          <ErrorField>
            {error.message}
          </ErrorField>
        )}

        <Footer>
          <Button 
            error={error.status}
            onClick={():void => searchFilm()}
          >
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
