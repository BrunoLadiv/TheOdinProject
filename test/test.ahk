#NoEnv
SendMode Input
SetWorkingDir %A_ScriptDir%

LoopIsRunning := false

F1::CloseHeroSiegeConnections()
F2::ToggleLoop()

ToggleLoop() {
    LoopIsRunning := !LoopIsRunning
    if (LoopIsRunning) {
        SetTimer, RunLoop, 20
        ToolTip, Autologout ativo...
        SetTimer, HideToolTip, 3000 
    } else {
        SetTimer, RunLoop, Off
        ToolTip
    }
}

HideToolTip:
    ToolTip
    return

RunLoop:
    CoordMode, Pixel, Window
    PixelSearch, FoundX, FoundY, 169, 68, 175, 72, 0x1F0607, 0, Fast RGB Variation 15

    if (ErrorLevel = 0) {
        CloseHeroSiegeConnections()
    }
    return

CloseHeroSiegeConnections() {
    Process, Exist, Hero_Siege.exe
    If ErrorLevel {
        Run, taskkill /F /IM Hero_Siege.exe
    }
}
