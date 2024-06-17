// Copyright 2024, Command Line Inc.
// SPDX-License-Identifier: Apache-2.0

// generated by cmd/generate/main-generate.go

declare global {

    // wstore.Block
    type Block = WaveObj & {
        blockdef: BlockDef;
        controller: string;
        view: string;
        runtimeopts?: RuntimeOpts;
        meta: MetaType;
    };

    // wshutil.BlockAppendFileCommand
    type BlockAppendFileCommand = {
        command: "blockfile:append";
        filename: string;
        data: number[];
    };

    // wshutil.BlockAppendIJsonCommand
    type BlockAppendIJsonCommand = {
        command: "blockfile:appendijson";
        filename: string;
        data: MetaType;
    };

    type BlockCommand = {
        command: string;
    } & ( BlockSetMetaCommand | BlockGetMetaCommand | BlockMessageCommand | BlockAppendFileCommand | BlockAppendIJsonCommand | BlockInputCommand | BlockSetViewCommand );

    // wstore.BlockDef
    type BlockDef = {
        controller?: string;
        view?: string;
        files?: {[key: string]: FileDef};
        meta?: MetaType;
    };

    // wshutil.BlockGetMetaCommand
    type BlockGetMetaCommand = {
        command: "getmeta";
        oid: string;
    };

    // wshutil.BlockInputCommand
    type BlockInputCommand = {
        command: "controller:input";
        inputdata64?: string;
        signame?: string;
        termsize?: TermSize;
    };

    // wshutil.BlockMessageCommand
    type BlockMessageCommand = {
        command: "message";
        message: string;
    };

    // wshutil.BlockSetMetaCommand
    type BlockSetMetaCommand = {
        command: "setmeta";
        oid?: string;
        meta: MetaType;
    };

    // wshutil.BlockSetViewCommand
    type BlockSetViewCommand = {
        command: "setview";
        view: string;
    };

    // wstore.Client
    type Client = WaveObj & {
        mainwindowid: string;
        meta: MetaType;
    };

    // wstore.FileDef
    type FileDef = {
        filetype?: string;
        path?: string;
        url?: string;
        content?: string;
        meta?: MetaType;
    };

    // fileservice.FileInfo
    type FileInfo = {
        path: string;
        notfound?: boolean;
        size: number;
        mode: number;
        modtime: number;
        isdir?: boolean;
        mimetype?: string;
    };

    // fileservice.FullFile
    type FullFile = {
        info: FileInfo;
        data64: string;
    };

    // wstore.LayoutNode
    type LayoutNode = WaveObj & {
        node?: any;
        meta?: MetaType;
    };

    type MetaType = {[key: string]: any}

    // tsgenmeta.MethodMeta
    type MethodMeta = {
        Desc: string;
        ArgNames: string[];
        ReturnDesc: string;
    };

    // waveobj.ORef
    type ORef = {
        otype: string;
        oid: string;
    };

    // wstore.Point
    type Point = {
        x: number;
        y: number;
    };

    // wstore.RuntimeOpts
    type RuntimeOpts = {
        termsize?: TermSize;
        winsize?: WinSize;
    };

    // webcmd.SetBlockTermSizeWSCommand
    type SetBlockTermSizeWSCommand = {
        wscommand: "setblocktermsize";
        blockid: string;
        termsize: TermSize;
    };

    // wstore.Tab
    type Tab = WaveObj & {
        name: string;
        layoutNode: string;
        blockids: string[];
        meta: MetaType;
    };

    // shellexec.TermSize
    type TermSize = {
        rows: number;
        cols: number;
    };

    // wstore.UIContext
    type UIContext = {
        windowid: string;
        activetabid: string;
    };

    type WSCommandType = {
        wscommand: string;
    } & ( SetBlockTermSizeWSCommand );

    // eventbus.WSEventType
    type WSEventType = {
        eventtype: string;
        oref?: string;
        data: any;
    };

    // eventbus.WSFileEventData
    type WSFileEventData = {
        zoneid: string;
        filename: string;
        fileop: string;
        data64: string;
    };

    // waveobj.WaveObj
    type WaveObj = {
        otype: string;
        oid: string;
        version: number;
    };

    // wstore.WaveObjUpdate
    type WaveObjUpdate = {
        updatetype: string;
        otype: string;
        oid: string;
        obj?: WaveObj;
    };

    // service.WebCallType
    type WebCallType = {
        service: string;
        method: string;
        uicontext?: UIContext;
        args: any[];
    };

    // service.WebReturnType
    type WebReturnType = {
        success?: boolean;
        error?: string;
        data?: any;
        updates?: WaveObjUpdate[];
    };

    // wstore.WinSize
    type WinSize = {
        width: number;
        height: number;
    };

    // wstore.Window
    type WaveWindow = WaveObj & {
        workspaceid: string;
        activetabid: string;
        activeblockid?: string;
        activeblockmap: {[key: string]: string};
        pos: Point;
        winsize: WinSize;
        lastfocusts: number;
        meta: MetaType;
    };

    // wstore.Workspace
    type Workspace = WaveObj & {
        name: string;
        tabids: string[];
        meta: MetaType;
    };

}

export {}
