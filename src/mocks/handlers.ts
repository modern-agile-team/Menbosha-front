import { http, HttpResponse } from 'msw';
import { userHandler } from './dummy/mento/mentoMock';
import { mentorBoards } from './dummy/mento/boardMock';

export const handlers = [...userHandler, ...mentorBoards];
