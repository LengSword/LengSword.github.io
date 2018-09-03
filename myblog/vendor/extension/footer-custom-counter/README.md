### NetEase API
//http://s.music.163.com/search/get/?version=1&type=1&s=songname&limit=3&offset=0
//http://music.163.com/song/media/outer/url?id=songid
```javascript
    function heredoc(fn) {
        return fn.toString().split('\n').slice(1,-1).join('\n') + '\n';
    };
if(cur_md_path == "home.md" && cur_md_path == "") { //Music 0x01 - Index Music Box
    var htmlCodes = heredoc(function(){/*
        <div id="aplayer"></div>
        <script>
        const ap = new APlayer({
            container: document.getElementById('aplayer'),
            fixed: false,
            autoplay: false,
            loop: 'all',
            preload: 'auto',
            mutex: true,
            listFolded: false,
            listMaxHeight: 90,
            lrcType: 1,
            audio: [
                {
                    name: '一番の宝物 ~Yui final ver.~',
                    artist: 'LiSA',
                    url: 'http://music.163.com/song/media/outer/url?id=419594773',
                    cover: 'http://p1.music.126.net/sRjvTkCN4p1R36QPXcDClA==/3442570911926214.jpg',
                    lrc: ' [00:16.680]颜を合わしたら喧哗してばかり\
                           [00:24.450]それもいい思い出だった\
                           [00:31.630]きみが教えてくれたんだ もう恐くない\
                           [00:39.450]どんな不自由でも幸せは掴める だから\
                           [00:55.460]ひとりでもゆくよ 例え辛くても\
                           [01:03.380]きみと见た梦は 必ず持ってくよ\
                           [01:11.460]きみとがよかった ほかの谁でもない\
                           [01:19.370]でも目覚めた朝 きみは居ないんだね\
                           [01:44.670]ずっと游んでれる そんな気がしてた\
                           [01:52.530]気がしていただけ わかってる\
                           [01:59.330]生まれてきたこともう后悔はしない\
                           [02:07.350]祭りの后みたい 寂しいけどそろそろ行こう\
                           [02:23.420]どこまでもゆくよ ここで知ったこと\
                           [02:31.240]幸せという梦を叶えてみせるよ\
                           [02:39.370]きみと离れても どんなに远くなっても\
                           [02:47.320]新しい朝に あたしは生きるよ\
                           [03:29.280]ひとりでもゆくよ 死にたくなっても\
                           [03:37.140]声が闻こえるよ 死んではいけないと\
                           [03:45.220]例え辛くても 寂しさに泣いても\
                           [03:53.210]心の奥には 温もりを感じるよ\
                           [04:01.360]巡って流れて 时は移ろいだ\
                           [04:09.050]もう何があったか 思い出せないけど\
                           [04:17.120]目を闭じてみれば 谁かの笑い声\
                           [04:25.270]なぜかそれが今一番の宝物\
                        ',
                },
                {
                    name: 'You - 钢琴版',
                    artist: 'nayuta',
                    url: 'http://music.163.com/song/media/outer/url?id=34125127',
                    cover: 'http://p1.music.126.net/v22kNtMro7CvzoiCYJ4zjQ==/3315027558990599.jpg',
                    lrc: '[00:00.00]纯音乐 请欣赏',
                }
            ]
        });
        </script>
    */});
    e("#main-page").append(htmlCodes);

}
```