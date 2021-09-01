require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remind exchange grace merry flock treat'; 
let testAccounts = [
"0x61bb3cb1aa3ff92f943516ac9918ef83438c05181c6e66c959484da6ea359730",
"0x0beffbd65cb57b8b2272de511621630f2df239045c6a3407e6a8bc6933ed7db7",
"0x401f055aebdc64f4dd108ea377d7fe47df374d72e8ad668176e06a941128cbe7",
"0x0aa796af982645bb56e636e97fbd0d4a03b06c3184299497e34bbea8f8710c81",
"0xdeeab9f21ff651f04b72f418d21f9b79a7c1ca6dcac777965aef5cfbfdeea7c9",
"0x269de80fc92edb745aa274fdb3469204386d87f379791ff72f1dc4ad42342d86",
"0x0cc916dceaba1478e1667cd0c60a6c9c1a6a261f212e4e50374b8e8f93f8a4f0",
"0x3257479fd415cf5564e237a5a75c927135a2d3f82e9f96d0027667163e20b3a6",
"0x15f9036299ac19524b9fd527d609c5885a77ad54ab69cac2ef2376f31f01b4e0",
"0x2594d245e2119b5b14512162bbcd1b2e456dadee6019a6dca843fd501d700430"
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

