import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HostAppService, HostWindowService, LogService, PlatformService, UpdaterService } from 'tabby-core'

import { WebPlatformService } from './platform'
import { ConsoleLogService } from './services/log.service'
import { NullUpdaterService } from './services/updater.service'
import { WebHostWindow } from './services/hostWindow.service'
import { WebHostApp } from './services/hostApp.service'
import { MessageBoxModalComponent } from './components/messageBoxModal.component'

import './styles.scss'

@NgModule({
    imports: [
        CommonModule,
    ],
    providers: [
        { provide: PlatformService, useClass: WebPlatformService },
        { provide: LogService, useClass: ConsoleLogService },
        { provide: UpdaterService, useClass: NullUpdaterService },
        { provide: HostWindowService, useClass: WebHostWindow },
        { provide: HostAppService, useClass: WebHostApp },
    ],
    declarations: [
        MessageBoxModalComponent,
    ],
    entryComponents: [
        MessageBoxModalComponent,
    ],
})
export default class WebModule { } // eslint-disable-line @typescript-eslint/no-extraneous-class
