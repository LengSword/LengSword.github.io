# 0x000-LSRMusicPlayer

## main.c

```c++
#include <windows.h>
#include <conio.h> 
#include <io.h> 
#include <mmsystem.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "main.h"

#pragma comment(lib, "winmm.lib") //mmsystem.h
#pragma warning(disable : 4996)


STATUS status = PLAY;
char g_title[64] = {0};
char g_songname[MAX_FILEPATH_LENGTH] = {0};

int main(void)
{
    CONSOLE_CURSOR_INFO cursor = {1,FALSE}; //Cursor Size(1~100) & IsVisible(0/1)
    char filename[MAX_FILEPATH_LENGTH] = {0};
    char lrctxt[MAX_FILEPATH_LENGTH][MAX_FILEPATH_LENGTH] = {0};
    int choose; //菜单项值 
    int totalrow;

    handle_stdout = GetStdHandle(STD_OUTPUT_HANDLE);
    SetConsoleCursorInfo(handle_stdout, &cursor);

    while (1)
    {
        sprintf(g_title, "LSR Music Player %s By LengSword", VERSIONS);
        SetConsoleTitleA(g_title);
        choose = MainMenu();
        switch (choose)
        {
            case 1:
                system("cls");
                totalrow = ReadLyricFile(filename, lrctxt);
                lrcfile = LrcFileStructAnalysis(lrctxt, totalrow);
                break;
            case 2:
                system("cls");
                DisplayInfos(lrcfile, 0);
                break;
            case 3:
                system("cls");
                DisplayInfos(lrcfile, 1);
                break;
            case 4:
                system("cls");
                DisplayInfos(lrcfile, 2);
                break;
            case 5:
                system("cls");
                if (ReadSongFile(filename, g_songname) != -1)
                {
                    printf("Success to open %s!\n", g_songname);
                }
                else
                {
                    printf("Failure to open %s!\n", g_songname);
                    Sleep(1000);
                    break;
                }
                Sleep(1000);
                system("cls");
                SyncPlaySong(lrcfile);
                break;
            case 0:
                system("cls");
                printf("End of program!\n");
                CloseHandle(handle_stdout);
                exit(0);
            default:
                system("cls");
                printf("Input error!\n");
        }
    }
    return 0;
}

int MainMenu(void)
{
    int item_selected;
    printf("===================================\n");
    printf("LSR Music Player:\n");
    printf("1.Read statistics from a .lrc file and analyse the statistics\n");
    printf("2.Print tags infos(except for lyrics)\n");
    printf("3.Print lyrics(Including the timeline tags)\n");
    printf("4.Print lyrics(No timeline tags)\n");
    printf("5.Start the LSR music player\n");
    printf("0.Exit\n");
    printf("===================================\n");
    printf("Please Input your choice:");
    item_selected = getch() - 48;	//使用getch函数实时读取用户输入的字符
    return item_selected;
}

void PlayerMenu(void)
{
    printf("=============Player Controller==============\n");
    printf("↑(上方向键).Play/Pause Music\n");
    printf("↓(下方向键).Stop Music\n");
    printf("←(左方向键).Position-5s\n");
    printf("→(右方向键).Position+5s\n");
    printf("-(减号键).Volume-\n");
    printf("+(加号键).Volume+\n");
    return;
}

/*
读取指定文件路径中.lrc歌词文件的内容
成功返回读取到的歌词文件总行数,失败返回-1
*/
int ReadLyricFile(char *filepath, char lrctxt[][MAX_FILEPATH_LENGTH])
{
    FILE *fp;
    int i = 0;
    char *tmp = NULL;
    char tmppath[MAX_FILEPATH_LENGTH] = {0};

    printf("[E.g.C:/Users/HP/Desktop/MyLyricLoader/lrc/zgz.lrc] or [zgz.lrc]\n");
    printf("Input the music lyric file path and the name(.lrc):");
    fgets(filepath, MAX_FILEPATH_LENGTH, stdin);
    filepath[strlen(filepath) - 1] = '\0';
    if ((tmp = strstr(filepath, ".lrc")) == NULL)
    {
        strcat(filepath, ".lrc");
    }
    if ((tmp = strstr(filepath, "lrc/")) == NULL)
    {
        sprintf(tmppath, "./lrc/%s", filepath);
    }
    else {
        strcpy(tmppath, filepath);
    }
    
    //GetLongPathNameW(filepath, filepath, MAX_FILEPATH_LENGTH);
    //GetFullPathNameW(filepath, sizeof(filepath), filepath, NULL);
    //使用WINAPI-GetLongPathName来将指定的路径转化成长路径形式,防止出现短路径的情况 
    //然后使用GetFullPathName函数将路径转换为完整路径
    //NOTE:不进行处理,由VS自动处理编码问题
    if ((fp = fopen(tmppath, "r")) == NULL)
    {
        printf("Failure to open %s!\n", tmppath);
        memset(&lrcfile, 0, sizeof(lrcfile)); //Reset lrcfile struct data
        memset(lrctxt, 0, sizeof(lrctxt)); //Reset lrctxt data
        return -1;
    }
    while (fgets(lrctxt[i], MAX_FILEPATH_LENGTH * 2, fp) != NULL && feof(fp) == 0) //feof()=0 ==>文件未读取结束 
    {
        i++;
    }
    fclose(fp);
    printf("Success to open %s!\n", tmppath);
    return i;
}

/*
检测指定文件路径中[g_songname].mp3歌曲文件是否存在
成功返回0,失败返回-1
*/
int ReadSongFile(char *filename, char *g_songname)
{
    char *tmp = NULL;
    char tmpname[MAX_FILEPATH_LENGTH] = {0};

    printf("[E.g.C:/Users/HP/Desktop/MyLyricLoader/songs/tdjm.mp3]\n");
    printf("Input the .mp3 file path and the name(.mp3):");
    fgets(g_songname, MAX_FILEPATH_LENGTH, stdin);
    g_songname[strlen(g_songname) - 1] = '\0';
    if ((tmp = strstr(g_songname, ".mp3")) == NULL)
    {
        strcat(g_songname, ".mp3");
    }
    if ((tmp = strstr(g_songname, "songs/")) == NULL)
    {
        sprintf(tmpname, "./songs/%s", g_songname);
    }
    else {
        strcpy(tmpname, g_songname);
    }

    if (access(tmpname, 4) == -1)
    {
        return -1;
    }
    strcpy(g_songname, tmpname);
    return 0;
}

/*
分析lrc歌词文件结构
成功返回LyricFile结构体,失败返回NULL
args:
int totalrow - 总行数
*/
LyricFile LrcFileStructAnalysis(char lrctxt[][MAX_FILEPATH_LENGTH], int totalrow)
{
    int tagrow = -1;
    char *tmp = NULL;
    LyricFile lrctmp;
    memset(&lrctmp, 0, sizeof(lrctmp));
    /*
    tag 标签分析:
    */
    do
    {
        tagrow++;
        tmp = GetTextMidSection(lrctxt[tagrow], "[ti:", "]");
        if (tmp != NULL)
        {
            strcpy(lrctmp.title, tmp);
            continue;
        }
        tmp = GetTextMidSection(lrctxt[tagrow], "[ar:", "]");
        if (tmp != NULL)
        {
            strcpy(lrctmp.artist, tmp);
            continue;
        }
        tmp = GetTextMidSection(lrctxt[tagrow], "[al:", "]");
        if (tmp != NULL)
        {
            strcpy(lrctmp.album, tmp);
            continue;
        }
        tmp = GetTextMidSection(lrctxt[tagrow], "[by:", "]");
        if (tmp != NULL)
        {
            strcpy(lrctmp.by, tmp);
            continue;
        }
        lrctmp.offset = 0;
        tmp = GetTextMidSection(lrctxt[tagrow], "[offset:", "]");
        if (tmp != NULL)
        {
            lrctmp.offset = atoi(tmp);
            continue;
        }
    } while (tmp != NULL);
    lrctmp.totalrow = totalrow;
    lrctmp.tagrow = tagrow;
    /*
    歌词分析:
    (关键是取时间段,注意时间段可一行多个时间)
    */
    int lrcrow, lrccolumn, i, j;
    char *first, *next, *tmp3 = NULL;
    char txttmp[MAX_FILEPATH_LENGTH];
    for (lrcrow = tagrow, lrccolumn = 0, i = 0; lrcrow <= totalrow; lrcrow++, i++, lrccolumn = 0)
    {   
        strcpy(txttmp, lrctxt[lrcrow]);
        first = strtok(lrctxt[lrcrow], "["); //strtok用法详见头文件LyricLoader.h 
        if (first == NULL) //若无[的出现,即该行无[]的标签,故跳过该行
            continue;
        next = strtok(NULL, "["); //取后面是否有下一个时间标签 
        do
        {
            first = GetTextMidSection(first, "", "]");
            //处理后得到mm:ss或mm:ss.ff形式的文本 
            //下面获取时间.先分割":"后分割"."就可以了
            //但是注意:strtok函数会破坏被分解字符串的完整，调用前和调用后的s已经不一样了  
            if (first == NULL)
            {
                break;
            }

            tmp3 = strtok(first, ":"); //取mm 

            lrctmp.linetime[i][lrccolumn].m = atoi(tmp3);
            tmp3 = strtok(NULL, ":"); //取ss.ff or ss 
            tmp3 = strtok(tmp3, "."); //取ss 
            if (tmp3 == NULL) //若为mm:ss类型的时间段,则取first为ss
            {
                lrctmp.linetime[i][lrccolumn].s = atoi(first);
            }
            else
            {
                //此时tmp3=ss
                lrctmp.linetime[i][lrccolumn].s = atoi(tmp3);
                tmp3 = strtok(NULL, "."); //取ff 
                lrctmp.linetime[i][lrccolumn].hs = atoi(tmp3);
                //printf("%s\n",tmp3);
            }
            lrccolumn++;
            first = next;
            next = strtok(next, "[");
            if (next != NULL)
            {
                next = strtok(NULL, "[");
            }
            else
            {
                break;
            }
            //printf("%s",first); 

        } while (1);

        //下面处理歌词.直接用GetTextMidSection函数删掉前面的时间段 
        //用first作为临时变量 
        first = GetTextMidSection(txttmp, "]", "\n");
        for (j = 0; j<lrccolumn - 1; j++)
        {
            first = GetTextMidSection(first, "]", "");
        }

        if (first == '\0') //注意:first=='\0'时,若直接strcpy会导致出错,故应处理
        {
            memset(txttmp, 0, sizeof(txttmp));
            strcpy(lrctmp.lyrics[i], txttmp);
        }
        else
        {
            strcpy(txttmp, first);
            strcpy(lrctmp.lyrics[i], txttmp);
        }


        //printf("%s\n",lrctmp.lyrics[i]);

    }
    return lrctmp;
}


/*
使用自定义格式输出指定类型的信息
成功返回0,失败返回-1
DisplayInfos:
type:
0 - Tags Infos
1 - lyrics(Including the timeline tags)
2 - lyrics(No timeline tags)
*/
int DisplayInfos(LyricFile lf, int type)
{
    int i, j;
    switch (type)
    {
        case 0:
            printf("=====歌词标签信息=====\n");
            if (lf.title != NULL)
            {
                printf("歌曲名:%s\n", lf.title);
            }

            if (lf.artist != NULL)
            {
                printf("歌手名:%s\n", lf.artist);
            }

            if (lf.album != NULL)
            {
                printf("所属专辑:%s\n", lf.album);
            }
            if (lf.by != NULL)
            {
                printf("歌词制作者:%s\n", lf.by);
            }
            printf("补偿时值:%d\n", lf.offset);
            printf("======================\n");
            break;
        case 1:
            printf("=========歌词=========\n");
            for (i = 0; i<(lf.totalrow - lf.tagrow); i++)
            {
                j = 0; //同一行的时间标签个数
                while (!(lf.linetime[i][j].m == 0 && lf.linetime[i][j].s == 0 && lf.linetime[i][j].hs == 0))
                {
                    printf("%s", Time2TXT(lf.linetime[i][j]));
                    j++;
                }
                printf("%s\n", lf.lyrics[i]);
            }
            printf("======================\n");
            break;
        case 2:
            printf("=========歌词=========\n");
            for (i = 0; i<(lf.totalrow - lf.tagrow); i++)
            {
                printf("%s\n", lf.lyrics[i]);
            }
            printf("======================\n");
            break;
        default:
            return -1;
    }
    return 0;
}

/*
与读入的歌词同步播放MP3音乐文件
*/
void SyncPlaySong(LyricFile lf)
{
    //在进程默认堆内存上申请一个内存空间
    pSongMsg songmsg = (pSongMsg)HeapAlloc(GetProcessHeap(), HEAP_ZERO_MEMORY, sizeof(SongMsg));
    if (songmsg == NULL)
    {
        printf("HeapAlloc Memory Failure!\n");
        return;
    }
    handle_thread = CreateThread(NULL, 0, SyncPrintMusicInfos, songmsg, 0, NULL);
    if (handle_thread == NULL)
    {
        printf("CreateThread Failure!\n");
        return;
    }
    CloseHandle(handle_thread); //关闭线程句柄,防止句柄泄露
    while (1)
    {
        songmsg->choose = getch() - 42;
        if (status == STOP)
        {
            return;
        }
    }
    system("cls");
}

/*
Thread Main Function
*/
DWORD WINAPI SyncPrintMusicInfos(LPVOID lpParam)
{
    CONSOLE_SCREEN_BUFFER_INFO csbi;
    Time nowtime;
    char *status_str[] = {"停止","播放中","暂停"};
    char cmd[MAX_FILEPATH_LENGTH] = {0};
    char mci_str_buf[MAX_FILEPATH_LENGTH] = {0};
    int length, volume;
    int nowlyrics = 0;
    int nowcolumn = 0;

    sprintf(cmd, "open %s", g_songname);
    mciSendStringA(cmd, mci_str_buf, MAX_FILEPATH_LENGTH, NULL);
    sprintf(cmd, "status %s length", g_songname);
    mciSendStringA(cmd, mci_str_buf, MAX_FILEPATH_LENGTH, NULL);
    length = atoi(mci_str_buf);
    sprintf(cmd, "status %s volume", g_songname);
    mciSendStringA(cmd, mci_str_buf, MAX_FILEPATH_LENGTH, NULL);
    volume = atoi(mci_str_buf);
    sprintf(cmd, "play %s", g_songname);
    mciSendStringA(cmd, NULL, 0, NULL);
    status = PLAY;

    sprintf(g_title, "LSR MP3 Player %s By LengSword", VERSIONS);
    SetConsoleTitleA(g_title);


    GetConsoleScreenBufferInfo(handle_stdout, &csbi);


    while (1)
    {
        // 与主进程通信,传递主进程的结构体数据到smsg中 
        pSongMsg smsg = (pSongMsg)lpParam;

        sprintf(cmd, "status %s position", g_songname);
        mciSendStringA(cmd, mci_str_buf, BUFSIZ, NULL);
        nowtime = int2Time(atoi(mci_str_buf));
        GetCmpNowTime_MaxTime(nowtime, lrcfile.linetime, &nowlyrics, &nowcolumn);
        //printf("%d,%d", i, j);

        switch (smsg->choose)
        {
            case 0:
                break;
            case 30: //Play or Pause
                if (status == PLAY)
                {
                    sprintf(cmd, "pause %s", g_songname);
                    mciSendStringA(cmd, NULL, 0, NULL);
                    status = PAUSE;
                }
                else
                {
                    sprintf(cmd, "play %s", g_songname);
                    mciSendStringA(cmd, NULL, 0, NULL);
                    status = PLAY;
                }
                smsg->choose = 0;
                break;
            case 3: //Volume-
                sprintf(cmd, "status %s volume", g_songname);
                mciSendStringA(cmd, mci_str_buf, MAX_FILEPATH_LENGTH, NULL);
                volume = atoi(mci_str_buf);
                if (volume != 0)
                {
                    volume -= 100;
                }
                sprintf(cmd, "setaudio %s volume to %d", g_songname, volume);
                mciSendStringA(cmd, NULL, 0, NULL);
                smsg->choose = 0;
                break;
            case 1: //Volume+
                sprintf(cmd, "status %s volume", g_songname);
                mciSendStringA(cmd, mci_str_buf, MAX_FILEPATH_LENGTH, NULL);
                volume = atoi(mci_str_buf);
                if (volume != 1000)
                {
                    volume += 100;
                }
                sprintf(cmd, "setaudio %s volume to %d", g_songname, volume);
                mciSendStringA(cmd, NULL, 0, NULL);
                smsg->choose = 0;
                break;
            case 33: //Position-
                sprintf(cmd, "seek %s to %d", g_songname, Time2int(nowtime) - 5000);
                mciSendStringA(cmd, NULL, 0, NULL);
                sprintf(cmd, "play %s", g_songname);
                mciSendStringA(cmd, NULL, 0, NULL);
                smsg->choose = 0;
                break;
            case 35: //Position+
                sprintf(cmd, "seek %s to %d", g_songname, Time2int(nowtime) + 5000);
                mciSendStringA(cmd, NULL, 0, NULL);
                sprintf(cmd, "play %s", g_songname);
                mciSendStringA(cmd, NULL, 0, NULL);
                smsg->choose = 0;
                break;
            case 38: //Stop
                sprintf(cmd, "stop %s", g_songname);
                mciSendStringA(cmd, NULL, 0, NULL);
                sprintf(cmd, "close %s", g_songname);
                mciSendStringA(cmd, NULL, 0, NULL);
                status = STOP;
                smsg->choose = 0;
                break;
        }
        system("cls");
        PlayerMenu();
        printf("=============About Music=============\n");
        printf("Music Name:%s\n", lrcfile.title);
        printf("Music Total Length:%s\n", Time2TXT(int2Time(length)));
        printf("Music Status:%s\n", *(status_str + status));
        printf("Music Volume:%d\n", volume);
        printf("Music Now Time:%s\n", Time2TXT(nowtime));
        printf("Music Now Lyrics:\n");
        printf("%s%s\n", Time2TXT(lrcfile.linetime[nowlyrics][nowcolumn]), lrcfile.lyrics[nowlyrics]);

        Sleep(50);

        if (status == STOP)
        {
            system("cls");

            printf("MP3 player has been stoped!\nPlease press any key to continue.\n");
            return 0;
        }

    }
}

/*
获取给定字符串的在两个子串之间的字符串
成功返回获取到的字符串,失败返回NULL
------
//PS:获取到的字符串中必不包含子串
//且获取的内容以最后一个查找到的左子串为头,以第一个查找到的右子串为尾
//(即返回最内层匹配到的左右子串之间的文本)

//E.g.
//src="[[123[4ag]sd]"; left="["; right="]";
//GetTextMidSection(src,left,right) ==> "4ag"
*/
char *GetTextMidSection(char src[], char left[], char right[])
{
    if (left == "" && right != "") //若左子串为空而右子串不为空,则返回在右子串之前的文本 
        return DeleteText_Right(src, right);
    if (left != "" && right == "") //若右子串为空而左子串不为空,则返回在左子串之后的文本 
        return DeleteText_Left(src, left);
    if (left == "" && right == "") //若左右子串都为空,则返回源文本  
        return src;
    if (left != "" && right != "") //返回正常情况处理后的文本 
        return DeleteText_Right(DeleteText_Left(src, left), right);
    return NULL;
}



/*
删除(仅删除一次)在源字符串src中的第一个找到的给定子串dest后,获取不存在给定子串的dest的字符串
如果子串dest为空串,函数返回源字符串src.
成功返回获取到的字符串指针,失败返回NULL
*/
char *DeleteText_Left(const char src[], char dest[])
{
    char *p = strstr(src, dest);

    if (src == NULL || p == NULL)
    {
        return NULL;
    }
    p = p + strlen(dest);
    return p;
}

/*
删除(仅删除一次)在源字符串src中的第一个查找到的给定子串dest后,获取不存在给定子串dest的字符串
如果子串dest为空串,函数返回源字符串src.
成功返回获取到的字符串指针,失败返回NULL
*/
char *DeleteText_Right(const char src[], char dest[])
{
    char *p;
    static char src2[MAX_FILEPATH_LENGTH];

    if (src == NULL)
    {
        return NULL;
    }
    strcpy(src2, src);
    p = strstr(src2, dest);
    if (p == NULL)
    {
        return NULL;
    }
    strnset(p, '\0', strlen(dest));
    return src2;
}

/*
返回给定的时间结构体为对应的时间段文本
*/
static char *Time2TXT(Time t)
{
    static char buf[64];

    sprintf(buf, "[%02d:%02d.%02d0]", t.m, t.s, t.hs);
    return buf;
}

/*
返回给定的时间结构体为对应的时间戳
*/
static int Time2int(Time t)
{
    return ((t.m * 60 + t.s) * 1000 + t.hs);
}

/*
返回给定的时间戳为对应的时间结构体
*/
static Time int2Time(int t)
{
    Time buf;
    int tmp = t % 1000; //等同于取后三位数

    buf.hs = tmp;
    t /= 1000; //等同于去掉后三位数
    tmp = t / 60;
    buf.m = tmp;
    t %= 60;
    buf.s = t;
    return buf;
}

/*
获取不超过当前时间线的最大时间线
通过参数ilyrics,icolumn分别返回i,j
*/
void GetCmpNowTime_MaxTime(Time nowtime, Time linetime[][16], int *ilyrics, int *icolumn)
{
    int i, j;
    int m = 0, n = 0; //临时存储最大时间线[m,n]
    for (i = 0; i < MAX_FILEPATH_LENGTH; i++)
    {
        for (j = 0; j < 16; j++)
        {
            if (Time2int(linetime[i][j]) == 0)
                continue;
            if (Time2int(nowtime) > Time2int(linetime[i][j]))
            {
                if (Time2int(linetime[i][j]) >= Time2int(linetime[m][n]))
                {
                    m = i;
                    n = j;
                }
            }

        }
    }

    *ilyrics = m;
    *icolumn = n;
}
```

## main.h

```c++
//TODO:
//1.模块化,功能专门化
//2.命名规范化
//3.控制台API
//4.程序逐步向窗口程序构造代码
//5.歌词文件/音频文件分类到文件夹

#ifndef LSRMusicPlayer_main_h_
#define LSRMusicPlayer_main_h_

#define OVECCOUNT 30
#define VERSIONS "0.2A"
#define MAX_FILEPATH_LENGTH 255

typedef struct
{
	int m; //minutes
	int s; //seconds
	int hs; //hundredths of a second
} Time, *pTime;

typedef struct
{
  char artist[MAX_FILEPATH_LENGTH];  //歌手名,ar
  char title[MAX_FILEPATH_LENGTH];  //歌曲名,ti
  char album[MAX_FILEPATH_LENGTH];  //专辑,al
  char by[MAX_FILEPATH_LENGTH];     //LRC歌词文件的制作者,by
  int offset;   //补偿时值,单位:ms  
  Time linetime[MAX_FILEPATH_LENGTH][16];  //歌词对应时间线,一行可多个时间,仅支持最大一行16个
  char lyrics[MAX_FILEPATH_LENGTH][MAX_FILEPATH_LENGTH];    //歌词内容 
  int totalrow; //歌词文件总行数
  int tagrow; //歌词文件标签总行数
} LyricFile;

typedef struct //传递主线程数据的结构体
{
  int choose; //菜单项
} SongMsg, *pSongMsg;

typedef enum
{
  STOP = 0,
  PLAY,
  PAUSE,
} STATUS;

int MainMenu(void);
void PlayerMenu(void);
int ReadLyricFile(char *filepath, char lrctxt[][MAX_FILEPATH_LENGTH]);
int ReadSongFile(char *filename, char *songname);
//void  WriteLyricFile(LyricFile lf,char *lrcpath);
LyricFile LrcFileStructAnalysis(char lrctxt[][MAX_FILEPATH_LENGTH], int totalrow);
int DisplayInfos(LyricFile lf, int type);
void SyncPlaySong(LyricFile lf);

/* Private Functions */
char *GetTextMidSection(char src[], char left[], char right[]);
char *DeleteText_Left(const char src[], char dest[]);
char *DeleteText_Right(const char src[], char dest[]);
static int Time2int(Time t);
static char *Time2TXT(Time t);
static Time int2Time(int t);
void GetCmpNowTime_MaxTime(Time nowtime, Time linetime[][16], int *ilyrics, int *icolumn);
DWORD WINAPI SyncPrintMusicInfos(LPVOID lpParam);

LyricFile lrcfile;
HANDLE handle_thread;
HANDLE handle_stdout;
HANDLE handle_outbuf;
COORD coord = { 0,0 }; //CMD char position struct

static STATUS status;
extern char g_title[64];
extern char g_songname[MAX_FILEPATH_LENGTH];

#endif //LSRMusicPlayer_main_h_
```
