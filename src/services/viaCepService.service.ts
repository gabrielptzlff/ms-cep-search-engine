import { config } from 'dotenv';
import { AddressResponse } from '../types/addressResponse';
import { httpGet } from '../utils/httpClient';

config();

export async function getAddressByCep(
  cep: string,
): Promise<AddressResponse | null> {
  const url = `${process.env.VIACEP_URL}/${cep}/json/`;
  console.log(process.env.VIACEP_URL);
  console.log(`URL da requisição: ${url}`);
  const data = await httpGet(url);
  if (!data || data.erro) return null;

  const addressResponse: AddressResponse = {
    cep: data.cep,
    logradouro: data.logradouro,
    complemento: data.complemento,
    bairro: data.bairro,
    localidade: data.localidade,
    uf: data.uf,
  };

  return addressResponse;
}
