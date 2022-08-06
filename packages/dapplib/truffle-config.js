require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue olympic system index random magic hole grace case equal giggle'; 
let testAccounts = [
"0x86f4f05bf97a4ffef4c1d0bab5481059dc250832dda7cd60fa83a74e68dccdc0",
"0x7519fd01f5c4b6714907cddeb6f374a2e9abffb507dbd3d28de8691e5a969b80",
"0x5b48410093ef8fdf2a08ef9d292ab203b1820f824148673420be68e3307cf265",
"0x66d9c6bfa52ba6eafce68b3eac01e45949ab568ef0c928cee29f821165721ecc",
"0x7e15958628691419f18d73330d841fb5e30af6d38c4b2a884c7d5c325b91d1ef",
"0xa4c1574081de77b4496a4493ab0b7db44a82033d5f5226f13aef7043ec8af6c3",
"0x36a94067936e129eab6d2aa09c8bde64f4be295d6caf25d6fa1827180c10688d",
"0xcf965b84b07adcbdee61239c11798c2faa6e2a9359015a1308161dba6eb0de5e",
"0x6dc8d7c49a5bcaa5647fc79b8742329c0c93249927d64bff5ef66bff6e4c9f75",
"0x46775f594535d93c609d3cc626fa66b2359cd8fb3b8ad30f9bcd4ed98f01adb2"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

