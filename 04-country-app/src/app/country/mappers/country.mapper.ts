import { Country } from '../interface/country.interface';
import { RESTCountry } from '../interface/res-countries.interface';

/** Lo que hacemos en un mapper es que en la interface que nos da la API por defecto nos da
 * todas las variables que nos puede mandar pero como solo neceitamos unas cuantas nosotros
 * hacemos una interface para nuestro proyecto, por lo cual en los metodos estaticos recibimos la
 * respuesta completa del API y regresamos uns respuesta con nuestra interface, se podria decir que
 * es una respuesta mas limpia a lo que solo necesitamos
 */

export class CountryMapper {
  static mapRespuestaCapital(capital: RESTCountry): Country {
    return {
      cca2: capital.cca2,
      flag: capital.flag,
      flagSvg: capital.flags.svg,
      name: capital.translations['spa'].common,
      capital: capital.capital.join(', '),
      population: capital.population,
      official: capital.name.official,
      nameKor: capital.translations['kor'].common,
    };
  }

  static mapRespuestaCapitales(capital: RESTCountry[]): Country[] {
    return capital.map(this.mapRespuestaCapital);
  }
}
