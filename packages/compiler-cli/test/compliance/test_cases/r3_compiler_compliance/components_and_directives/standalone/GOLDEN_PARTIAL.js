/****************************************************************************************************
 * PARTIAL FILE: component.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class OtherCmp {
}
OtherCmp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: OtherCmp, deps: [], target: i0.ɵɵFactoryTarget.Component });
OtherCmp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", type: OtherCmp, isStandalone: true, selector: "other-cmp", ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: OtherCmp, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    selector: 'other-cmp',
                    template: '',
                }]
        }] });
export class StandaloneCmp {
}
StandaloneCmp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: StandaloneCmp, deps: [], target: i0.ɵɵFactoryTarget.Component });
StandaloneCmp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", type: StandaloneCmp, isStandalone: true, selector: "ng-component", ngImport: i0, template: '<other-cmp></other-cmp>', isInline: true, dependencies: [{ kind: "component", type: OtherCmp, selector: "other-cmp" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: StandaloneCmp, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    template: '<other-cmp></other-cmp>',
                    imports: [OtherCmp],
                }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: component.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class OtherCmp {
    static ɵfac: i0.ɵɵFactoryDeclaration<OtherCmp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OtherCmp, "other-cmp", never, {}, {}, never, never, true>;
}
export declare class StandaloneCmp {
    static ɵfac: i0.ɵɵFactoryDeclaration<StandaloneCmp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StandaloneCmp, "ng-component", never, {}, {}, never, never, true>;
}

/****************************************************************************************************
 * PARTIAL FILE: directive.js
 ****************************************************************************************************/
import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class StandaloneDir {
}
StandaloneDir.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: StandaloneDir, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StandaloneDir.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", type: StandaloneDir, isStandalone: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: StandaloneDir, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: directive.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class StandaloneDir {
    static ɵfac: i0.ɵɵFactoryDeclaration<StandaloneDir, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StandaloneDir, never, never, {}, {}, never, never, true>;
}

/****************************************************************************************************
 * PARTIAL FILE: pipe.js
 ****************************************************************************************************/
import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class StandalonePipe {
    transform(value) { }
}
StandalonePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: StandalonePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
StandalonePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: StandalonePipe, isStandalone: true, name: "stpipe" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: StandalonePipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'stpipe',
                }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: pipe.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class StandalonePipe {
    transform(value: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<StandalonePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<StandalonePipe, "stpipe", true>;
}

/****************************************************************************************************
 * PARTIAL FILE: imports.js
 ****************************************************************************************************/
import { Component, Directive, NgModule, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class NotStandaloneDir {
}
NotStandaloneDir.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: NotStandaloneDir, deps: [], target: i0.ɵɵFactoryTarget.Directive });
NotStandaloneDir.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", type: NotStandaloneDir, selector: "[not-standalone]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: NotStandaloneDir, decorators: [{
            type: Directive,
            args: [{ selector: '[not-standalone]' }]
        }] });
export class NotStandalonePipe {
    transform(value) { }
}
NotStandalonePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: NotStandalonePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
NotStandalonePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: NotStandalonePipe, name: "nspipe" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: NotStandalonePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'nspipe' }]
        }] });
export class NotStandaloneStuffModule {
}
NotStandaloneStuffModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: NotStandaloneStuffModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NotStandaloneStuffModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: NotStandaloneStuffModule, declarations: [NotStandaloneDir, NotStandalonePipe], exports: [NotStandaloneDir, NotStandalonePipe] });
NotStandaloneStuffModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: NotStandaloneStuffModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: NotStandaloneStuffModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NotStandaloneDir, NotStandalonePipe],
                    exports: [NotStandaloneDir, NotStandalonePipe],
                }]
        }] });
export class IndirectDir {
}
IndirectDir.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: IndirectDir, deps: [], target: i0.ɵɵFactoryTarget.Directive });
IndirectDir.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", type: IndirectDir, isStandalone: true, selector: "[indirect]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: IndirectDir, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[indirect]',
                }]
        }] });
export class IndirectPipe {
    transform(value) { }
}
IndirectPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: IndirectPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
IndirectPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: IndirectPipe, isStandalone: true, name: "indirectpipe" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: IndirectPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'indirectpipe',
                }]
        }] });
export class SomeModule {
}
SomeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SomeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeModule, imports: [IndirectDir, IndirectPipe], exports: [NotStandaloneStuffModule, IndirectDir, IndirectPipe] });
SomeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeModule, imports: [NotStandaloneStuffModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: SomeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [IndirectDir, IndirectPipe],
                    exports: [NotStandaloneStuffModule, IndirectDir, IndirectPipe],
                }]
        }] });
export class DirectDir {
}
DirectDir.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: DirectDir, deps: [], target: i0.ɵɵFactoryTarget.Directive });
DirectDir.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", type: DirectDir, isStandalone: true, selector: "[direct]", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: DirectDir, decorators: [{
            type: Directive,
            args: [{
                    standalone: true,
                    selector: '[direct]',
                }]
        }] });
export class DirectPipe {
    transform(value) { }
}
DirectPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: DirectPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
DirectPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: DirectPipe, isStandalone: true, name: "directpipe" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: DirectPipe, decorators: [{
            type: Pipe,
            args: [{
                    standalone: true,
                    name: 'directpipe',
                }]
        }] });
export class TestCmp {
    constructor() {
        this.data = true;
    }
}
TestCmp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: TestCmp, deps: [], target: i0.ɵɵFactoryTarget.Component });
TestCmp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", type: TestCmp, isStandalone: true, selector: "test-cmp", ngImport: i0, template: `
    <p>Reference some non-standalone things:<span not-standalone>{{data | nspipe}}</span></p>
    <p>Reference some indirect standalone things:<span indirect>{{data | indirectpipe}}</span></p>
    <p>Reference some standalone things directly:<span direct>{{data | directpipe}}</span></p>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: SomeModule }, { kind: "directive", type: NotStandaloneDir, selector: "[not-standalone]" }, { kind: "directive", type: IndirectDir, selector: "[indirect]" }, { kind: "pipe", type: NotStandalonePipe, name: "nspipe" }, { kind: "pipe", type: IndirectPipe, name: "indirectpipe" }, { kind: "directive", type: DirectDir, selector: "[direct]" }, { kind: "pipe", type: DirectPipe, name: "directpipe" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: TestCmp, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    selector: 'test-cmp',
                    template: `
    <p>Reference some non-standalone things:<span not-standalone>{{data | nspipe}}</span></p>
    <p>Reference some indirect standalone things:<span indirect>{{data | indirectpipe}}</span></p>
    <p>Reference some standalone things directly:<span direct>{{data | directpipe}}</span></p>
  `,
                    imports: [SomeModule, DirectDir, DirectPipe],
                }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: imports.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class NotStandaloneDir {
    static ɵfac: i0.ɵɵFactoryDeclaration<NotStandaloneDir, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NotStandaloneDir, "[not-standalone]", never, {}, {}, never, never, false>;
}
export declare class NotStandalonePipe {
    transform(value: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotStandalonePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<NotStandalonePipe, "nspipe", false>;
}
export declare class NotStandaloneStuffModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NotStandaloneStuffModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NotStandaloneStuffModule, [typeof NotStandaloneDir, typeof NotStandalonePipe], never, [typeof NotStandaloneDir, typeof NotStandalonePipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NotStandaloneStuffModule>;
}
export declare class IndirectDir {
    static ɵfac: i0.ɵɵFactoryDeclaration<IndirectDir, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IndirectDir, "[indirect]", never, {}, {}, never, never, true>;
}
export declare class IndirectPipe {
    transform(value: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<IndirectPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<IndirectPipe, "indirectpipe", true>;
}
export declare class SomeModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SomeModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SomeModule, never, [typeof IndirectDir, typeof IndirectPipe], [typeof NotStandaloneStuffModule, typeof IndirectDir, typeof IndirectPipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SomeModule>;
}
export declare class DirectDir {
    static ɵfac: i0.ɵɵFactoryDeclaration<DirectDir, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DirectDir, "[direct]", never, {}, {}, never, never, true>;
}
export declare class DirectPipe {
    transform(value: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<DirectPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<DirectPipe, "directpipe", true>;
}
export declare class TestCmp {
    data: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<TestCmp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TestCmp, "test-cmp", never, {}, {}, never, never, true>;
}

/****************************************************************************************************
 * PARTIAL FILE: recursive.js
 ****************************************************************************************************/
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class RecursiveComponent {
}
RecursiveComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: RecursiveComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
RecursiveComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", type: RecursiveComponent, isStandalone: true, selector: "recursive-cmp", ngImport: i0, template: '<recursive-cmp></recursive-cmp>', isInline: true, dependencies: [{ kind: "component", type: RecursiveComponent, selector: "recursive-cmp" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: RecursiveComponent, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    selector: 'recursive-cmp',
                    // Simple recursion. Note: no `imports`.
                    template: '<recursive-cmp></recursive-cmp>',
                }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: recursive.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class RecursiveComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<RecursiveComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RecursiveComponent, "recursive-cmp", never, {}, {}, never, never, true>;
}

/****************************************************************************************************
 * PARTIAL FILE: module_optimization.js
 ****************************************************************************************************/
import { Component, Directive, NgModule } from '@angular/core';
import * as i0 from "@angular/core";
export class StandaloneCmp {
}
StandaloneCmp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: StandaloneCmp, deps: [], target: i0.ɵɵFactoryTarget.Component });
StandaloneCmp.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", type: StandaloneCmp, isStandalone: true, selector: "standalone-cmp", ngImport: i0, template: '', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: StandaloneCmp, decorators: [{
            type: Component,
            args: [{
                    standalone: true,
                    selector: 'standalone-cmp',
                    template: '',
                }]
        }] });
export class StandaloneDir {
}
StandaloneDir.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: StandaloneDir, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StandaloneDir.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", type: StandaloneDir, isStandalone: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: StandaloneDir, decorators: [{
            type: Directive,
            args: [{ standalone: true }]
        }] });
export class Module {
}
Module.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Module, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
Module.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Module, imports: [StandaloneCmp, StandaloneDir] });
Module.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Module, imports: [StandaloneCmp] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "0.0.0-PLACEHOLDER", ngImport: i0, type: Module, decorators: [{
            type: NgModule,
            args: [{
                    imports: [StandaloneCmp, StandaloneDir],
                }]
        }] });

/****************************************************************************************************
 * PARTIAL FILE: module_optimization.d.ts
 ****************************************************************************************************/
import * as i0 from "@angular/core";
export declare class StandaloneCmp {
    static ɵfac: i0.ɵɵFactoryDeclaration<StandaloneCmp, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StandaloneCmp, "standalone-cmp", never, {}, {}, never, never, true>;
}
export declare class StandaloneDir {
    static ɵfac: i0.ɵɵFactoryDeclaration<StandaloneDir, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StandaloneDir, never, never, {}, {}, never, never, true>;
}
export declare class Module {
    static ɵfac: i0.ɵɵFactoryDeclaration<Module, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<Module, never, [typeof StandaloneCmp, typeof StandaloneDir], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<Module>;
}

