import React, { ReactElement } from 'react'

import { IDataGetFilm } from '../api/FilmClienteAPI'

interface IFilmDefail {
  /* Dados do filme */
  dataFilm: IDataGetFilm | undefined,
	/* Flag para dizer se está carregando filme */
	loading: boolean,
}

const FilmDefail = (props: IFilmDefail): ReactElement => {
  return (
    <>
      <div style={{height: "307px"}}>
        {props.loading && 'Carregando...'}

        {(props.dataFilm && !props.loading) && (
          <>
            <div style={{display: "flex", width: "55vw"}}>
              <div style={{marginRight: "20px"}}>
                <img style={{maxWidth: "200px"}} src={props.dataFilm.image_path} alt="Imagem do filme" />
              </div>

              <div>
                <div>
                  <b>{props.dataFilm.title}</b>
                </div>

                <div>{props.dataFilm.overview}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export { FilmDefail }
export default FilmDefail