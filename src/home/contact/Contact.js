import "./Contact.css"
import {socialNetworks} from "../utils/Constants"
export default function Contact() {
    return (
        <section id='contact'>
            <div className='socialnets'>
                <h1>
                    Social Networks
                </h1>
                <section>
                    <div className="socialnet">
                        <a href={socialNetworks["github"]} target="_blank" rel="noreferrer">
                            <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="github" width="100%"/>
                        </a>
                    </div>
                    <div className="socialnet">
                        <a href={socialNetworks["youtube"]} target="_blank" rel="noreferrer">
                            <img src="https://img.freepik.com/vector-premium/logotipo-rojo-youtube-logotipo-redes-sociales_197792-1803.jpg" 
                            alt="github" width="100%"/>
                        </a>
                    </div>
                    <div className="socialnet">
                        <a href={socialNetworks["linkedin"]} target="_blank" rel="noreferrer">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUAfrv///8AdbcAd7g
                            AeLioyODX5vHF2uq10OXB2OkAfLoAcbUAerkAc7b7/f7y9/tFk8Uehb9sps54rNJVmsnm8PaDs9WWvdoxi8Gfw92OudjP4O70+Ps7j8
                            Ndnsvh7PQmh78AaLFjosxY5DW2AAAGLUlEQVR4nO2d6XaiMBhAySJIEmQXce30/R9yQGuLiCYtiSY53/035wxj7mTfvgTojjRuiiwPX
                            CPPiiZO73WC0Z/37YZjKhh7d4J/DWOCYr5px5K3hnXBqXtuQxjlRf3QcFVy8e4UakDwcjVtGFH67sRpgtJoynDN3S6fQxhf3xtW5N3J
                            0gqpxoaZLyX0Cs1uDSvfBDvFami49quIXiDrH8OIvzs1RuDR1XDleC//CEZXX4alf5XwAi0vhrWfZbSH12fDwoeh2jSi6A1Tf7Owy8R
                            9Z9j6Wgt7aNsZbvxsSC+wDQq8LqRdMU2DGL87EUbBcdD4XA27itgEHvcVPaIIMp8bmq6pyYLcc0P3lkUBAADch1GCOwj1c5wgSJJtl7
                            sw3C2bI8beSQpexcM9nV3BvRrSsuR4QiPSMvFnQCRYNPbrOW18yUaSraYE+5XI5N1p0wIpHvh1tD6sETwT7BTdz0WRPRPsCqrr2zpMP
                            KqDV1xfrUsmW9Ehjm8LiEomiNDW6T6Dh3LDlcuNDZM0MxfWDmciWaoYnhzORC5rSC+4u6KlVki7YursVIqu5XY9S2d7fbVqiFDo7P4O
                            kXb3F1Jnmxqs0Bv27L03XDk7cMM77/Mwltv1nJxtaWirZhg521uIp9P7H9w9ssKYmmHl7JhGsTF1efqkNmxzd9DWb8WoGDq9UkMUWtO
                            ds31FDyPyGeKHy1nYdRifMsHW6SzsSCQzKJeXML54vty2d7cr/Ibhu63DgaAXh6pY8nCKUQceZGHQ3wVrpgWX/uwC481EZUwr9xuZH1
                            hyHDmeSo9uLJ4RON/u9l96YXvw4krtGIo5O1RVlnPs6V2p4Hwp3MW77AAAAAAAWEYfZwbjpAdjQqjwanzBKE4OZRuHdZru07QOo8X2G
                            HDiyxiR8k0zNdfeR9sPk6GBBJHxp8/Gezkiydt6Qu+6mNB+JIYmM6JcSoinfln62e1hOJZk0iMD4aeZCRtZyH4ZTa2XUtlnwy1HlhyU
                            doDqwsSk+wWGVCgeakHodNC//GzekCtuw15YaF/8Mm3IVM8KXKlzzRvOhg1F/qQBfcBR73alWUOqeDTwFr23PIwakuNfBBFa61Q0afh
                            XQb1XIAwaUoVT8o846mtuzBmKzd8FEdK352XMEJO95K88Rd8tD2OG/xRPBT5C2+a6KcO4nCeI0EFTOTVluFO7BfCEk6ZyaspQA5oiz1
                            hsWOvp9y021JSJNhvqqYk2G+ppTq021HLs02pDLUd3rTZERw1tjd2GOoqp3YY6giLabajjbqflhuX8ivgyw3oXL5fx7pdLbxoq4ksMw
                            22WJLjfsMEJqRa/mBpruNv5AsPlRzLcOxOEl8qOGnpE44Zhju/GXhQrfx7MHriZNtxObyclqksA869cGTb8fFSPnkfF+WF+Y2rW8PNx
                            U4i3Sv/C/LAjRg2bZ+2EStARhBazuwuThuHTMRfLVQznd4gmDSV33rDK1vD8C7oGDZey3lolE+dfnDNoKN16ULksP39QY85Q/r8vFDp
                            Fmw3lPRkTbhsqnONSuGhtsWGoMGZW+HGLDVWiFChURIsNVZbk2cFlQ6X70fLL8hYbKk1duXQqbK+hWuAlLF22sddQ7Qq4vLuw11AtZf
                            Jxm72GkVLK5MHGLDZUmvUQ6dFMMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDMARDM
                            ARDMARDMARDMARDMARDMNRtSLehhNNUWqWfLZSiPdBW9usaQvD072k850+fKYazkP66w08RAwAAuIMXz/k+huVB5rlhFmiKGG0rogga
                            zU+aWAZtgnj2wNVqcBzoCHFqMTwNZPG23IZtUKAUJsZZaNsZ7n0upnzfGep6YcBGRIF6Q33PmVgHr8+GqPS1JtI+ylRvuPLlDcwRjK6
                            +DFHkZznl58gvZ0O09nE5h6zRjyGq/KuK1wfBvgxR5pvi96N8V0NU+VVQyfeTbt+GaG3iEdM3wfga3RuiiPpSUikdxM8aGKJVaea93R
                            cjeDl8DmxoeH5v1/Hen1Fe3IbpuzVEaN9uOKaCuefJ+jfZ+aZNR0Zjw440bopMw9MfLybPiiYe63X8B12BcdmLsGMEAAAAAElFTkSuQmCC" 
                            alt="github" width="100%"/>
                        </a>
                    </div>
                    <div className="socialnet">
                        <a href={socialNetworks["grabcad"]} target="_blank" rel="noreferrer">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEXtMST////
                            sLiHsLSD+9PP++fn3rajtMiX//PzvTED//v/tOCvtNSjuQzb++vn+9/b6zMn97ez84+H1kIrvUEX4tbD5wLzvSDzuPjLsKRr
                            719X96un3qaTwVUr85OLxX1X1j4f0g3vybGP2oZvze3PycmnxZVv60s/xYFb83Nr5xsL2mZL0h4D5vLjxZl3zfXWzt4uZAAAOm
                            0lEQVR4nO1dh5KjOBBlJKIBE0wywWRjwOH//+4ke4KRgLNnx7F4VVd7uzPl0ZuWOqm7xTATJkyYMGHChAkTJkyYMGHChAkTJkyY
                            MGHChAkTJkyYMGHCpRDQf+AcEEB4/vdHL/Af8X88XprlceWCIKvRujxsF22eh7xt2zsM9KfN53mbpOXG8hSBeVGSihpl6SK3m8qvV4
                            HBauLHGTjWCMy6cvh2m1nyo9d6LQAQ5Cjb5rZuGuy8Q4yEODdMnV9kkgJfR44AKlKW8JUxxqwLrQoLS1m+DEe1CP1RwfUhsA8S8yJy
                            lFqfvZrgx0xb2aX6Gion8+dX8ztyNPREevTiLwHY6Ei7dIU4u4wjVyfuCwgRyPtQX/1in2LUW/kFKEKIDOEhWZyjzcPQdnTfHGWORO
                            0Xj17+RQBA8dQOXMmSonhdFkmLXIDa6DeSiKFmv8RRHIKgyJ7qIgEv8l0VaL2n0y+VF9inQ/jyswVFjYvWroIepWvk3qOX+e84ERWs
                            Mm8MWs/u3Eev74+AQ0U5zleUEBtLePTa/gxIjmpqkjqn2r/yQSQBGLclHXQ/eyeGDLPc+xwhw/WbMbR27PueQ4ylZBMM30aXfoKSIRu
                            +gT08xzKuuuewTt/rGDKwDIhjuGHeiiFQc3KTqo9e098CrKuOxZ/Vh7eSIMOoi64IOduCj17TXwIImd49hfXhRdJtFwJYodY9hbn7Xi
                            L0tnWHoFhlwjuJEIB907WFq1Z9LxG6YTeu0Oz4rU4hlBdE+OuXr5BKvBhATruH8CPYem9F0CsJhzTI3yqoAHLmdA2FYUePXtRfAjCx3
                            SWoOfvXuHe6DJgg4a012VuFFDC2ifyTXryTGgUg5omg0E/VdyIokATFOlXfaY/K5BbVqrcyhNDLCCWj6an3Rt4olEunS1BsSu99vFEA
                            5KLpEpw32VsR9A4+27lNM3bxy1V8DQMw1qLu8BPr/I1cNQEocW52j6DfRm9kJYCwJ8ygpm/dNzqCUM4IHcM6pfw+VgJCd1t3L3vNMOr
                            POgEA4ZIErpy+96KvAcRHsEOQRTu055oQkYNQ8FTXsqIoPiGyLMlVPeX4tWclivyY4JygiMsQqe/CdbeeFK3LdJHzvN3oJ+xsO2zbbb
                            GPI8n1ZEV4vsJwxT00HU9U89uNTOkYRM9ap/muqs3AYFl2/jE7QmNZIwjM2td34aLIYks90nwIlT4IAFpt9wiyTkHVkaItqO6TnR+M1
                            b2JrLGqq12+LSN5+SxKCkCFcERFf2EBUoAQRMnONC6rZ0Q8K3sRM0/BEQBrW3USMoFduLQArcQxtSFGvdJcNYsBXXxXoGA3Py8YFg19
                            EdPX9N46rK/hd8TczK0HUCIg7zs6lPX5zCN/8YBxCyKguhDm4eE3/l52fvPCrexUou0ZUNPqd/XEq0fXE0O09LP1GHoq9XT/QHlbX1g
                            F/oPZXDMCP48eWlokQHX703QhGlUbyT1xBGDKelCCoqhpGmsYRrAyEVZmXfsI2DLyiyLyhIcyBPL2+15ibujtWu1fTuT06RhRY4O60h
                            ubD9skSdLyiGwTnXB044THBl4CLPTPpc+Dps1cpd/VUpOe3iGR9Z1wcciOPqmrqsiJOUJh4Dce7rkJsnPcfDPNtJO1Spn4EwCzdmiCr
                            J6Xkesp8DOqgD8tmfemMQJBrU7bM08jb4Af3soHkyJo8KUrYFb3XfG1EOTWaZwwydTRbi21JSzh7EPbxa/R4AXVKI685XjDHZBySpHW
                            hydwxi7EBbrc4qlNqr9Q5d4FikHKqY6L5p3Sb/gcUsbimWUIvqWG9folqh3IKdVvUZXPx/AnOYb+X1ElF7kbDLgkRQaYrCIZBsnz3Aa
                            fRiQgEp4Vn1ruwzDkd45joz/DFnfbry2POdnrgc+wQtLtFm3pGWr1Tw6GIuM+tKQ9dhbW5ipATrLBnpxlY7Wq/QqRbbdlpCKHq5+knF
                            IH8UkqoxTPjfYHPE7AX7EsJ/bEBzMcHHCsYep2niCWSt/ngFgnGko+2FB69EkEjCdtDi3f1P3USCCeAR4qgHYstXIgL2ghPrguA0IvTk
                            M9uDZs5Xw+pZOAwpIW4nz32BJFeZNXF6b9CMyMZhGRmWAoJ5TzHTy0UtgrdGN+ddrhBFELmtQitiAky6OO1SeP26fA2pGb6ipodb7vrh
                            56qU9+F9vse/XSfRja2qXzA/oR2JkCziweAFZukB+p2dHDMoXHY/gvDD80fd/5RCBEdKCv5dajtA0QpCxtc74HttM0VW0a3P/oIW4XLT
                            sfKZd0pB+00sO0DXZmVKkH1ma9zop0i/jv9NpgBzcz23YvDwUlD6hvqpPnrdtXPClGcg4bPxiQZkVMFYARpU8/OP3xSXsa4GumgCAgn3
                            VTtE7deyPBEiXdAGb01YWml89cTHSkqXhRujP7rEuz6cYPQCnoywtNXz8zReYYNwLFSnCvNnkk/YJIN0F3QR9Fbhc/4UbtAs9NKBt6+o
                            VJhrmAsXJa2CwfQfAs0eLwF+VSp5YeLMiaWaBENk0xyK1l/8feEwCgQNgd9rJQgERtwKClqoKBsmkobTMzn6HXS4i2oZ3Hw+lRuNdJLW
                            L2XG4CpaQpivX20TXuQF7bJjcz0mEhwojv3qDNkKbpUSFATqm8FFZKj+3Px909eB1aMqzYgZuTsmn2fYkKqPYo1A/9oV2XUMma4zKMdP
                            i4ACrvK/K9ZRQA/S5or17cxY/L2wAh2502YLUfY0jKMEj62w9QmMHTTpDBR4+6OQQw5k+/c20s7wAlop95eOMBZU+OOkFY5dKDKAL5s6
                            x5ZpYjOh3GTleXcuHgxDKAtj19sV8PyPzWAODwWSjC2u6IYYal3/XaVsWIwJWiZ24m5eXdBUBZfyVY6mIsIPfy7mQ2pGeGGQpQOdQUQ9
                            HP7p+bwlrhcz8Z4ciSAbNpuss10lFXE7otHfLPnfvPVoLuV6Jzpo+NyaOcNq2JRn1NwEQ9NoMdKgu/GZCP9eWLGWMpFcDEzqyzSeutMu
                            5qAiXusRnB4s5pYhB/q/VmMyZCr+2KkLXHRcgcKfZUSvmHux5FqH7vpCAdUeVI+xO+Zn34/y4LAPYVFUqJTXbHBCNQ0i9toDkjQ4EAtH
                            hyesklA2gATGmbgaR/x336PbND9MuRb4PeglD9+mVqH6o9CnXVyncL+KXw6xAG4egeLYm7syC5dAxUj0IV7zZwEHjfMzs4Zz9S9qSsdW
                            JwAj9QhEn/DGZjU/tU3Fl3MRmAKb+1hzniMSKfgEi9sM3ld59ALmnfJtjeo2UYMNb3wjk7HvyJSMt0oqbZx6w6XLE+oC7oi4FmfQchnk
                            fi5shVJvK+iIh9tbgq5wIt2iriKUS31jZAKb6zg2IeDS55KbXELjPyKyNZoaBqwDVnc+ttirywnxjV3w+KEEmQWB7Lx1fuMEiOWfo4jj
                            S/NUX1Z++x+aDqV7y27moZ9Nu/1uvCsSLJ0Ail2+aIsYb7Eg1XbQaOBBAkcgbU/DeDymBkkydRaza3ZYhO//fe60lcnwBgRF55clX5Cy
                            UIVVJZIV0zljD5dwD3Z86h1gxYCsisyeksc+dXxWrQo+N9I72luUB79CdSMBe91hcAOdsRFVNcU/4qlQTlnoOY3jTvFn9FCjN8udf7ow
                            SVHH2Bb3N/lyuDHjnx7MYMgXdWobVK+kSIdMy2IjwR9tcjkqBEu9833aXLrPkxcU5fxTkEETVHnnV+N+QKwKV8IH9bSL8Vt2MI1bP0ya
                            rH8gLoZVTK2uCvrDT8rDyGjBct6BdruGp9O7cNJt+mcPbRUKkvABQp0QmCopn/X47s7NG5I5C7IMueFJdtE9C3wgZ/u0oiJTqLZpEtJB
                            fKqPuc8GNw532XYOcZveMXBAXj2JvmIahuFO/LQxI6/qqvb++WXlunR0nfUyJ0U4dQCzNWP7h9Z/BzmymYknvsKFxnZVketrgcnt81fr
                            0y+l9UYnfD4do/AsrlmWliyYdEkJUPqcSKwW/OXlMDSyhbm3V2SNN0kWOcHtNrMKq6xqXweJjCaPVqdbMKaQDOr6pnfvduBanQBXkCP8
                            S6jeDPtwE1xTX9lY8bXgMWQ+PmHCfO8HSIEVLnCJKbpYW7tpc7z+sByEiFvSIXyTbp+XwdwVtc33NPEWylm4X4MD43A8bie68ACNwsr8
                            jFi6sw65TmK9Eve9J/wNVt38SXPyLotWeGXPTL5Rc/xd3nOlXZjl9Q6yb+lKj5p/JpJEBnS82b+EOG6/MsO3JJMUP042R331Ysqfa4ms
                            9kcjHyQR94x+oSiKyf7294EQy7tQYcby0hbgqyytCn82Gsvu15yRAoWaibhkY+OncJvbnh89lNh0cKZWfuwbzJFNk9Oh30LRhnhjE9Xg
                            f/mhQvyrbhDvcRadxF3TYIM0xvt9iowg2vZQBjhd0zZDg5fj0toJWjuLILdyD1jsunPdeK1sWpUNpfGZgq4tpHFv0rx7ErPHAns9SBdv
                            6/YiiTkfZMMwzq9OFVGc42GvWq8HPHguy5EiKKa8IXLe7nOxl8g/2EsaprXz/2vRVZJHm3f4Q14i96lFLEwyF6urcolqennY8OtopkGq
                            /XZVEUh23yiW1aFGW2ji08+OoOgwbo0eL9YKsQhfLXrOYsoADw/C3r09+P/3KPgi/YV9pKQavRAXya8VRXAQhk6rOXH1+qr8kPD25u/k
                            +vG1WY9beIvgIA9YIBgbmB32Pum67zKoicMUXKBUd+LzGqox9ATsZEyOpthryN1zyAJwiRPihCMeAPkQdf573wPgBvO9BsiMx7XvQOt3
                            ox9J/CmVHv2lJ6WfX5AyCXPaeQNfUw3XjCU41t+iUg3UfABf4Oj7Z6rrFUv8aya+1nnFE7SYxDtbegx+CrmO9NKs5RrGYnG08RLho98y
                            JYZuac4/CYWzy+I41RqPYmu/ML0Godvdnx+SLFkehrTBm7DoobbeIIRaLHWdPvx+94S3ka7Pdee3PChAkTJkyYMGHChAkTJkyYMGHChA
                            kTJkyYMGHChAkTJrwk/gOicSOMzkO1CgAAAABJRU5ErkJggg==" alt="github" width="100%"/>
                        </a>
                    </div>
                </section>
            </div>
        </section>
    );
}