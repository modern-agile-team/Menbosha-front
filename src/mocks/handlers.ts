import { http, HttpResponse } from 'msw';
import { userHandler } from './dummy/mento/mentoMock';

export const handlers = [...userHandler];
