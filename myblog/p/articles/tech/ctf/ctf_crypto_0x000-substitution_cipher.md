## ** ctf_crypto_0x000-substitution_cipher **

```python
#!/usr/bin/env/ python3
# -*- coding: utf-8 -*-
##
# @file ctf_crypto_0x000_substitution_cipher.py
# @description Substitution Cipher
##
# @author LengSword
# @blog lyu63.top
# @email 1030588973@qq.com or ylengsword@gmail.com
# @version 0.1
# @created-date 2018/08/16
# @last-modified-date 2018/11/03
# @license MIT
##


class SC_Crypto(object):
    def __init__(self, ciphertext):
        self.ciphertext = ciphertext

    def encrypt(self):
        ciphertext = self.ciphertext
        result = ""
        for pos, char in enumerate(ciphertext):
            char = chr(ord(char) + pos)
            result += char
        return result

    def decrypt(self):
        ciphertext = self.ciphertext
        result = ""
        for pos, char in enumerate(ciphertext):
            char = chr(ord(char) - pos)
            result += char
        return result


if __name__ == '__main__':
    r = SC_Crypto("123").encrypt()
    print(r)
    r = SC_Crypto("123").decrypt()
    print(r)

```
