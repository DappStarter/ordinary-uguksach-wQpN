require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remind provide install fortune success sick'; 
let testAccounts = [
"0x9bb010a3790414f2e3fdc22b3b163813d58e7c8a647ff565eb1941c188168c28",
"0x5be750633faab11234305ca9aa42c02538400f93dcb7e2cba4e2464652826093",
"0xa7dfea94fc7dae7bfb95c7cec8be093046bcde19b86f0970c56468d4506cffb3",
"0xb7c059fb4ec4487d87c26255945052455f78ba5b075e677cb55de2b55aa2405a",
"0xff70d489b94b4a4d0d40e9a21ba4adb26d5f1cfd4ac9fcea7887a7a6feaaf8d6",
"0x23eac3d62617f0861c972736cb1674281f9ea06606b3cac36f0f519eff418364",
"0x7dbc42adde6afd3de6e51b5898c22b7073d0c97453178247599faa0a687c7bd8",
"0x9449bd899ad95a6c08ad4edbb1636395e317809bcc278bc9d8dbfa0479e0807d",
"0xcffe835ed34bba132aa86f8a2481dfd658c1c991621cee834014a3ebb569fc63",
"0x65ffe45572f555228decc2a30e827f3d7cb0493bbe83c1d207b4d6363e32b6ad"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

