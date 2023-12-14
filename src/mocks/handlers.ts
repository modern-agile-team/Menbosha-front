import { http, HttpResponse } from 'msw';
import { userHandler } from './dummy/mentoMock';

export const handlers = [...userHandler];
