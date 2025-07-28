import { getAddressByCep } from './viaCepService.service';
import * as httpClient from '../utils/httpClient';
import { AddressResponse } from '../types/addressResponse';

jest.mock('../utils/httpClient');

const mockedHttpGet = httpClient.httpGet as jest.Mock;

describe('getAddressByCep', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deve retornar AddressResponse válido quando o CEP existe', async () => {
    const mockData = {
      cep: '89700-900',
      logradouro: 'Rua Leonel Mosele',
      complemento: '62',
      bairro: 'Centro',
      localidade: 'Concórdia',
      uf: 'SC',
    };
    mockedHttpGet.mockResolvedValue(mockData);

    const result = await getAddressByCep('89700900');
    expect(result).toEqual(mockData as AddressResponse);
  });

  it('deve retornar null quando o CEP não existe', async () => {
    mockedHttpGet.mockResolvedValue({ erro: true });

    const result = await getAddressByCep('00000-000');
    expect(result).toBeNull();
  });

  it('deve retornar null quando a resposta é undefined', async () => {
    mockedHttpGet.mockResolvedValue(undefined);

    const result = await getAddressByCep('00000-000');
    expect(result).toBeNull();
  });
});
