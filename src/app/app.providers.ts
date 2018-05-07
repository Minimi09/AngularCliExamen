import { DataService } from './services/data.service';
import { ConsumeService } from "./services/consume.service";
import { LoginGetService } from './services/login.service';

export const APP_PROVIDERS = [
    DataService,
    ConsumeService,
    LoginGetService
];
