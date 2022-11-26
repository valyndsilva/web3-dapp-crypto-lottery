# Crypto Lottery Dapp:

Create a Project and install dependencies:

```
npx create-next-app -e with-tailwindcss web3-dapp-crypto-lottery
cd web3-dapp-crypto-lottery
npm run dev
```

## Deploying Your Smart Contract:

Create contract folder in the root.

### In contract/artifacts/Lottery.json:

```
{
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "BuyTickets",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "CurrentWinningReward",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DrawWinnerTicket",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "IsWinner",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "RefundAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "RemainingTickets",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "WithdrawCommission",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "WithdrawWinnings",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "checkWinningsAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "duration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "expiration",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTickets",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        }
      ],
      "name": "getWinningsForAddress",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastWinner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lastWinnerAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lotteryOperator",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxTickets",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "operatorTotalCommission",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "restartDraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ticketCommission",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ticketPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tickets",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "winnings",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "evm": {
    "assembly": "    /* \"Lottery.sol\":122:4608  contract Lottery {... */\n  mstore(0x40, 0x80)\n    /* \"Lottery.sol\":642:643  0 */\n  0x00\n    /* \"Lottery.sol\":601:643  uint256 public operatorTotalCommission = 0 */\n  0x02\n  sstore\n    /* \"Lottery.sol\":1345:1453  constructor() {... */\n  callvalue\n  dup1\n  iszero\n  tag_1\n  jumpi\n  0x00\n  dup1\n  revert\ntag_1:\n  pop\n    /* \"Lottery.sol\":1369:1384  lotteryOperator */\n  0x01\n    /* \"Lottery.sol\":1369:1397  lotteryOperator = msg.sender */\n  dup1\n  sload\n  not(sub(shl(0xa0, 0x01), 0x01))\n  and\n    /* \"Lottery.sol\":1387:1397  msg.sender */\n  caller\n    /* \"Lottery.sol\":1369:1397  lotteryOperator = msg.sender */\n  or\n  swap1\n  sstore\n    /* \"Lottery.sol\":1420:1446  block.timestamp + duration */\n  tag_4\n    /* \"Lottery.sol\":395:405  30 minutes */\n  0x0708\n    /* \"Lottery.sol\":1420:1435  block.timestamp */\n  timestamp\n    /* \"Lottery.sol\":1420:1446  block.timestamp + duration */\n  tag_5\n  jump\t// in\ntag_4:\n    /* \"Lottery.sol\":1407:1417  expiration */\n  0x00\n    /* \"Lottery.sol\":1407:1446  expiration = block.timestamp + duration */\n  sstore\n    /* \"Lottery.sol\":122:4608  contract Lottery {... */\n  jump(tag_7)\n    /* \"#utility.yul\":14:239   */\ntag_5:\n    /* \"#utility.yul\":54:57   */\n  0x00\n    /* \"#utility.yul\":85:86   */\n  dup3\n    /* \"#utility.yul\":81:87   */\n  not\n    /* \"#utility.yul\":78:79   */\n  dup3\n    /* \"#utility.yul\":75:88   */\n  gt\n    /* \"#utility.yul\":72:208   */\n  iszero\n  tag_9\n  jumpi\n    /* \"#utility.yul\":130:140   */\n  0x4e487b71\n    /* \"#utility.yul\":125:128   */\n  0xe0\n    /* \"#utility.yul\":121:141   */\n  shl\n    /* \"#utility.yul\":118:119   */\n  0x00\n    /* \"#utility.yul\":111:142   */\n  mstore\n    /* \"#utility.yul\":165:169   */\n  0x11\n    /* \"#utility.yul\":162:163   */\n  0x04\n    /* \"#utility.yul\":155:170   */\n  mstore\n    /* \"#utility.yul\":193:197   */\n  0x24\n    /* \"#utility.yul\":190:191   */\n  0x00\n    /* \"#utility.yul\":183:198   */\n  revert\n    /* \"#utility.yul\":72:208   */\ntag_9:\n  pop\n    /* \"#utility.yul\":224:233   */\n  add\n  swap1\n    /* \"#utility.yul\":14:239   */\n  jump\t// out\ntag_7:\n    /* \"Lottery.sol\":122:4608  contract Lottery {... */\n  dataSize(sub_0)\n  dup1\n  dataOffset(sub_0)\n  0x00\n  codecopy\n  0x00\n  return\nstop\n\nsub_0: assembly {\n        /* \"Lottery.sol\":122:4608  contract Lottery {... */\n      mstore(0x40, 0x80)\n      jumpi(tag_1, lt(calldatasize, 0x04))\n      shr(0xe0, calldataload(0x00))\n      dup1\n      0x71827b7b\n      gt\n      tag_25\n      jumpi\n      dup1\n      0xba946d79\n      gt\n      tag_26\n      jumpi\n      dup1\n      0xea3a1499\n      gt\n      tag_27\n      jumpi\n      dup1\n      0xea3a1499\n      eq\n      tag_22\n      jumpi\n      dup1\n      0xf2613269\n      eq\n      tag_23\n      jumpi\n      dup1\n      0xfe188184\n      eq\n      tag_24\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_27:\n      dup1\n      0xba946d79\n      eq\n      tag_19\n      jumpi\n      dup1\n      0xc6944fa0\n      eq\n      tag_20\n      jumpi\n      dup1\n      0xdd64e534\n      eq\n      tag_21\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_26:\n      dup1\n      0x96c85ef3\n      gt\n      tag_28\n      jumpi\n      dup1\n      0x96c85ef3\n      eq\n      tag_16\n      jumpi\n      dup1\n      0x9b894703\n      eq\n      tag_17\n      jumpi\n      dup1\n      0xa88f4672\n      eq\n      tag_18\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_28:\n      dup1\n      0x71827b7b\n      eq\n      tag_13\n      jumpi\n      dup1\n      0x91d8b14e\n      eq\n      tag_14\n      jumpi\n      dup1\n      0x93a563b5\n      eq\n      tag_15\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_25:\n      dup1\n      0x4665096d\n      gt\n      tag_29\n      jumpi\n      dup1\n      0x50b44712\n      gt\n      tag_30\n      jumpi\n      dup1\n      0x50b44712\n      eq\n      tag_10\n      jumpi\n      dup1\n      0x5a58acdd\n      eq\n      tag_11\n      jumpi\n      dup1\n      0x6032a4f9\n      eq\n      tag_12\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_30:\n      dup1\n      0x4665096d\n      eq\n      tag_7\n      jumpi\n      dup1\n      0x4788af7c\n      eq\n      tag_8\n      jumpi\n      dup1\n      0x4ed02622\n      eq\n      tag_9\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_29:\n      dup1\n      0x0fb5a6b4\n      gt\n      tag_31\n      jumpi\n      dup1\n      0x0fb5a6b4\n      eq\n      tag_4\n      jumpi\n      dup1\n      0x1209b1f6\n      eq\n      tag_5\n      jumpi\n      dup1\n      0x35580df2\n      eq\n      tag_6\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_31:\n      dup1\n      0x06f7f3bf\n      eq\n      tag_2\n      jumpi\n      dup1\n      0x0789c607\n      eq\n      tag_3\n      jumpi\n    tag_1:\n      0x00\n      dup1\n      revert\n        /* \"Lottery.sol\":746:777  uint256 public lastWinnerAmount */\n    tag_2:\n      callvalue\n      dup1\n      iszero\n      tag_32\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_32:\n      pop\n      tag_33\n      sload(0x04)\n      dup2\n      jump\n    tag_33:\n      mload(0x40)\n        /* \"#utility.yul\":160:185   */\n      swap1\n      dup2\n      mstore\n        /* \"#utility.yul\":148:150   */\n      0x20\n        /* \"#utility.yul\":133:151   */\n      add\n        /* \"Lottery.sol\":746:777  uint256 public lastWinnerAmount */\n    tag_35:\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      return\n        /* \"Lottery.sol\":3219:3427  function checkWinningsAmount() public view returns (uint256) {... */\n    tag_3:\n      callvalue\n      dup1\n      iszero\n      tag_37\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_37:\n      pop\n        /* \"Lottery.sol\":3323:3333  msg.sender */\n      caller\n        /* \"Lottery.sol\":3271:3278  uint256 */\n      0x00\n        /* \"Lottery.sol\":3371:3387  winnings[winner] */\n      swap1\n      dup2\n      mstore\n        /* \"Lottery.sol\":3371:3379  winnings */\n      0x05\n        /* \"Lottery.sol\":3371:3387  winnings[winner] */\n      0x20\n      mstore\n      0x40\n      swap1\n      keccak256\n      sload\n        /* \"Lottery.sol\":3219:3427  function checkWinningsAmount() public view returns (uint256) {... */\n      jump(tag_33)\n        /* \"Lottery.sol\":360:405  uint256 public constant duration = 30 minutes */\n    tag_4:\n      callvalue\n      dup1\n      iszero\n      tag_41\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_41:\n      pop\n      tag_33\n        /* \"Lottery.sol\":395:405  30 minutes */\n      0x0708\n        /* \"Lottery.sol\":360:405  uint256 public constant duration = 30 minutes */\n      dup2\n      jump\n        /* \"Lottery.sol\":145:193  uint256 public constant ticketPrice = 0.01 ether */\n    tag_5:\n      callvalue\n      dup1\n      iszero\n      tag_45\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_45:\n      pop\n      tag_33\n        /* \"Lottery.sol\":183:193  0.01 ether */\n      0x2386f26fc10000\n        /* \"Lottery.sol\":145:193  uint256 public constant ticketPrice = 0.01 ether */\n      dup2\n      jump\n        /* \"Lottery.sol\":4009:4270  function WithdrawCommission() public isOperator {... */\n    tag_6:\n      callvalue\n      dup1\n      iszero\n      tag_49\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_49:\n      pop\n      tag_50\n      tag_51\n      jump\t// in\n    tag_50:\n      stop\n        /* \"Lottery.sol\":448:473  uint256 public expiration */\n    tag_7:\n      callvalue\n      dup1\n      iszero\n      tag_52\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_52:\n      pop\n      tag_33\n      sload(0x00)\n      dup2\n      jump\n        /* \"Lottery.sol\":2283:3005  function DrawWinnerTicket() public isOperator {... */\n    tag_8:\n      callvalue\n      dup1\n      iszero\n      tag_56\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_56:\n      pop\n      tag_50\n      tag_58\n      jump\t// in\n        /* \"Lottery.sol\":1489:1581  function getTickets() public view returns (address[] memory) {... */\n    tag_9:\n      callvalue\n      dup1\n      iszero\n      tag_59\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_59:\n      pop\n      tag_60\n      tag_61\n      jump\t// in\n    tag_60:\n      mload(0x40)\n      tag_35\n      swap2\n      swap1\n      tag_63\n      jump\t// in\n        /* \"Lottery.sol\":912:936  address[] public tickets */\n    tag_10:\n      callvalue\n      dup1\n      iszero\n      tag_64\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_64:\n      pop\n      tag_65\n      tag_66\n      calldatasize\n      0x04\n      tag_67\n      jump\t// in\n    tag_66:\n      tag_68\n      jump\t// in\n    tag_65:\n      mload(0x40)\n      sub(shl(0xa0, 0x01), 0x01)\n        /* \"#utility.yul\":1231:1286   */\n      swap1\n      swap2\n      and\n        /* \"#utility.yul\":1213:1287   */\n      dup2\n      mstore\n        /* \"#utility.yul\":1201:1203   */\n      0x20\n        /* \"#utility.yul\":1186:1204   */\n      add\n        /* \"Lottery.sol\":912:936  address[] public tickets */\n      tag_35\n        /* \"#utility.yul\":1067:1293   */\n      jump\n        /* \"Lottery.sol\":536:566  address public lotteryOperator */\n    tag_11:\n      callvalue\n      dup1\n      iszero\n      tag_71\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_71:\n      pop\n      sload(0x01)\n      tag_65\n      swap1\n      sub(shl(0xa0, 0x01), 0x01)\n      and\n      dup2\n      jump\n        /* \"Lottery.sol\":276:330  uint256 public constant ticketCommission = 0.001 ether */\n    tag_12:\n      callvalue\n      dup1\n      iszero\n      tag_75\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_75:\n      pop\n      tag_33\n        /* \"Lottery.sol\":319:330  0.001 ether */\n      0x038d7ea4c68000\n        /* \"Lottery.sol\":276:330  uint256 public constant ticketCommission = 0.001 ether */\n      dup2\n      jump\n        /* \"Lottery.sol\":3433:3664  function WithdrawWinnings() public isWinner {... */\n    tag_13:\n      callvalue\n      dup1\n      iszero\n      tag_79\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_79:\n      pop\n      tag_50\n      tag_81\n      jump\t// in\n        /* \"Lottery.sol\":1706:2277  function BuyTickets() public payable {... */\n    tag_14:\n      tag_50\n      tag_83\n      jump\t// in\n        /* \"Lottery.sol\":4497:4606  function RemainingTickets() public view returns (uint256) {... */\n    tag_15:\n      callvalue\n      dup1\n      iszero\n      tag_84\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_84:\n      pop\n      tag_33\n      tag_86\n      jump\t// in\n        /* \"Lottery.sol\":4276:4371  function IsWinner() public view returns (bool) {... */\n    tag_16:\n      callvalue\n      dup1\n      iszero\n      tag_88\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_88:\n      pop\n        /* \"Lottery.sol\":4349:4359  msg.sender */\n      caller\n        /* \"Lottery.sol\":4317:4321  bool */\n      0x00\n        /* \"Lottery.sol\":4340:4360  winnings[msg.sender] */\n      swap1\n      dup2\n      mstore\n        /* \"Lottery.sol\":4340:4348  winnings */\n      0x05\n        /* \"Lottery.sol\":4340:4360  winnings[msg.sender] */\n      0x20\n      mstore\n      0x40\n      swap1\n      keccak256\n      sload\n        /* \"Lottery.sol\":4340:4364  winnings[msg.sender] > 0 */\n      iszero\n      iszero\n        /* \"Lottery.sol\":4276:4371  function IsWinner() public view returns (bool) {... */\n      mload(0x40)\n        /* \"#utility.yul\":1463:1477   */\n      swap1\n      iszero\n        /* \"#utility.yul\":1456:1478   */\n      iszero\n        /* \"#utility.yul\":1438:1479   */\n      dup2\n      mstore\n        /* \"#utility.yul\":1426:1428   */\n      0x20\n        /* \"#utility.yul\":1411:1429   */\n      add\n        /* \"Lottery.sol\":4276:4371  function IsWinner() public view returns (bool) {... */\n      tag_35\n        /* \"#utility.yul\":1298:1485   */\n      jump\n        /* \"Lottery.sol\":199:239  uint256 public constant maxTickets = 100 */\n    tag_17:\n      callvalue\n      dup1\n      iszero\n      tag_93\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_93:\n      pop\n      tag_33\n        /* \"Lottery.sol\":236:239  100 */\n      0x64\n        /* \"Lottery.sol\":199:239  uint256 public constant maxTickets = 100 */\n      dup2\n      jump\n        /* \"Lottery.sol\":3670:4003  function RefundAll() public {... */\n    tag_18:\n      callvalue\n      dup1\n      iszero\n      tag_97\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_97:\n      pop\n      tag_50\n      tag_99\n      jump\t// in\n        /* \"Lottery.sol\":601:643  uint256 public operatorTotalCommission = 0 */\n    tag_19:\n      callvalue\n      dup1\n      iszero\n      tag_100\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_100:\n      pop\n      tag_33\n      sload(0x02)\n      dup2\n      jump\n        /* \"Lottery.sol\":4377:4491  function CurrentWinningReward() public view returns (uint256) {... */\n    tag_20:\n      callvalue\n      dup1\n      iszero\n      tag_104\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_104:\n      pop\n      tag_33\n      tag_106\n      jump\t// in\n        /* \"Lottery.sol\":1587:1700  function getWinningsForAddress(address addr) public view returns (uint256) {... */\n    tag_21:\n      callvalue\n      dup1\n      iszero\n      tag_108\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_108:\n      pop\n      tag_33\n      tag_110\n      calldatasize\n      0x04\n      tag_111\n      jump\t// in\n    tag_110:\n      sub(shl(0xa0, 0x01), 0x01)\n        /* \"Lottery.sol\":1679:1693  winnings[addr] */\n      and\n        /* \"Lottery.sol\":1653:1660  uint256 */\n      0x00\n        /* \"Lottery.sol\":1679:1693  winnings[addr] */\n      swap1\n      dup2\n      mstore\n        /* \"Lottery.sol\":1679:1687  winnings */\n      0x05\n        /* \"Lottery.sol\":1679:1693  winnings[addr] */\n      0x20\n      mstore\n      0x40\n      swap1\n      keccak256\n      sload\n      swap1\n        /* \"Lottery.sol\":1587:1700  function getWinningsForAddress(address addr) public view returns (uint256) {... */\n      jump\n        /* \"Lottery.sol\":825:868  mapping(address => uint256) public winnings */\n    tag_22:\n      callvalue\n      dup1\n      iszero\n      tag_114\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_114:\n      pop\n      tag_33\n      tag_116\n      calldatasize\n      0x04\n      tag_111\n      jump\t// in\n    tag_116:\n      mstore(0x20, 0x05)\n      0x00\n      swap1\n      dup2\n      mstore\n      0x40\n      swap1\n      keccak256\n      sload\n      dup2\n      jump\n        /* \"Lottery.sol\":3011:3213  function restartDraw() public isOperator {... */\n    tag_23:\n      callvalue\n      dup1\n      iszero\n      tag_119\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_119:\n      pop\n      tag_50\n      tag_121\n      jump\t// in\n        /* \"Lottery.sol\":681:706  address public lastWinner */\n    tag_24:\n      callvalue\n      dup1\n      iszero\n      tag_122\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_122:\n      pop\n      sload(0x03)\n      tag_65\n      swap1\n      sub(shl(0xa0, 0x01), 0x01)\n      and\n      dup2\n      jump\n        /* \"Lottery.sol\":4009:4270  function WithdrawCommission() public isOperator {... */\n    tag_51:\n        /* \"Lottery.sol\":1099:1114  lotteryOperator */\n      and(sub(shl(0xa0, 0x01), 0x01), sload(0x01))\n        /* \"Lottery.sol\":1085:1095  msg.sender */\n      caller\n        /* \"Lottery.sol\":1085:1114  msg.sender == lotteryOperator */\n      eq\n        /* \"Lottery.sol\":1063:1175  require(... */\n      tag_128\n      jumpi\n      mload(0x40)\n      shl(0xe5, 0x461bcd)\n      dup2\n      mstore\n        /* \"#utility.yul\":2006:2008   */\n      0x20\n        /* \"Lottery.sol\":1063:1175  require(... */\n      0x04\n      dup3\n      add\n        /* \"#utility.yul\":1988:2009   */\n      mstore\n        /* \"#utility.yul\":2045:2047   */\n      0x22\n        /* \"#utility.yul\":2025:2043   */\n      0x24\n      dup3\n      add\n        /* \"#utility.yul\":2018:2048   */\n      mstore\n        /* \"#utility.yul\":2084:2118   */\n      0x43616c6c6572206973206e6f7420746865206c6f7474657279206f7065726174\n        /* \"#utility.yul\":2064:2082   */\n      0x44\n      dup3\n      add\n        /* \"#utility.yul\":2057:2119   */\n      mstore\n      shl(0xf1, 0x37b9)\n        /* \"#utility.yul\":2135:2153   */\n      0x64\n      dup3\n      add\n        /* \"#utility.yul\":2128:2160   */\n      mstore\n        /* \"#utility.yul\":2177:2196   */\n      0x84\n      add\n        /* \"Lottery.sol\":1063:1175  require(... */\n    tag_129:\n      mload(0x40)\n      dup1\n      swap2\n      sub\n      swap1\n      revert\n    tag_128:\n        /* \"Lottery.sol\":4154:4177  operatorTotalCommission */\n      0x02\n      dup1\n      sload\n        /* \"Lottery.sol\":4067:4091  address payable operator */\n      0x00\n        /* \"Lottery.sol\":4187:4214  operatorTotalCommission = 0 */\n      swap2\n      dup3\n      swap1\n      sstore\n        /* \"Lottery.sol\":4225:4263  operator.transfer(commission2Transfer) */\n      mload(0x40)\n        /* \"Lottery.sol\":4102:4112  msg.sender */\n      caller\n      swap3\n      dup4\n      swap2\n        /* \"Lottery.sol\":4225:4263  operator.transfer(commission2Transfer) */\n      dup4\n      iszero\n      0x08fc\n      mul\n      swap2\n        /* \"Lottery.sol\":4154:4177  operatorTotalCommission */\n      dup5\n      swap2\n        /* \"Lottery.sol\":4225:4263  operator.transfer(commission2Transfer) */\n      swap1\n      dup2\n        /* \"Lottery.sol\":4067:4091  address payable operator */\n      dup2\n        /* \"Lottery.sol\":4225:4263  operator.transfer(commission2Transfer) */\n      dup2\n        /* \"Lottery.sol\":4154:4177  operatorTotalCommission */\n      dup6\n        /* \"Lottery.sol\":4102:4112  msg.sender */\n      dup9\n        /* \"Lottery.sol\":4225:4263  operator.transfer(commission2Transfer) */\n      dup9\n      call\n      swap4\n      pop\n      pop\n      pop\n      pop\n      iszero\n      dup1\n      iszero\n      tag_133\n      jumpi\n      returndatasize\n      0x00\n      dup1\n      returndatacopy\n      revert(0x00, returndatasize)\n    tag_133:\n      pop\n        /* \"Lottery.sol\":4057:4270  {... */\n      pop\n      pop\n        /* \"Lottery.sol\":4009:4270  function WithdrawCommission() public isOperator {... */\n      jump\t// out\n        /* \"Lottery.sol\":2283:3005  function DrawWinnerTicket() public isOperator {... */\n    tag_58:\n        /* \"Lottery.sol\":1099:1114  lotteryOperator */\n      and(sub(shl(0xa0, 0x01), 0x01), sload(0x01))\n        /* \"Lottery.sol\":1085:1095  msg.sender */\n      caller\n        /* \"Lottery.sol\":1085:1114  msg.sender == lotteryOperator */\n      eq\n        /* \"Lottery.sol\":1063:1175  require(... */\n      tag_135\n      jumpi\n      mload(0x40)\n      shl(0xe5, 0x461bcd)\n      dup2\n      mstore\n        /* \"#utility.yul\":2006:2008   */\n      0x20\n        /* \"Lottery.sol\":1063:1175  require(... */\n      0x04\n      dup3\n      add\n        /* \"#utility.yul\":1988:2009   */\n      mstore\n        /* \"#utility.yul\":2045:2047   */\n      0x22\n        /* \"#utility.yul\":2025:2043   */\n      0x24\n      dup3\n      add\n        /* \"#utility.yul\":2018:2048   */\n      mstore\n        /* \"#utility.yul\":2084:2118   */\n      0x43616c6c6572206973206e6f7420746865206c6f7474657279206f7065726174\n        /* \"#utility.yul\":2064:2082   */\n      0x44\n      dup3\n      add\n        /* \"#utility.yul\":2057:2119   */\n      mstore\n      shl(0xf1, 0x37b9)\n        /* \"#utility.yul\":2135:2153   */\n      0x64\n      dup3\n      add\n        /* \"#utility.yul\":2128:2160   */\n      mstore\n        /* \"#utility.yul\":2177:2196   */\n      0x84\n      add\n        /* \"Lottery.sol\":1063:1175  require(... */\n      tag_129\n        /* \"#utility.yul\":1804:2202   */\n      jump\n        /* \"Lottery.sol\":1063:1175  require(... */\n    tag_135:\n        /* \"Lottery.sol\":2347:2354  tickets */\n      0x06\n        /* \"Lottery.sol\":2347:2361  tickets.length */\n      sload\n        /* \"Lottery.sol\":2339:2395  require(tickets.length > 0, \"No tickets were purchased\") */\n      tag_138\n      jumpi\n      mload(0x40)\n      shl(0xe5, 0x461bcd)\n      dup2\n      mstore\n        /* \"#utility.yul\":2409:2411   */\n      0x20\n        /* \"Lottery.sol\":2339:2395  require(tickets.length > 0, \"No tickets were purchased\") */\n      0x04\n      dup3\n      add\n        /* \"#utility.yul\":2391:2412   */\n      mstore\n        /* \"#utility.yul\":2448:2450   */\n      0x19\n        /* \"#utility.yul\":2428:2446   */\n      0x24\n      dup3\n      add\n        /* \"#utility.yul\":2421:2451   */\n      mstore\n        /* \"#utility.yul\":2487:2514   */\n      0x4e6f207469636b65747320776572652070757263686173656400000000000000\n        /* \"#utility.yul\":2467:2485   */\n      0x44\n      dup3\n      add\n        /* \"#utility.yul\":2460:2515   */\n      mstore\n        /* \"#utility.yul\":2532:2550   */\n      0x64\n      add\n        /* \"Lottery.sol\":2339:2395  require(tickets.length > 0, \"No tickets were purchased\") */\n      tag_129\n        /* \"#utility.yul\":2207:2556   */\n      jump\n        /* \"Lottery.sol\":2339:2395  require(tickets.length > 0, \"No tickets were purchased\") */\n    tag_138:\n        /* \"Lottery.sol\":2451:2458  tickets */\n      0x06\n        /* \"Lottery.sol\":2451:2465  tickets.length */\n      sload\n        /* \"Lottery.sol\":2406:2423  bytes32 blockHash */\n      0x00\n      swap1\n        /* \"Lottery.sol\":2436:2465  block.number - tickets.length */\n      tag_141\n      swap1\n        /* \"Lottery.sol\":2436:2448  block.number */\n      number\n        /* \"Lottery.sol\":2436:2465  block.number - tickets.length */\n      tag_142\n      jump\t// in\n    tag_141:\n        /* \"Lottery.sol\":2530:2574  abi.encodePacked(block.timestamp, blockHash) */\n      0x40\n      dup1\n      mload\n        /* \"Lottery.sol\":2547:2562  block.timestamp */\n      timestamp\n        /* \"Lottery.sol\":2530:2574  abi.encodePacked(block.timestamp, blockHash) */\n      0x20\n      dup3\n      add\n        /* \"#utility.yul\":2980:2999   */\n      mstore\n        /* \"Lottery.sol\":2426:2466  blockhash(block.number - tickets.length) */\n      swap2\n      blockhash\n        /* \"#utility.yul\":3015:3027   */\n      swap1\n      dup3\n      add\n        /* \"#utility.yul\":3008:3036   */\n      dup2\n      swap1\n      mstore\n        /* \"Lottery.sol\":2426:2466  blockhash(block.number - tickets.length) */\n      swap2\n      pop\n        /* \"Lottery.sol\":2476:2496  uint256 randomNumber */\n      0x00\n      swap1\n        /* \"#utility.yul\":3052:3064   */\n      0x60\n      add\n        /* \"Lottery.sol\":2530:2574  abi.encodePacked(block.timestamp, blockHash) */\n      0x40\n      dup1\n      mload\n      not(0x1f)\n      dup2\n      dup5\n      sub\n      add\n      dup2\n      mstore\n      swap2\n      swap1\n      mstore\n        /* \"Lottery.sol\":2520:2575  keccak256(abi.encodePacked(block.timestamp, blockHash)) */\n      dup1\n      mload\n        /* \"Lottery.sol\":2530:2574  abi.encodePacked(block.timestamp, blockHash) */\n      0x20\n        /* \"Lottery.sol\":2520:2575  keccak256(abi.encodePacked(block.timestamp, blockHash)) */\n      swap1\n      swap2\n      add\n      keccak256\n        /* \"Lottery.sol\":2634:2641  tickets */\n      0x06\n        /* \"Lottery.sol\":2634:2648  tickets.length */\n      sload\n        /* \"Lottery.sol\":2520:2575  keccak256(abi.encodePacked(block.timestamp, blockHash)) */\n      swap1\n      swap2\n      pop\n        /* \"Lottery.sol\":2499:2585  uint256(... */\n      0x00\n      swap1\n        /* \"Lottery.sol\":2619:2648  randomNumber % tickets.length */\n      tag_145\n      swap1\n        /* \"Lottery.sol\":2520:2575  keccak256(abi.encodePacked(block.timestamp, blockHash)) */\n      dup4\n        /* \"Lottery.sol\":2619:2648  randomNumber % tickets.length */\n      tag_146\n      jump\t// in\n    tag_145:\n        /* \"Lottery.sol\":2595:2648  uint256 winningTicket = randomNumber % tickets.length */\n      swap1\n      pop\n        /* \"Lottery.sol\":2659:2673  address winner */\n      0x00\n        /* \"Lottery.sol\":2676:2683  tickets */\n      0x06\n        /* \"Lottery.sol\":2684:2697  winningTicket */\n      dup3\n        /* \"Lottery.sol\":2676:2698  tickets[winningTicket] */\n      dup2\n      sload\n      dup2\n      lt\n      tag_148\n      jumpi\n      tag_148\n      tag_149\n      jump\t// in\n    tag_148:\n      0x00\n      swap2\n      dup3\n      mstore\n      0x20\n      swap1\n      swap2\n      keccak256\n      add\n      sload\n        /* \"Lottery.sol\":2708:2718  lastWinner */\n      0x03\n        /* \"Lottery.sol\":2708:2727  lastWinner = winner */\n      dup1\n      sload\n      not(0xffffffffffffffffffffffffffffffffffffffff)\n      and\n      sub(shl(0xa0, 0x01), 0x01)\n        /* \"Lottery.sol\":2676:2698  tickets[winningTicket] */\n      swap1\n      swap3\n      and\n        /* \"Lottery.sol\":2708:2727  lastWinner = winner */\n      swap2\n      dup3\n      or\n      swap1\n      sstore\n        /* \"Lottery.sol\":2676:2698  tickets[winningTicket] */\n      swap1\n      pop\n        /* \"Lottery.sol\":2776:2806  ticketPrice - ticketCommission */\n      tag_151\n        /* \"Lottery.sol\":319:330  0.001 ether */\n      0x038d7ea4c68000\n        /* \"Lottery.sol\":183:193  0.01 ether */\n      0x2386f26fc10000\n        /* \"Lottery.sol\":2776:2806  ticketPrice - ticketCommission */\n      tag_142\n      jump\t// in\n    tag_151:\n        /* \"Lottery.sol\":2758:2765  tickets */\n      0x06\n        /* \"Lottery.sol\":2758:2772  tickets.length */\n      sload\n        /* \"Lottery.sol\":2758:2807  tickets.length * (ticketPrice - ticketCommission) */\n      tag_152\n      swap2\n      swap1\n      tag_153\n      jump\t// in\n    tag_152:\n      sub(shl(0xa0, 0x01), 0x01)\n        /* \"Lottery.sol\":2737:2753  winnings[winner] */\n      dup3\n      and\n      0x00\n      swap1\n      dup2\n      mstore\n        /* \"Lottery.sol\":2737:2745  winnings */\n      0x05\n        /* \"Lottery.sol\":2737:2753  winnings[winner] */\n      0x20\n      mstore\n      0x40\n      dup2\n      keccak256\n        /* \"Lottery.sol\":2737:2808  winnings[winner] += (tickets.length * (ticketPrice - ticketCommission)) */\n      dup1\n      sload\n        /* \"Lottery.sol\":2737:2753  winnings[winner] */\n      swap1\n      swap2\n      swap1\n        /* \"Lottery.sol\":2737:2808  winnings[winner] += (tickets.length * (ticketPrice - ticketCommission)) */\n      tag_154\n      swap1\n      dup5\n      swap1\n      tag_155\n      jump\t// in\n    tag_154:\n      swap1\n      swap2\n      sstore\n      pop\n      pop\n      sub(shl(0xa0, 0x01), 0x01)\n        /* \"Lottery.sol\":2837:2853  winnings[winner] */\n      dup2\n      and\n      0x00\n      swap1\n      dup2\n      mstore\n        /* \"Lottery.sol\":2837:2845  winnings */\n      0x05\n        /* \"Lottery.sol\":2837:2853  winnings[winner] */\n      0x20\n      mstore\n      0x40\n      swap1\n      keccak256\n      sload\n        /* \"Lottery.sol\":2818:2834  lastWinnerAmount */\n      0x04\n        /* \"Lottery.sol\":2818:2853  lastWinnerAmount = winnings[winner] */\n      sstore\n        /* \"Lottery.sol\":2891:2898  tickets */\n      0x06\n        /* \"Lottery.sol\":2891:2905  tickets.length */\n      sload\n        /* \"Lottery.sol\":2891:2924  tickets.length * ticketCommission */\n      tag_156\n      swap1\n        /* \"Lottery.sol\":319:330  0.001 ether */\n      0x038d7ea4c68000\n      swap1\n        /* \"Lottery.sol\":2891:2924  tickets.length * ticketCommission */\n      tag_153\n      jump\t// in\n    tag_156:\n        /* \"Lottery.sol\":2863:2886  operatorTotalCommission */\n      0x02\n      0x00\n        /* \"Lottery.sol\":2863:2925  operatorTotalCommission += (tickets.length * ticketCommission) */\n      dup3\n      dup3\n      sload\n      tag_157\n      swap2\n      swap1\n      tag_155\n      jump\t// in\n    tag_157:\n      swap1\n      swap2\n      sstore\n      pop\n        /* \"Lottery.sol\":2935:2949  delete tickets */\n      tag_158\n      swap1\n      pop\n        /* \"Lottery.sol\":2942:2949  tickets */\n      0x06\n      0x00\n        /* \"Lottery.sol\":2935:2949  delete tickets */\n      tag_159\n      jump\t// in\n    tag_158:\n        /* \"Lottery.sol\":2972:2998  block.timestamp + duration */\n      tag_160\n        /* \"Lottery.sol\":395:405  30 minutes */\n      0x0708\n        /* \"Lottery.sol\":2972:2987  block.timestamp */\n      timestamp\n        /* \"Lottery.sol\":2972:2998  block.timestamp + duration */\n      tag_155\n      jump\t// in\n    tag_160:\n        /* \"Lottery.sol\":2959:2969  expiration */\n      0x00\n        /* \"Lottery.sol\":2959:2998  expiration = block.timestamp + duration */\n      sstore\n      pop\n      pop\n      pop\n      pop\n        /* \"Lottery.sol\":2283:3005  function DrawWinnerTicket() public isOperator {... */\n      jump\t// out\n        /* \"Lottery.sol\":1489:1581  function getTickets() public view returns (address[] memory) {... */\n    tag_61:\n        /* \"Lottery.sol\":1532:1548  address[] memory */\n      0x60\n        /* \"Lottery.sol\":1567:1574  tickets */\n      0x06\n        /* \"Lottery.sol\":1560:1574  return tickets */\n      dup1\n      sload\n      dup1\n      0x20\n      mul\n      0x20\n      add\n      mload(0x40)\n      swap1\n      dup2\n      add\n      0x40\n      mstore\n      dup1\n      swap3\n      swap2\n      swap1\n      dup2\n      dup2\n      mstore\n      0x20\n      add\n      dup3\n      dup1\n      sload\n      dup1\n      iszero\n      tag_162\n      jumpi\n      0x20\n      mul\n      dup3\n      add\n      swap2\n      swap1\n      0x00\n      mstore\n      keccak256(0x00, 0x20)\n      swap1\n    tag_163:\n      dup2\n      sload\n      sub(shl(0xa0, 0x01), 0x01)\n      and\n      dup2\n      mstore\n      0x01\n      swap1\n      swap2\n      add\n      swap1\n      0x20\n      add\n      dup1\n      dup4\n      gt\n      tag_163\n      jumpi\n    tag_162:\n      pop\n      pop\n      pop\n      pop\n      pop\n      swap1\n      pop\n        /* \"Lottery.sol\":1489:1581  function getTickets() public view returns (address[] memory) {... */\n      swap1\n      jump\t// out\n        /* \"Lottery.sol\":912:936  address[] public tickets */\n    tag_68:\n      0x06\n      dup2\n      dup2\n      sload\n      dup2\n      lt\n      tag_164\n      jumpi\n      0x00\n      dup1\n      revert\n    tag_164:\n      0x00\n      swap2\n      dup3\n      mstore\n      0x20\n      swap1\n      swap2\n      keccak256\n      add\n      sload\n      sub(shl(0xa0, 0x01), 0x01)\n      and\n      swap1\n      pop\n      dup2\n      jump\t// out\n        /* \"Lottery.sol\":3433:3664  function WithdrawWinnings() public isWinner {... */\n    tag_81:\n        /* \"Lottery.sol\":4349:4359  msg.sender */\n      caller\n        /* \"Lottery.sol\":4317:4321  bool */\n      0x00\n        /* \"Lottery.sol\":4340:4360  winnings[msg.sender] */\n      swap1\n      dup2\n      mstore\n        /* \"Lottery.sol\":4340:4348  winnings */\n      0x05\n        /* \"Lottery.sol\":4340:4360  winnings[msg.sender] */\n      0x20\n      mstore\n      0x40\n      swap1\n      keccak256\n      sload\n        /* \"Lottery.sol\":1276:1321  require(IsWinner(), \"Caller is not a winner\") */\n      tag_168\n      jumpi\n      mload(0x40)\n      shl(0xe5, 0x461bcd)\n      dup2\n      mstore\n        /* \"#utility.yul\":3964:3966   */\n      0x20\n        /* \"Lottery.sol\":1276:1321  require(IsWinner(), \"Caller is not a winner\") */\n      0x04\n      dup3\n      add\n        /* \"#utility.yul\":3946:3967   */\n      mstore\n        /* \"#utility.yul\":4003:4005   */\n      0x16\n        /* \"#utility.yul\":3983:4001   */\n      0x24\n      dup3\n      add\n        /* \"#utility.yul\":3976:4006   */\n      mstore\n        /* \"#utility.yul\":4042:4066   */\n      0x43616c6c6572206973206e6f7420612077696e6e657200000000000000000000\n        /* \"#utility.yul\":4022:4040   */\n      0x44\n      dup3\n      add\n        /* \"#utility.yul\":4015:4067   */\n      mstore\n        /* \"#utility.yul\":4084:4102   */\n      0x64\n      add\n        /* \"Lottery.sol\":1276:1321  require(IsWinner(), \"Caller is not a winner\") */\n      tag_129\n        /* \"#utility.yul\":3762:4108   */\n      jump\n        /* \"Lottery.sol\":1276:1321  require(IsWinner(), \"Caller is not a winner\") */\n    tag_168:\n        /* \"Lottery.sol\":3520:3530  msg.sender */\n      caller\n        /* \"Lottery.sol\":3487:3509  address payable winner */\n      0x00\n        /* \"Lottery.sol\":3568:3584  winnings[winner] */\n      dup2\n      dup2\n      mstore\n        /* \"Lottery.sol\":3568:3576  winnings */\n      0x05\n        /* \"Lottery.sol\":3568:3584  winnings[winner] */\n      0x20\n      mstore\n      0x40\n      dup1\n      dup3\n      keccak256\n      dup1\n      sload\n        /* \"Lottery.sol\":3594:3614  winnings[winner] = 0 */\n      swap1\n      dup4\n      swap1\n      sstore\n        /* \"Lottery.sol\":3625:3657  winner.transfer(reward2Transfer) */\n      swap1\n      mload\n        /* \"Lottery.sol\":3568:3584  winnings[winner] */\n      swap1\n      swap2\n        /* \"Lottery.sol\":3520:3530  msg.sender */\n      dup4\n      swap2\n        /* \"Lottery.sol\":3625:3657  winner.transfer(reward2Transfer) */\n      dup4\n      iszero\n      0x08fc\n      mul\n      swap2\n        /* \"Lottery.sol\":3568:3584  winnings[winner] */\n      dup5\n      swap2\n        /* \"Lottery.sol\":3625:3657  winner.transfer(reward2Transfer) */\n      swap1\n      dup2\n        /* \"Lottery.sol\":3487:3509  address payable winner */\n      dup2\n        /* \"Lottery.sol\":3625:3657  winner.transfer(reward2Transfer) */\n      dup2\n        /* \"Lottery.sol\":3568:3584  winnings[winner] */\n      dup6\n        /* \"Lottery.sol\":3520:3530  msg.sender */\n      dup9\n        /* \"Lottery.sol\":3625:3657  winner.transfer(reward2Transfer) */\n      dup9\n      call\n      swap4\n      pop\n      pop\n      pop\n      pop\n      iszero\n      dup1\n      iszero\n      tag_133\n      jumpi\n      returndatasize\n      0x00\n      dup1\n      returndatacopy\n      revert(0x00, returndatasize)\n        /* \"Lottery.sol\":1706:2277  function BuyTickets() public payable {... */\n    tag_83:\n        /* \"Lottery.sol\":1774:1797  msg.value % ticketPrice */\n      tag_175\n        /* \"Lottery.sol\":183:193  0.01 ether */\n      0x2386f26fc10000\n        /* \"Lottery.sol\":1774:1783  msg.value */\n      callvalue\n        /* \"Lottery.sol\":1774:1797  msg.value % ticketPrice */\n      tag_146\n      jump\t// in\n    tag_175:\n        /* \"Lottery.sol\":1774:1802  msg.value % ticketPrice == 0 */\n      iszero\n        /* \"Lottery.sol\":1897:1926  Strings.toString(ticketPrice) */\n      tag_176\n        /* \"Lottery.sol\":183:193  0.01 ether */\n      0x2386f26fc10000\n        /* \"Lottery.sol\":1897:1913  Strings.toString */\n      tag_177\n        /* \"Lottery.sol\":1897:1926  Strings.toString(ticketPrice) */\n      jump\t// in\n    tag_176:\n        /* \"Lottery.sol\":1816:1966  string.concat(... */\n      add(0x20, mload(0x40))\n      tag_178\n      swap2\n      swap1\n      tag_179\n      jump\t// in\n    tag_178:\n      mload(0x40)\n      0x20\n      dup2\n      dup4\n      sub\n      sub\n      dup2\n      mstore\n      swap1\n      0x40\n      mstore\n        /* \"Lottery.sol\":1753:1976  require(... */\n      swap1\n      tag_180\n      jumpi\n      mload(0x40)\n      shl(0xe5, 0x461bcd)\n      dup2\n      mstore\n      0x04\n      add\n      tag_129\n      swap2\n      swap1\n      tag_182\n      jump\t// in\n    tag_180:\n      pop\n        /* \"Lottery.sol\":1986:2011  uint256 numOfTicketsToBuy */\n      0x00\n        /* \"Lottery.sol\":2014:2037  msg.value / ticketPrice */\n      tag_183\n        /* \"Lottery.sol\":183:193  0.01 ether */\n      0x2386f26fc10000\n        /* \"Lottery.sol\":2014:2023  msg.value */\n      callvalue\n        /* \"Lottery.sol\":2014:2037  msg.value / ticketPrice */\n      tag_184\n      jump\t// in\n    tag_183:\n        /* \"Lottery.sol\":1986:2037  uint256 numOfTicketsToBuy = msg.value / ticketPrice */\n      swap1\n      pop\n        /* \"Lottery.sol\":2090:2108  RemainingTickets() */\n      tag_185\n        /* \"Lottery.sol\":2090:2106  RemainingTickets */\n      tag_86\n        /* \"Lottery.sol\":2090:2108  RemainingTickets() */\n      jump\t// in\n    tag_185:\n        /* \"Lottery.sol\":2069:2086  numOfTicketsToBuy */\n      dup2\n        /* \"Lottery.sol\":2069:2108  numOfTicketsToBuy <= RemainingTickets() */\n      gt\n      iszero\n        /* \"Lottery.sol\":2048:2163  require(... */\n      tag_186\n      jumpi\n      mload(0x40)\n      shl(0xe5, 0x461bcd)\n      dup2\n      mstore\n        /* \"#utility.yul\":5684:5686   */\n      0x20\n        /* \"Lottery.sol\":2048:2163  require(... */\n      0x04\n      dup3\n      add\n        /* \"#utility.yul\":5666:5687   */\n      mstore\n        /* \"#utility.yul\":5723:5725   */\n      0x1d\n        /* \"#utility.yul\":5703:5721   */\n      0x24\n      dup3\n      add\n        /* \"#utility.yul\":5696:5726   */\n      mstore\n        /* \"#utility.yul\":5762:5793   */\n      0x4e6f7420656e6f756768207469636b65747320617661696c61626c652e000000\n        /* \"#utility.yul\":5742:5760   */\n      0x44\n      dup3\n      add\n        /* \"#utility.yul\":5735:5794   */\n      mstore\n        /* \"#utility.yul\":5811:5829   */\n      0x64\n      add\n        /* \"Lottery.sol\":2048:2163  require(... */\n      tag_129\n        /* \"#utility.yul\":5482:5835   */\n      jump\n        /* \"Lottery.sol\":2048:2163  require(... */\n    tag_186:\n        /* \"Lottery.sol\":2179:2188  uint256 i */\n      0x00\n        /* \"Lottery.sol\":2174:2271  for (uint256 i = 0; i < numOfTicketsToBuy; i++) {... */\n    tag_189:\n        /* \"Lottery.sol\":2198:2215  numOfTicketsToBuy */\n      dup2\n        /* \"Lottery.sol\":2194:2195  i */\n      dup2\n        /* \"Lottery.sol\":2194:2215  i < numOfTicketsToBuy */\n      lt\n        /* \"Lottery.sol\":2174:2271  for (uint256 i = 0; i < numOfTicketsToBuy; i++) {... */\n      iszero\n      tag_190\n      jumpi\n        /* \"Lottery.sol\":2236:2243  tickets */\n      0x06\n        /* \"Lottery.sol\":2236:2260  tickets.push(msg.sender) */\n      dup1\n      sload\n      0x01\n      dup2\n      add\n      dup3\n      sstore\n      0x00\n      swap2\n      swap1\n      swap2\n      mstore\n      0xf652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f\n      add\n      dup1\n      sload\n      not(0xffffffffffffffffffffffffffffffffffffffff)\n      and\n        /* \"Lottery.sol\":2249:2259  msg.sender */\n      caller\n        /* \"Lottery.sol\":2236:2260  tickets.push(msg.sender) */\n      or\n      swap1\n      sstore\n        /* \"Lottery.sol\":2217:2220  i++ */\n      dup1\n      tag_193\n      dup2\n      tag_194\n      jump\t// in\n    tag_193:\n      swap2\n      pop\n      pop\n        /* \"Lottery.sol\":2174:2271  for (uint256 i = 0; i < numOfTicketsToBuy; i++) {... */\n      jump(tag_189)\n    tag_190:\n      pop\n        /* \"Lottery.sol\":1743:2277  {... */\n      pop\n        /* \"Lottery.sol\":1706:2277  function BuyTickets() public payable {... */\n      jump\t// out\n        /* \"Lottery.sol\":4497:4606  function RemainingTickets() public view returns (uint256) {... */\n    tag_86:\n        /* \"Lottery.sol\":4585:4592  tickets */\n      0x06\n        /* \"Lottery.sol\":4585:4599  tickets.length */\n      sload\n        /* \"Lottery.sol\":4546:4553  uint256 */\n      0x00\n      swap1\n        /* \"Lottery.sol\":4572:4599  maxTickets - tickets.length */\n      tag_196\n      swap1\n        /* \"Lottery.sol\":236:239  100 */\n      0x64\n        /* \"Lottery.sol\":4572:4599  maxTickets - tickets.length */\n      tag_142\n      jump\t// in\n    tag_196:\n        /* \"Lottery.sol\":4565:4599  return maxTickets - tickets.length */\n      swap1\n      pop\n        /* \"Lottery.sol\":4497:4606  function RemainingTickets() public view returns (uint256) {... */\n      swap1\n      jump\t// out\n        /* \"Lottery.sol\":3670:4003  function RefundAll() public {... */\n    tag_99:\n        /* \"Lottery.sol\":3735:3745  expiration */\n      sload(0x00)\n        /* \"Lottery.sol\":3716:3731  block.timestamp */\n      timestamp\n        /* \"Lottery.sol\":3716:3745  block.timestamp >= expiration */\n      lt\n      iszero\n        /* \"Lottery.sol\":3708:3777  require(block.timestamp >= expiration, \"the lottery not expired yet\") */\n      tag_199\n      jumpi\n      mload(0x40)\n      shl(0xe5, 0x461bcd)\n      dup2\n      mstore\n        /* \"#utility.yul\":6182:6184   */\n      0x20\n        /* \"Lottery.sol\":3708:3777  require(block.timestamp >= expiration, \"the lottery not expired yet\") */\n      0x04\n      dup3\n      add\n        /* \"#utility.yul\":6164:6185   */\n      mstore\n        /* \"#utility.yul\":6221:6223   */\n      0x1b\n        /* \"#utility.yul\":6201:6219   */\n      0x24\n      dup3\n      add\n        /* \"#utility.yul\":6194:6224   */\n      mstore\n        /* \"#utility.yul\":6260:6289   */\n      0x746865206c6f7474657279206e6f742065787069726564207965740000000000\n        /* \"#utility.yul\":6240:6258   */\n      0x44\n      dup3\n      add\n        /* \"#utility.yul\":6233:6290   */\n      mstore\n        /* \"#utility.yul\":6307:6325   */\n      0x64\n      add\n        /* \"Lottery.sol\":3708:3777  require(block.timestamp >= expiration, \"the lottery not expired yet\") */\n      tag_129\n        /* \"#utility.yul\":5980:6331   */\n      jump\n        /* \"Lottery.sol\":3708:3777  require(block.timestamp >= expiration, \"the lottery not expired yet\") */\n    tag_199:\n        /* \"Lottery.sol\":3793:3802  uint256 i */\n      0x00\n        /* \"Lottery.sol\":3788:3973  for (uint256 i = 0; i < tickets.length; i++) {... */\n    tag_202:\n        /* \"Lottery.sol\":3812:3819  tickets */\n      0x06\n        /* \"Lottery.sol\":3812:3826  tickets.length */\n      sload\n        /* \"Lottery.sol\":3808:3826  i < tickets.length */\n      dup2\n      lt\n        /* \"Lottery.sol\":3788:3973  for (uint256 i = 0; i < tickets.length; i++) {... */\n      iszero\n      tag_203\n      jumpi\n        /* \"Lottery.sol\":3847:3865  address payable to */\n      0x00\n        /* \"Lottery.sol\":3876:3883  tickets */\n      0x06\n        /* \"Lottery.sol\":3884:3885  i */\n      dup3\n        /* \"Lottery.sol\":3876:3886  tickets[i] */\n      dup2\n      sload\n      dup2\n      lt\n      tag_206\n      jumpi\n      tag_206\n      tag_149\n      jump\t// in\n    tag_206:\n      0x00\n      swap2\n      dup3\n      mstore\n      0x20\n      dup3\n      keccak256\n      add\n      sload\n        /* \"Lottery.sol\":3901:3908  tickets */\n      0x06\n        /* \"Lottery.sol\":3901:3911  tickets[i] */\n      dup1\n      sload\n      sub(shl(0xa0, 0x01), 0x01)\n        /* \"Lottery.sol\":3876:3886  tickets[i] */\n      swap1\n      swap3\n      and\n      swap4\n      pop\n        /* \"Lottery.sol\":3901:3908  tickets */\n      swap1\n        /* \"Lottery.sol\":3909:3910  i */\n      dup5\n      swap1\n        /* \"Lottery.sol\":3901:3911  tickets[i] */\n      dup2\n      lt\n      tag_209\n      jumpi\n      tag_209\n      tag_149\n      jump\t// in\n    tag_209:\n      0x00\n      swap2\n      dup3\n      mstore\n      0x20\n      dup3\n      keccak256\n      add\n        /* \"Lottery.sol\":3901:3924  tickets[i] = address(0) */\n      dup1\n      sload\n      not(0xffffffffffffffffffffffffffffffffffffffff)\n      and\n      sub(shl(0xa0, 0x01), 0x01)\n      swap4\n      dup5\n      and\n      or\n      swap1\n      sstore\n        /* \"Lottery.sol\":3938:3962  to.transfer(ticketPrice) */\n      mload(0x40)\n        /* \"Lottery.sol\":3938:3949  to.transfer */\n      swap2\n      dup4\n      and\n      swap2\n        /* \"Lottery.sol\":183:193  0.01 ether */\n      0x2386f26fc10000\n      swap1\n        /* \"Lottery.sol\":3901:3911  tickets[i] */\n      dup3\n        /* \"Lottery.sol\":3938:3962  to.transfer(ticketPrice) */\n      dup2\n        /* \"Lottery.sol\":3901:3911  tickets[i] */\n      dup2\n        /* \"Lottery.sol\":3938:3962  to.transfer(ticketPrice) */\n      dup2\n        /* \"Lottery.sol\":183:193  0.01 ether */\n      dup6\n        /* \"Lottery.sol\":3938:3949  to.transfer */\n      dup9\n        /* \"Lottery.sol\":3901:3911  tickets[i] */\n      dup4\n        /* \"Lottery.sol\":3938:3962  to.transfer(ticketPrice) */\n      call\n      swap4\n      pop\n      pop\n      pop\n      pop\n      iszero\n      dup1\n      iszero\n      tag_212\n      jumpi\n      returndatasize\n      0x00\n      dup1\n      returndatacopy\n      revert(0x00, returndatasize)\n    tag_212:\n      pop\n        /* \"Lottery.sol\":3833:3973  {... */\n      pop\n        /* \"Lottery.sol\":3828:3831  i++ */\n      dup1\n      dup1\n      tag_213\n      swap1\n      tag_194\n      jump\t// in\n    tag_213:\n      swap2\n      pop\n      pop\n        /* \"Lottery.sol\":3788:3973  for (uint256 i = 0; i < tickets.length; i++) {... */\n      jump(tag_202)\n    tag_203:\n      pop\n        /* \"Lottery.sol\":3982:3996  delete tickets */\n      tag_214\n        /* \"Lottery.sol\":3989:3996  tickets */\n      0x06\n      0x00\n        /* \"Lottery.sol\":3982:3996  delete tickets */\n      tag_159\n      jump\t// in\n    tag_214:\n        /* \"Lottery.sol\":3670:4003  function RefundAll() public {... */\n      jump\t// out\n        /* \"Lottery.sol\":4377:4491  function CurrentWinningReward() public view returns (uint256) {... */\n    tag_106:\n        /* \"Lottery.sol\":4456:4463  tickets */\n      0x06\n        /* \"Lottery.sol\":4456:4470  tickets.length */\n      sload\n        /* \"Lottery.sol\":4430:4437  uint256 */\n      0x00\n      swap1\n        /* \"Lottery.sol\":4456:4484  tickets.length * ticketPrice */\n      tag_196\n      swap1\n        /* \"Lottery.sol\":183:193  0.01 ether */\n      0x2386f26fc10000\n      swap1\n        /* \"Lottery.sol\":4456:4484  tickets.length * ticketPrice */\n      tag_153\n      jump\t// in\n        /* \"Lottery.sol\":3011:3213  function restartDraw() public isOperator {... */\n    tag_121:\n        /* \"Lottery.sol\":1099:1114  lotteryOperator */\n      and(sub(shl(0xa0, 0x01), 0x01), sload(0x01))\n        /* \"Lottery.sol\":1085:1095  msg.sender */\n      caller\n        /* \"Lottery.sol\":1085:1114  msg.sender == lotteryOperator */\n      eq\n        /* \"Lottery.sol\":1063:1175  require(... */\n      tag_219\n      jumpi\n      mload(0x40)\n      shl(0xe5, 0x461bcd)\n      dup2\n      mstore\n        /* \"#utility.yul\":2006:2008   */\n      0x20\n        /* \"Lottery.sol\":1063:1175  require(... */\n      0x04\n      dup3\n      add\n        /* \"#utility.yul\":1988:2009   */\n      mstore\n        /* \"#utility.yul\":2045:2047   */\n      0x22\n        /* \"#utility.yul\":2025:2043   */\n      0x24\n      dup3\n      add\n        /* \"#utility.yul\":2018:2048   */\n      mstore\n        /* \"#utility.yul\":2084:2118   */\n      0x43616c6c6572206973206e6f7420746865206c6f7474657279206f7065726174\n        /* \"#utility.yul\":2064:2082   */\n      0x44\n      dup3\n      add\n        /* \"#utility.yul\":2057:2119   */\n      mstore\n      shl(0xf1, 0x37b9)\n        /* \"#utility.yul\":2135:2153   */\n      0x64\n      dup3\n      add\n        /* \"#utility.yul\":2128:2160   */\n      mstore\n        /* \"#utility.yul\":2177:2196   */\n      0x84\n      add\n        /* \"Lottery.sol\":1063:1175  require(... */\n      tag_129\n        /* \"#utility.yul\":1804:2202   */\n      jump\n        /* \"Lottery.sol\":1063:1175  require(... */\n    tag_219:\n        /* \"Lottery.sol\":3070:3077  tickets */\n      0x06\n        /* \"Lottery.sol\":3070:3084  tickets.length */\n      sload\n        /* \"Lottery.sol\":3070:3089  tickets.length == 0 */\n      iszero\n        /* \"Lottery.sol\":3062:3132  require(tickets.length == 0, \"Cannot Restart Draw as Draw is in play\") */\n      tag_222\n      jumpi\n      mload(0x40)\n      shl(0xe5, 0x461bcd)\n      dup2\n      mstore\n        /* \"#utility.yul\":6538:6540   */\n      0x20\n        /* \"Lottery.sol\":3062:3132  require(tickets.length == 0, \"Cannot Restart Draw as Draw is in play\") */\n      0x04\n      dup3\n      add\n        /* \"#utility.yul\":6520:6541   */\n      mstore\n        /* \"#utility.yul\":6577:6579   */\n      0x26\n        /* \"#utility.yul\":6557:6575   */\n      0x24\n      dup3\n      add\n        /* \"#utility.yul\":6550:6580   */\n      mstore\n        /* \"#utility.yul\":6616:6650   */\n      0x43616e6e6f742052657374617274204472617720617320447261772069732069\n        /* \"#utility.yul\":6596:6614   */\n      0x44\n      dup3\n      add\n        /* \"#utility.yul\":6589:6651   */\n      mstore\n        /* \"#utility.yul\":6687:6695   */\n      0x6e20706c61790000000000000000000000000000000000000000000000000000\n        /* \"#utility.yul\":6667:6685   */\n      0x64\n      dup3\n      add\n        /* \"#utility.yul\":6660:6696   */\n      mstore\n        /* \"#utility.yul\":6713:6732   */\n      0x84\n      add\n        /* \"Lottery.sol\":3062:3132  require(tickets.length == 0, \"Cannot Restart Draw as Draw is in play\") */\n      tag_129\n        /* \"#utility.yul\":6336:6738   */\n      jump\n        /* \"Lottery.sol\":3062:3132  require(tickets.length == 0, \"Cannot Restart Draw as Draw is in play\") */\n    tag_222:\n        /* \"Lottery.sol\":3143:3157  delete tickets */\n      tag_225\n        /* \"Lottery.sol\":3150:3157  tickets */\n      0x06\n      0x00\n        /* \"Lottery.sol\":3143:3157  delete tickets */\n      tag_159\n      jump\t// in\n    tag_225:\n        /* \"Lottery.sol\":3180:3206  block.timestamp + duration */\n      tag_226\n        /* \"Lottery.sol\":395:405  30 minutes */\n      0x0708\n        /* \"Lottery.sol\":3180:3195  block.timestamp */\n      timestamp\n        /* \"Lottery.sol\":3180:3206  block.timestamp + duration */\n      tag_155\n      jump\t// in\n    tag_226:\n        /* \"Lottery.sol\":3167:3177  expiration */\n      0x00\n        /* \"Lottery.sol\":3167:3206  expiration = block.timestamp + duration */\n      sstore\n        /* \"Lottery.sol\":3011:3213  function restartDraw() public isOperator {... */\n      jump\t// out\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":392:1095   */\n    tag_177:\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":448:461   */\n      0x60\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":665:670   */\n      dup2\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":674:675   */\n      0x00\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":665:675   */\n      sub\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":661:712   */\n      tag_228\n      jumpi\n      pop\n      pop\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":691:701   */\n      0x40\n      dup1\n      mload\n      dup1\n      dup3\n      add\n      swap1\n      swap2\n      mstore\n      0x01\n      dup2\n      mstore\n      shl(0xfc, 0x03)\n      0x20\n      dup3\n      add\n      mstore\n      swap1\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":392:1095   */\n      jump\t// out\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":661:712   */\n    tag_228:\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":736:741   */\n      dup2\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":721:733   */\n      0x00\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":775:850   */\n    tag_229:\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":782:791   */\n      dup2\n      iszero\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":775:850   */\n      tag_230\n      jumpi\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":807:815   */\n      dup1\n      tag_231\n      dup2\n      tag_194\n      jump\t// in\n    tag_231:\n      swap2\n      pop\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":829:839   */\n      tag_232\n      swap1\n      pop\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":837:839   */\n      0x0a\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":829:839   */\n      dup4\n      tag_184\n      jump\t// in\n    tag_232:\n      swap2\n      pop\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":775:850   */\n      jump(tag_229)\n    tag_230:\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":859:878   */\n      0x00\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":891:897   */\n      dup2\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":881:898   */\n      0xffffffffffffffff\n      dup2\n      gt\n      iszero\n      tag_234\n      jumpi\n      tag_234\n      tag_235\n      jump\t// in\n    tag_234:\n      mload(0x40)\n      swap1\n      dup1\n      dup3\n      mstore\n      dup1\n      0x1f\n      add\n      not(0x1f)\n      and\n      0x20\n      add\n      dup3\n      add\n      0x40\n      mstore\n      dup1\n      iszero\n      tag_236\n      jumpi\n      0x20\n      dup3\n      add\n      dup2\n      dup1\n      calldatasize\n      dup4\n      calldatacopy\n      add\n      swap1\n      pop\n    tag_236:\n      pop\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":859:898   */\n      swap1\n      pop\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":908:1058   */\n    tag_237:\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":915:925   */\n      dup5\n      iszero\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":908:1058   */\n      tag_238\n      jumpi\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":941:952   */\n      tag_239\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":951:952   */\n      0x01\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":941:952   */\n      dup4\n      tag_142\n      jump\t// in\n    tag_239:\n      swap2\n      pop\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":1009:1019   */\n      tag_240\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":1017:1019   */\n      0x0a\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":1009:1014   */\n      dup7\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":1009:1019   */\n      tag_146\n      jump\t// in\n    tag_240:\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":996:1020   */\n      tag_241\n      swap1\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":996:998   */\n      0x30\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":996:1020   */\n      tag_155\n      jump\t// in\n    tag_241:\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":983:1022   */\n      0xf8\n      shl\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":966:972   */\n      dup2\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":973:979   */\n      dup4\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":966:980   */\n      dup2\n      mload\n      dup2\n      lt\n      tag_243\n      jumpi\n      tag_243\n      tag_149\n      jump\t// in\n    tag_243:\n      0x20\n      add\n      add\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":966:1022   */\n      swap1\n      not(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n      and\n      swap1\n      dup2\n      0x00\n      byte\n      swap1\n      mstore8\n      pop\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":1036:1047   */\n      tag_244\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":1045:1047   */\n      0x0a\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":1036:1047   */\n      dup7\n      tag_184\n      jump\t// in\n    tag_244:\n      swap5\n      pop\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":908:1058   */\n      jump(tag_237)\n    tag_238:\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":1081:1087   */\n      swap5\n        /* \"@openzeppelin/contracts/utils/Strings.sol\":392:1095   */\n      swap4\n      pop\n      pop\n      pop\n      pop\n      jump\t// out\n    tag_159:\n      pop\n      dup1\n      sload\n      0x00\n      dup3\n      sstore\n      swap1\n      0x00\n      mstore\n      keccak256(0x00, 0x20)\n      swap1\n      dup2\n      add\n      swap1\n      tag_246\n      swap2\n      swap1\n      tag_247\n      jump\t// in\n    tag_246:\n      pop\n      jump\t// out\n    tag_247:\n    tag_248:\n      dup1\n      dup3\n      gt\n      iszero\n      tag_249\n      jumpi\n      0x00\n      dup2\n      sstore\n      0x01\n      add\n      jump(tag_248)\n    tag_249:\n      pop\n      swap1\n      jump\t// out\n        /* \"#utility.yul\":196:877   */\n    tag_63:\n        /* \"#utility.yul\":367:369   */\n      0x20\n        /* \"#utility.yul\":419:440   */\n      dup1\n      dup3\n      mstore\n        /* \"#utility.yul\":489:502   */\n      dup3\n      mload\n        /* \"#utility.yul\":392:410   */\n      dup3\n      dup3\n      add\n        /* \"#utility.yul\":511:533   */\n      dup2\n      swap1\n      mstore\n        /* \"#utility.yul\":338:342   */\n      0x00\n      swap2\n        /* \"#utility.yul\":367:369   */\n      swap1\n        /* \"#utility.yul\":590:605   */\n      dup5\n      dup3\n      add\n      swap1\n        /* \"#utility.yul\":564:566   */\n      0x40\n        /* \"#utility.yul\":549:567   */\n      dup6\n      add\n      swap1\n        /* \"#utility.yul\":338:342   */\n      dup5\n        /* \"#utility.yul\":633:851   */\n    tag_256:\n        /* \"#utility.yul\":647:653   */\n      dup2\n        /* \"#utility.yul\":644:645   */\n      dup2\n        /* \"#utility.yul\":641:654   */\n      lt\n        /* \"#utility.yul\":633:851   */\n      iszero\n      tag_258\n      jumpi\n        /* \"#utility.yul\":712:725   */\n      dup4\n      mload\n      sub(shl(0xa0, 0x01), 0x01)\n        /* \"#utility.yul\":708:770   */\n      and\n        /* \"#utility.yul\":696:771   */\n      dup4\n      mstore\n        /* \"#utility.yul\":826:841   */\n      swap3\n      dup5\n      add\n      swap3\n        /* \"#utility.yul\":791:803   */\n      swap2\n      dup5\n      add\n      swap2\n        /* \"#utility.yul\":669:670   */\n      0x01\n        /* \"#utility.yul\":662:671   */\n      add\n        /* \"#utility.yul\":633:851   */\n      jump(tag_256)\n    tag_258:\n      pop\n        /* \"#utility.yul\":868:871   */\n      swap1\n      swap7\n        /* \"#utility.yul\":196:877   */\n      swap6\n      pop\n      pop\n      pop\n      pop\n      pop\n      pop\n      jump\t// out\n        /* \"#utility.yul\":882:1062   */\n    tag_67:\n        /* \"#utility.yul\":941:947   */\n      0x00\n        /* \"#utility.yul\":994:996   */\n      0x20\n        /* \"#utility.yul\":982:991   */\n      dup3\n        /* \"#utility.yul\":973:980   */\n      dup5\n        /* \"#utility.yul\":969:992   */\n      sub\n        /* \"#utility.yul\":965:997   */\n      slt\n        /* \"#utility.yul\":962:1014   */\n      iszero\n      tag_260\n      jumpi\n        /* \"#utility.yul\":1010:1011   */\n      0x00\n        /* \"#utility.yul\":1007:1008   */\n      dup1\n        /* \"#utility.yul\":1000:1012   */\n      revert\n        /* \"#utility.yul\":962:1014   */\n    tag_260:\n      pop\n        /* \"#utility.yul\":1033:1056   */\n      calldataload\n      swap2\n        /* \"#utility.yul\":882:1062   */\n      swap1\n      pop\n      jump\t// out\n        /* \"#utility.yul\":1490:1799   */\n    tag_111:\n        /* \"#utility.yul\":1549:1555   */\n      0x00\n        /* \"#utility.yul\":1602:1604   */\n      0x20\n        /* \"#utility.yul\":1590:1599   */\n      dup3\n        /* \"#utility.yul\":1581:1588   */\n      dup5\n        /* \"#utility.yul\":1577:1600   */\n      sub\n        /* \"#utility.yul\":1573:1605   */\n      slt\n        /* \"#utility.yul\":1570:1622   */\n      iszero\n      tag_264\n      jumpi\n        /* \"#utility.yul\":1618:1619   */\n      0x00\n        /* \"#utility.yul\":1615:1616   */\n      dup1\n        /* \"#utility.yul\":1608:1620   */\n      revert\n        /* \"#utility.yul\":1570:1622   */\n    tag_264:\n        /* \"#utility.yul\":1657:1666   */\n      dup2\n        /* \"#utility.yul\":1644:1667   */\n      calldataload\n      sub(shl(0xa0, 0x01), 0x01)\n        /* \"#utility.yul\":1700:1705   */\n      dup2\n        /* \"#utility.yul\":1696:1750   */\n      and\n        /* \"#utility.yul\":1689:1694   */\n      dup2\n        /* \"#utility.yul\":1686:1751   */\n      eq\n        /* \"#utility.yul\":1676:1769   */\n      tag_265\n      jumpi\n        /* \"#utility.yul\":1765:1766   */\n      0x00\n        /* \"#utility.yul\":1762:1763   */\n      dup1\n        /* \"#utility.yul\":1755:1767   */\n      revert\n        /* \"#utility.yul\":1676:1769   */\n    tag_265:\n        /* \"#utility.yul\":1788:1793   */\n      swap4\n        /* \"#utility.yul\":1490:1799   */\n      swap3\n      pop\n      pop\n      pop\n      jump\t// out\n        /* \"#utility.yul\":2561:2688   */\n    tag_250:\n        /* \"#utility.yul\":2622:2632   */\n      0x4e487b71\n        /* \"#utility.yul\":2617:2620   */\n      0xe0\n        /* \"#utility.yul\":2613:2633   */\n      shl\n        /* \"#utility.yul\":2610:2611   */\n      0x00\n        /* \"#utility.yul\":2603:2634   */\n      mstore\n        /* \"#utility.yul\":2653:2657   */\n      0x11\n        /* \"#utility.yul\":2650:2651   */\n      0x04\n        /* \"#utility.yul\":2643:2658   */\n      mstore\n        /* \"#utility.yul\":2677:2681   */\n      0x24\n        /* \"#utility.yul\":2674:2675   */\n      0x00\n        /* \"#utility.yul\":2667:2682   */\n      revert\n        /* \"#utility.yul\":2693:2818   */\n    tag_142:\n        /* \"#utility.yul\":2733:2737   */\n      0x00\n        /* \"#utility.yul\":2761:2762   */\n      dup3\n        /* \"#utility.yul\":2758:2759   */\n      dup3\n        /* \"#utility.yul\":2755:2763   */\n      lt\n        /* \"#utility.yul\":2752:2786   */\n      iszero\n      tag_271\n      jumpi\n        /* \"#utility.yul\":2766:2784   */\n      tag_271\n      tag_250\n      jump\t// in\n    tag_271:\n      pop\n        /* \"#utility.yul\":2803:2812   */\n      sub\n      swap1\n        /* \"#utility.yul\":2693:2818   */\n      jump\t// out\n        /* \"#utility.yul\":3075:3202   */\n    tag_251:\n        /* \"#utility.yul\":3136:3146   */\n      0x4e487b71\n        /* \"#utility.yul\":3131:3134   */\n      0xe0\n        /* \"#utility.yul\":3127:3147   */\n      shl\n        /* \"#utility.yul\":3124:3125   */\n      0x00\n        /* \"#utility.yul\":3117:3148   */\n      mstore\n        /* \"#utility.yul\":3167:3171   */\n      0x12\n        /* \"#utility.yul\":3164:3165   */\n      0x04\n        /* \"#utility.yul\":3157:3172   */\n      mstore\n        /* \"#utility.yul\":3191:3195   */\n      0x24\n        /* \"#utility.yul\":3188:3189   */\n      0x00\n        /* \"#utility.yul\":3181:3196   */\n      revert\n        /* \"#utility.yul\":3207:3319   */\n    tag_146:\n        /* \"#utility.yul\":3239:3240   */\n      0x00\n        /* \"#utility.yul\":3265:3266   */\n      dup3\n        /* \"#utility.yul\":3255:3290   */\n      tag_276\n      jumpi\n        /* \"#utility.yul\":3270:3288   */\n      tag_276\n      tag_251\n      jump\t// in\n    tag_276:\n      pop\n        /* \"#utility.yul\":3304:3313   */\n      mod\n      swap1\n        /* \"#utility.yul\":3207:3319   */\n      jump\t// out\n        /* \"#utility.yul\":3324:3451   */\n    tag_149:\n        /* \"#utility.yul\":3385:3395   */\n      0x4e487b71\n        /* \"#utility.yul\":3380:3383   */\n      0xe0\n        /* \"#utility.yul\":3376:3396   */\n      shl\n        /* \"#utility.yul\":3373:3374   */\n      0x00\n        /* \"#utility.yul\":3366:3397   */\n      mstore\n        /* \"#utility.yul\":3416:3420   */\n      0x32\n        /* \"#utility.yul\":3413:3414   */\n      0x04\n        /* \"#utility.yul\":3406:3421   */\n      mstore\n        /* \"#utility.yul\":3440:3444   */\n      0x24\n        /* \"#utility.yul\":3437:3438   */\n      0x00\n        /* \"#utility.yul\":3430:3445   */\n      revert\n        /* \"#utility.yul\":3456:3624   */\n    tag_153:\n        /* \"#utility.yul\":3496:3503   */\n      0x00\n        /* \"#utility.yul\":3562:3563   */\n      dup2\n        /* \"#utility.yul\":3558:3559   */\n      0x00\n        /* \"#utility.yul\":3554:3560   */\n      not\n        /* \"#utility.yul\":3550:3564   */\n      div\n        /* \"#utility.yul\":3547:3548   */\n      dup4\n        /* \"#utility.yul\":3544:3565   */\n      gt\n        /* \"#utility.yul\":3539:3540   */\n      dup3\n        /* \"#utility.yul\":3532:3541   */\n      iszero\n        /* \"#utility.yul\":3525:3542   */\n      iszero\n        /* \"#utility.yul\":3521:3566   */\n      and\n        /* \"#utility.yul\":3518:3589   */\n      iszero\n      tag_280\n      jumpi\n        /* \"#utility.yul\":3569:3587   */\n      tag_280\n      tag_250\n      jump\t// in\n    tag_280:\n      pop\n        /* \"#utility.yul\":3609:3618   */\n      mul\n      swap1\n        /* \"#utility.yul\":3456:3624   */\n      jump\t// out\n        /* \"#utility.yul\":3629:3757   */\n    tag_155:\n        /* \"#utility.yul\":3669:3672   */\n      0x00\n        /* \"#utility.yul\":3700:3701   */\n      dup3\n        /* \"#utility.yul\":3696:3702   */\n      not\n        /* \"#utility.yul\":3693:3694   */\n      dup3\n        /* \"#utility.yul\":3690:3703   */\n      gt\n        /* \"#utility.yul\":3687:3726   */\n      iszero\n      tag_283\n      jumpi\n        /* \"#utility.yul\":3706:3724   */\n      tag_283\n      tag_250\n      jump\t// in\n    tag_283:\n      pop\n        /* \"#utility.yul\":3742:3751   */\n      add\n      swap1\n        /* \"#utility.yul\":3629:3757   */\n      jump\t// out\n        /* \"#utility.yul\":4113:4371   */\n    tag_252:\n        /* \"#utility.yul\":4185:4186   */\n      0x00\n        /* \"#utility.yul\":4195:4308   */\n    tag_286:\n        /* \"#utility.yul\":4209:4215   */\n      dup4\n        /* \"#utility.yul\":4206:4207   */\n      dup2\n        /* \"#utility.yul\":4203:4216   */\n      lt\n        /* \"#utility.yul\":4195:4308   */\n      iszero\n      tag_288\n      jumpi\n        /* \"#utility.yul\":4285:4296   */\n      dup2\n      dup2\n      add\n        /* \"#utility.yul\":4279:4297   */\n      mload\n        /* \"#utility.yul\":4266:4277   */\n      dup4\n      dup3\n      add\n        /* \"#utility.yul\":4259:4298   */\n      mstore\n        /* \"#utility.yul\":4231:4233   */\n      0x20\n        /* \"#utility.yul\":4224:4234   */\n      add\n        /* \"#utility.yul\":4195:4308   */\n      jump(tag_286)\n    tag_288:\n        /* \"#utility.yul\":4326:4332   */\n      dup4\n        /* \"#utility.yul\":4323:4324   */\n      dup2\n        /* \"#utility.yul\":4320:4333   */\n      gt\n        /* \"#utility.yul\":4317:4365   */\n      iszero\n      tag_289\n      jumpi\n        /* \"#utility.yul\":4361:4362   */\n      0x00\n        /* \"#utility.yul\":4352:4358   */\n      dup5\n        /* \"#utility.yul\":4347:4350   */\n      dup5\n        /* \"#utility.yul\":4343:4359   */\n      add\n        /* \"#utility.yul\":4336:4363   */\n      mstore\n        /* \"#utility.yul\":4317:4365   */\n    tag_289:\n      pop\n        /* \"#utility.yul\":4113:4371   */\n      pop\n      pop\n      pop\n      jump\t// out\n        /* \"#utility.yul\":4376:4964   */\n    tag_179:\n        /* \"#utility.yul\":4718:4750   */\n      0x7468652076616c7565206d757374206265206d756c7469706c65206f66200000\n        /* \"#utility.yul\":4713:4716   */\n      dup2\n        /* \"#utility.yul\":4706:4751   */\n      mstore\n        /* \"#utility.yul\":4688:4691   */\n      0x00\n        /* \"#utility.yul\":4780:4786   */\n      dup3\n        /* \"#utility.yul\":4774:4787   */\n      mload\n        /* \"#utility.yul\":4796:4858   */\n      tag_291\n        /* \"#utility.yul\":4851:4857   */\n      dup2\n        /* \"#utility.yul\":4846:4848   */\n      0x1e\n        /* \"#utility.yul\":4841:4844   */\n      dup6\n        /* \"#utility.yul\":4837:4849   */\n      add\n        /* \"#utility.yul\":4830:4834   */\n      0x20\n        /* \"#utility.yul\":4822:4828   */\n      dup8\n        /* \"#utility.yul\":4818:4835   */\n      add\n        /* \"#utility.yul\":4796:4858   */\n      tag_252\n      jump\t// in\n    tag_291:\n        /* \"#utility.yul\":4922:4930   */\n      0x2045746865720000000000000000000000000000000000000000000000000000\n        /* \"#utility.yul\":4917:4919   */\n      0x1e\n        /* \"#utility.yul\":4877:4893   */\n      swap4\n      swap1\n      swap2\n      add\n        /* \"#utility.yul\":4909:4920   */\n      swap3\n      dup4\n      add\n        /* \"#utility.yul\":4902:4931   */\n      mstore\n      pop\n        /* \"#utility.yul\":4955:4957   */\n      0x24\n        /* \"#utility.yul\":4947:4958   */\n      add\n      swap2\n        /* \"#utility.yul\":4376:4964   */\n      swap1\n      pop\n      jump\t// out\n        /* \"#utility.yul\":4969:5352   */\n    tag_182:\n        /* \"#utility.yul\":5118:5120   */\n      0x20\n        /* \"#utility.yul\":5107:5116   */\n      dup2\n        /* \"#utility.yul\":5100:5121   */\n      mstore\n        /* \"#utility.yul\":5081:5085   */\n      0x00\n        /* \"#utility.yul\":5150:5156   */\n      dup3\n        /* \"#utility.yul\":5144:5157   */\n      mload\n        /* \"#utility.yul\":5193:5199   */\n      dup1\n        /* \"#utility.yul\":5188:5190   */\n      0x20\n        /* \"#utility.yul\":5177:5186   */\n      dup5\n        /* \"#utility.yul\":5173:5191   */\n      add\n        /* \"#utility.yul\":5166:5200   */\n      mstore\n        /* \"#utility.yul\":5209:5275   */\n      tag_293\n        /* \"#utility.yul\":5268:5274   */\n      dup2\n        /* \"#utility.yul\":5263:5265   */\n      0x40\n        /* \"#utility.yul\":5252:5261   */\n      dup6\n        /* \"#utility.yul\":5248:5266   */\n      add\n        /* \"#utility.yul\":5243:5245   */\n      0x20\n        /* \"#utility.yul\":5235:5241   */\n      dup8\n        /* \"#utility.yul\":5231:5246   */\n      add\n        /* \"#utility.yul\":5209:5275   */\n      tag_252\n      jump\t// in\n    tag_293:\n        /* \"#utility.yul\":5336:5338   */\n      0x1f\n        /* \"#utility.yul\":5315:5330   */\n      add\n      not(0x1f)\n        /* \"#utility.yul\":5311:5340   */\n      and\n        /* \"#utility.yul\":5296:5341   */\n      swap2\n      swap1\n      swap2\n      add\n        /* \"#utility.yul\":5343:5345   */\n      0x40\n        /* \"#utility.yul\":5292:5346   */\n      add\n      swap3\n        /* \"#utility.yul\":4969:5352   */\n      swap2\n      pop\n      pop\n      jump\t// out\n        /* \"#utility.yul\":5357:5477   */\n    tag_184:\n        /* \"#utility.yul\":5397:5398   */\n      0x00\n        /* \"#utility.yul\":5423:5424   */\n      dup3\n        /* \"#utility.yul\":5413:5448   */\n      tag_296\n      jumpi\n        /* \"#utility.yul\":5428:5446   */\n      tag_296\n      tag_251\n      jump\t// in\n    tag_296:\n      pop\n        /* \"#utility.yul\":5462:5471   */\n      div\n      swap1\n        /* \"#utility.yul\":5357:5477   */\n      jump\t// out\n        /* \"#utility.yul\":5840:5975   */\n    tag_194:\n        /* \"#utility.yul\":5879:5882   */\n      0x00\n        /* \"#utility.yul\":5900:5917   */\n      0x01\n      dup3\n      add\n        /* \"#utility.yul\":5897:5940   */\n      tag_300\n      jumpi\n        /* \"#utility.yul\":5920:5938   */\n      tag_300\n      tag_250\n      jump\t// in\n    tag_300:\n      pop\n        /* \"#utility.yul\":5967:5968   */\n      0x01\n        /* \"#utility.yul\":5956:5969   */\n      add\n      swap1\n        /* \"#utility.yul\":5840:5975   */\n      jump\t// out\n        /* \"#utility.yul\":6743:6870   */\n    tag_235:\n        /* \"#utility.yul\":6804:6814   */\n      0x4e487b71\n        /* \"#utility.yul\":6799:6802   */\n      0xe0\n        /* \"#utility.yul\":6795:6815   */\n      shl\n        /* \"#utility.yul\":6792:6793   */\n      0x00\n        /* \"#utility.yul\":6785:6816   */\n      mstore\n        /* \"#utility.yul\":6835:6839   */\n      0x41\n        /* \"#utility.yul\":6832:6833   */\n      0x04\n        /* \"#utility.yul\":6825:6840   */\n      mstore\n        /* \"#utility.yul\":6859:6863   */\n      0x24\n        /* \"#utility.yul\":6856:6857   */\n      0x00\n        /* \"#utility.yul\":6849:6864   */\n      revert\n\n    auxdata: 0xa2646970667358221220fbeb4d821f985f9cd668e990c7177aa76a87c75127a993d4b4370139268fb3ff64736f6c634300080d0033\n}\n",
    "bytecode": {
      "functionDebugData": {
        "@_71": {
          "entryPoint": null,
          "id": 71,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "checked_add_t_uint256": {
          "entryPoint": 60,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nodeType": "YulBlock",
            "src": "0:241:2",
            "statements": [
              {
                "nodeType": "YulBlock",
                "src": "6:3:2",
                "statements": []
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "62:177:2",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "97:111:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "118:1:2",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "125:3:2",
                                      "type": "",
                                      "value": "224"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "130:10:2",
                                      "type": "",
                                      "value": "0x4e487b71"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "121:3:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "121:20:2"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nodeType": "YulIdentifier",
                                "src": "111:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "111:31:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "111:31:2"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "162:1:2",
                                  "type": "",
                                  "value": "4"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "165:4:2",
                                  "type": "",
                                  "value": "0x11"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nodeType": "YulIdentifier",
                                "src": "155:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "155:15:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "155:15:2"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "190:1:2",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "193:4:2",
                                  "type": "",
                                  "value": "0x24"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "183:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "183:15:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "183:15:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "78:1:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "y",
                                "nodeType": "YulIdentifier",
                                "src": "85:1:2"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "81:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "81:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "75:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "75:13:2"
                      },
                      "nodeType": "YulIf",
                      "src": "72:136:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "217:16:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "228:1:2"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "231:1:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "224:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "224:9:2"
                      },
                      "variableNames": [
                        {
                          "name": "sum",
                          "nodeType": "YulIdentifier",
                          "src": "217:3:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "checked_add_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "x",
                    "nodeType": "YulTypedName",
                    "src": "45:1:2",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nodeType": "YulTypedName",
                    "src": "48:1:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "sum",
                    "nodeType": "YulTypedName",
                    "src": "54:3:2",
                    "type": ""
                  }
                ],
                "src": "14:225:2"
              }
            ]
          },
          "contents": "{\n    { }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        if gt(x, not(y))\n        {\n            mstore(0, shl(224, 0x4e487b71))\n            mstore(4, 0x11)\n            revert(0, 0x24)\n        }\n        sum := add(x, y)\n    }\n}",
          "id": 2,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "linkReferences": {},
      "object": "6080604052600060025534801561001557600080fd5b50600180546001600160a01b031916331790556100346107084261003c565b600055610062565b6000821982111561005d57634e487b7160e01b600052601160045260246000fd5b500190565b610f6f806100716000396000f3fe6080604052600436106101805760003560e01c806371827b7b116100d6578063ba946d791161007f578063ea3a149911610059578063ea3a1499146103c4578063f2613269146103f1578063fe1881841461040657600080fd5b8063ba946d7914610363578063c6944fa014610379578063dd64e5341461038e57600080fd5b806396c85ef3116100b057806396c85ef31461030a5780639b89470314610339578063a88f46721461034e57600080fd5b806371827b7b146102d857806391d8b14e146102ed57806393a563b5146102f557600080fd5b80634665096d1161013857806350b447121161011257806350b44712146102655780635a58acdd1461029d5780636032a4f9146102bd57600080fd5b80634665096d146102185780634788af7c1461022e5780634ed026221461024357600080fd5b80630fb5a6b4116101695780630fb5a6b4146101d05780631209b1f6146101e657806335580df21461020157600080fd5b806306f7f3bf146101855780630789c607146101ae575b600080fd5b34801561019157600080fd5b5061019b60045481565b6040519081526020015b60405180910390f35b3480156101ba57600080fd5b503360009081526005602052604090205461019b565b3480156101dc57600080fd5b5061019b61070881565b3480156101f257600080fd5b5061019b662386f26fc1000081565b34801561020d57600080fd5b50610216610426565b005b34801561022457600080fd5b5061019b60005481565b34801561023a57600080fd5b506102166104cd565b34801561024f57600080fd5b506102586106e1565b6040516101a59190610ced565b34801561027157600080fd5b50610285610280366004610d3a565b610743565b6040516001600160a01b0390911681526020016101a5565b3480156102a957600080fd5b50600154610285906001600160a01b031681565b3480156102c957600080fd5b5061019b66038d7ea4c6800081565b3480156102e457600080fd5b5061021661076d565b61021661080c565b34801561030157600080fd5b5061019b610948565b34801561031657600080fd5b5033600090815260056020526040902054151560405190151581526020016101a5565b34801561034557600080fd5b5061019b606481565b34801561035a57600080fd5b5061021661095e565b34801561036f57600080fd5b5061019b60025481565b34801561038557600080fd5b5061019b610a82565b34801561039a57600080fd5b5061019b6103a9366004610d53565b6001600160a01b031660009081526005602052604090205490565b3480156103d057600080fd5b5061019b6103df366004610d53565b60056020526000908152604090205481565b3480156103fd57600080fd5b50610216610a9a565b34801561041257600080fd5b50600354610285906001600160a01b031681565b6001546001600160a01b031633146104905760405162461bcd60e51b815260206004820152602260248201527f43616c6c6572206973206e6f7420746865206c6f7474657279206f706572617460448201526137b960f11b60648201526084015b60405180910390fd5b600280546000918290556040513392839183156108fc0291849190818181858888f193505050501580156104c8573d6000803e3d6000fd5b505050565b6001546001600160a01b031633146105325760405162461bcd60e51b815260206004820152602260248201527f43616c6c6572206973206e6f7420746865206c6f7474657279206f706572617460448201526137b960f11b6064820152608401610487565b6006546105815760405162461bcd60e51b815260206004820152601960248201527f4e6f207469636b657473207765726520707572636861736564000000000000006044820152606401610487565b6006546000906105919043610d99565b604080514260208201529140908201819052915060009060600160408051601f1981840301815291905280516020909101206006549091506000906105d69083610dc6565b90506000600682815481106105ed576105ed610dda565b6000918252602090912001546003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b039092169182179055905061063e66038d7ea4c68000662386f26fc10000610d99565b60065461064b9190610df0565b6001600160a01b03821660009081526005602052604081208054909190610673908490610e0f565b90915550506001600160a01b0381166000908152600560205260409020546004556006546106a99066038d7ea4c6800090610df0565b600260008282546106ba9190610e0f565b909155506106cc905060066000610cb3565b6106d861070842610e0f565b60005550505050565b6060600680548060200260200160405190810160405280929190818152602001828054801561073957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161071b575b5050505050905090565b6006818154811061075357600080fd5b6000918252602090912001546001600160a01b0316905081565b336000908152600560205260409020546107c95760405162461bcd60e51b815260206004820152601660248201527f43616c6c6572206973206e6f7420612077696e6e6572000000000000000000006044820152606401610487565b3360008181526005602052604080822080549083905590519091839183156108fc0291849190818181858888f193505050501580156104c8573d6000803e3d6000fd5b61081d662386f26fc1000034610dc6565b1561082e662386f26fc10000610b92565b60405160200161083e9190610e57565b6040516020818303038152906040529061086b5760405162461bcd60e51b81526004016104879190610ec3565b50600061087f662386f26fc1000034610ef6565b9050610889610948565b8111156108d85760405162461bcd60e51b815260206004820152601d60248201527f4e6f7420656e6f756768207469636b65747320617661696c61626c652e0000006044820152606401610487565b60005b8181101561094457600680546001810182556000919091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f01805473ffffffffffffffffffffffffffffffffffffffff1916331790558061093c81610f0a565b9150506108db565b5050565b600654600090610959906064610d99565b905090565b6000544210156109b05760405162461bcd60e51b815260206004820152601b60248201527f746865206c6f7474657279206e6f7420657870697265642079657400000000006044820152606401610487565b60005b600654811015610a73576000600682815481106109d2576109d2610dda565b6000918252602082200154600680546001600160a01b03909216935090849081106109ff576109ff610dda565b60009182526020822001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0393841617905560405191831691662386f26fc100009082818181858883f19350505050158015610a5e573d6000803e3d6000fd5b50508080610a6b90610f0a565b9150506109b3565b50610a8060066000610cb3565b565b60065460009061095990662386f26fc1000090610df0565b6001546001600160a01b03163314610aff5760405162461bcd60e51b815260206004820152602260248201527f43616c6c6572206973206e6f7420746865206c6f7474657279206f706572617460448201526137b960f11b6064820152608401610487565b60065415610b755760405162461bcd60e51b815260206004820152602660248201527f43616e6e6f74205265737461727420447261772061732044726177206973206960448201527f6e20706c617900000000000000000000000000000000000000000000000000006064820152608401610487565b610b8160066000610cb3565b610b8d61070842610e0f565b600055565b606081600003610bb95750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610be35780610bcd81610f0a565b9150610bdc9050600a83610ef6565b9150610bbd565b60008167ffffffffffffffff811115610bfe57610bfe610f23565b6040519080825280601f01601f191660200182016040528015610c28576020820181803683370190505b5090505b8415610cab57610c3d600183610d99565b9150610c4a600a86610dc6565b610c55906030610e0f565b60f81b818381518110610c6a57610c6a610dda565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610ca4600a86610ef6565b9450610c2c565b949350505050565b5080546000825590600052602060002090810190610cd19190610cd4565b50565b5b80821115610ce95760008155600101610cd5565b5090565b6020808252825182820181905260009190848201906040850190845b81811015610d2e5783516001600160a01b031683529284019291840191600101610d09565b50909695505050505050565b600060208284031215610d4c57600080fd5b5035919050565b600060208284031215610d6557600080fd5b81356001600160a01b0381168114610d7c57600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b600082821015610dab57610dab610d83565b500390565b634e487b7160e01b600052601260045260246000fd5b600082610dd557610dd5610db0565b500690565b634e487b7160e01b600052603260045260246000fd5b6000816000190483118215151615610e0a57610e0a610d83565b500290565b60008219821115610e2257610e22610d83565b500190565b60005b83811015610e42578181015183820152602001610e2a565b83811115610e51576000848401525b50505050565b7f7468652076616c7565206d757374206265206d756c7469706c65206f66200000815260008251610e8f81601e850160208701610e27565b7f2045746865720000000000000000000000000000000000000000000000000000601e939091019283015250602401919050565b6020815260008251806020840152610ee2816040850160208701610e27565b601f01601f19169190910160400192915050565b600082610f0557610f05610db0565b500490565b600060018201610f1c57610f1c610d83565b5060010190565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220fbeb4d821f985f9cd668e990c7177aa76a87c75127a993d4b4370139268fb3ff64736f6c634300080d0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x0 PUSH1 0x2 SSTORE CALLVALUE DUP1 ISZERO PUSH2 0x15 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x1 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB NOT AND CALLER OR SWAP1 SSTORE PUSH2 0x34 PUSH2 0x708 TIMESTAMP PUSH2 0x3C JUMP JUMPDEST PUSH1 0x0 SSTORE PUSH2 0x62 JUMP JUMPDEST PUSH1 0x0 DUP3 NOT DUP3 GT ISZERO PUSH2 0x5D JUMPI PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST POP ADD SWAP1 JUMP JUMPDEST PUSH2 0xF6F DUP1 PUSH2 0x71 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x180 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x71827B7B GT PUSH2 0xD6 JUMPI DUP1 PUSH4 0xBA946D79 GT PUSH2 0x7F JUMPI DUP1 PUSH4 0xEA3A1499 GT PUSH2 0x59 JUMPI DUP1 PUSH4 0xEA3A1499 EQ PUSH2 0x3C4 JUMPI DUP1 PUSH4 0xF2613269 EQ PUSH2 0x3F1 JUMPI DUP1 PUSH4 0xFE188184 EQ PUSH2 0x406 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0xBA946D79 EQ PUSH2 0x363 JUMPI DUP1 PUSH4 0xC6944FA0 EQ PUSH2 0x379 JUMPI DUP1 PUSH4 0xDD64E534 EQ PUSH2 0x38E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0x96C85EF3 GT PUSH2 0xB0 JUMPI DUP1 PUSH4 0x96C85EF3 EQ PUSH2 0x30A JUMPI DUP1 PUSH4 0x9B894703 EQ PUSH2 0x339 JUMPI DUP1 PUSH4 0xA88F4672 EQ PUSH2 0x34E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0x71827B7B EQ PUSH2 0x2D8 JUMPI DUP1 PUSH4 0x91D8B14E EQ PUSH2 0x2ED JUMPI DUP1 PUSH4 0x93A563B5 EQ PUSH2 0x2F5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0x4665096D GT PUSH2 0x138 JUMPI DUP1 PUSH4 0x50B44712 GT PUSH2 0x112 JUMPI DUP1 PUSH4 0x50B44712 EQ PUSH2 0x265 JUMPI DUP1 PUSH4 0x5A58ACDD EQ PUSH2 0x29D JUMPI DUP1 PUSH4 0x6032A4F9 EQ PUSH2 0x2BD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0x4665096D EQ PUSH2 0x218 JUMPI DUP1 PUSH4 0x4788AF7C EQ PUSH2 0x22E JUMPI DUP1 PUSH4 0x4ED02622 EQ PUSH2 0x243 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0xFB5A6B4 GT PUSH2 0x169 JUMPI DUP1 PUSH4 0xFB5A6B4 EQ PUSH2 0x1D0 JUMPI DUP1 PUSH4 0x1209B1F6 EQ PUSH2 0x1E6 JUMPI DUP1 PUSH4 0x35580DF2 EQ PUSH2 0x201 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0x6F7F3BF EQ PUSH2 0x185 JUMPI DUP1 PUSH4 0x789C607 EQ PUSH2 0x1AE JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x191 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH1 0x4 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1BA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0x19B JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1DC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH2 0x708 DUP2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1F2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH7 0x2386F26FC10000 DUP2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x20D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x216 PUSH2 0x426 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x224 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x23A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x216 PUSH2 0x4CD JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x24F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x258 PUSH2 0x6E1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1A5 SWAP2 SWAP1 PUSH2 0xCED JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x271 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x285 PUSH2 0x280 CALLDATASIZE PUSH1 0x4 PUSH2 0xD3A JUMP JUMPDEST PUSH2 0x743 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x1A5 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2A9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x1 SLOAD PUSH2 0x285 SWAP1 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2C9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH7 0x38D7EA4C68000 DUP2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2E4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x216 PUSH2 0x76D JUMP JUMPDEST PUSH2 0x216 PUSH2 0x80C JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x301 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH2 0x948 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x316 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD ISZERO ISZERO PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x1A5 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x345 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH1 0x64 DUP2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x35A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x216 PUSH2 0x95E JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x36F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x385 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH2 0xA82 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x39A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH2 0x3A9 CALLDATASIZE PUSH1 0x4 PUSH2 0xD53 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD SWAP1 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x3D0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH2 0x3DF CALLDATASIZE PUSH1 0x4 PUSH2 0xD53 JUMP JUMPDEST PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x3FD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x216 PUSH2 0xA9A JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x412 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x3 SLOAD PUSH2 0x285 SWAP1 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0x490 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x22 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x43616C6C6572206973206E6F7420746865206C6F7474657279206F7065726174 PUSH1 0x44 DUP3 ADD MSTORE PUSH2 0x37B9 PUSH1 0xF1 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x2 DUP1 SLOAD PUSH1 0x0 SWAP2 DUP3 SWAP1 SSTORE PUSH1 0x40 MLOAD CALLER SWAP3 DUP4 SWAP2 DUP4 ISZERO PUSH2 0x8FC MUL SWAP2 DUP5 SWAP2 SWAP1 DUP2 DUP2 DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x4C8 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0x532 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x22 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x43616C6C6572206973206E6F7420746865206C6F7474657279206F7065726174 PUSH1 0x44 DUP3 ADD MSTORE PUSH2 0x37B9 PUSH1 0xF1 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0x487 JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH2 0x581 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x19 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E6F207469636B65747320776572652070757263686173656400000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x487 JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH1 0x0 SWAP1 PUSH2 0x591 SWAP1 NUMBER PUSH2 0xD99 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD TIMESTAMP PUSH1 0x20 DUP3 ADD MSTORE SWAP2 BLOCKHASH SWAP1 DUP3 ADD DUP2 SWAP1 MSTORE SWAP2 POP PUSH1 0x0 SWAP1 PUSH1 0x60 ADD PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F NOT DUP2 DUP5 SUB ADD DUP2 MSTORE SWAP2 SWAP1 MSTORE DUP1 MLOAD PUSH1 0x20 SWAP1 SWAP2 ADD KECCAK256 PUSH1 0x6 SLOAD SWAP1 SWAP2 POP PUSH1 0x0 SWAP1 PUSH2 0x5D6 SWAP1 DUP4 PUSH2 0xDC6 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH1 0x6 DUP3 DUP2 SLOAD DUP2 LT PUSH2 0x5ED JUMPI PUSH2 0x5ED PUSH2 0xDDA JUMP JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x3 DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP3 AND SWAP2 DUP3 OR SWAP1 SSTORE SWAP1 POP PUSH2 0x63E PUSH7 0x38D7EA4C68000 PUSH7 0x2386F26FC10000 PUSH2 0xD99 JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH2 0x64B SWAP2 SWAP1 PUSH2 0xDF0 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 DUP1 SLOAD SWAP1 SWAP2 SWAP1 PUSH2 0x673 SWAP1 DUP5 SWAP1 PUSH2 0xE0F JUMP JUMPDEST SWAP1 SWAP2 SSTORE POP POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0x4 SSTORE PUSH1 0x6 SLOAD PUSH2 0x6A9 SWAP1 PUSH7 0x38D7EA4C68000 SWAP1 PUSH2 0xDF0 JUMP JUMPDEST PUSH1 0x2 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x6BA SWAP2 SWAP1 PUSH2 0xE0F JUMP JUMPDEST SWAP1 SWAP2 SSTORE POP PUSH2 0x6CC SWAP1 POP PUSH1 0x6 PUSH1 0x0 PUSH2 0xCB3 JUMP JUMPDEST PUSH2 0x6D8 PUSH2 0x708 TIMESTAMP PUSH2 0xE0F JUMP JUMPDEST PUSH1 0x0 SSTORE POP POP POP POP JUMP JUMPDEST PUSH1 0x60 PUSH1 0x6 DUP1 SLOAD DUP1 PUSH1 0x20 MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD DUP1 ISZERO PUSH2 0x739 JUMPI PUSH1 0x20 MUL DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 MSTORE PUSH1 0x1 SWAP1 SWAP2 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x71B JUMPI JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x6 DUP2 DUP2 SLOAD DUP2 LT PUSH2 0x753 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP1 POP DUP2 JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0x7C9 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x16 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x43616C6C6572206973206E6F7420612077696E6E657200000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x487 JUMP JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 DUP1 DUP3 KECCAK256 DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE SWAP1 MLOAD SWAP1 SWAP2 DUP4 SWAP2 DUP4 ISZERO PUSH2 0x8FC MUL SWAP2 DUP5 SWAP2 SWAP1 DUP2 DUP2 DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x4C8 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST PUSH2 0x81D PUSH7 0x2386F26FC10000 CALLVALUE PUSH2 0xDC6 JUMP JUMPDEST ISZERO PUSH2 0x82E PUSH7 0x2386F26FC10000 PUSH2 0xB92 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 ADD PUSH2 0x83E SWAP2 SWAP1 PUSH2 0xE57 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE SWAP1 PUSH2 0x86B JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x487 SWAP2 SWAP1 PUSH2 0xEC3 JUMP JUMPDEST POP PUSH1 0x0 PUSH2 0x87F PUSH7 0x2386F26FC10000 CALLVALUE PUSH2 0xEF6 JUMP JUMPDEST SWAP1 POP PUSH2 0x889 PUSH2 0x948 JUMP JUMPDEST DUP2 GT ISZERO PUSH2 0x8D8 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1D PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E6F7420656E6F756768207469636B65747320617661696C61626C652E000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x487 JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x944 JUMPI PUSH1 0x6 DUP1 SLOAD PUSH1 0x1 DUP2 ADD DUP3 SSTORE PUSH1 0x0 SWAP2 SWAP1 SWAP2 MSTORE PUSH32 0xF652222313E28459528D920B65115C16C04F3EFC82AAEDC97BE59F3F377C0D3F ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND CALLER OR SWAP1 SSTORE DUP1 PUSH2 0x93C DUP2 PUSH2 0xF0A JUMP JUMPDEST SWAP2 POP POP PUSH2 0x8DB JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH1 0x0 SWAP1 PUSH2 0x959 SWAP1 PUSH1 0x64 PUSH2 0xD99 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 SLOAD TIMESTAMP LT ISZERO PUSH2 0x9B0 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1B PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x746865206C6F7474657279206E6F742065787069726564207965740000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x487 JUMP JUMPDEST PUSH1 0x0 JUMPDEST PUSH1 0x6 SLOAD DUP2 LT ISZERO PUSH2 0xA73 JUMPI PUSH1 0x0 PUSH1 0x6 DUP3 DUP2 SLOAD DUP2 LT PUSH2 0x9D2 JUMPI PUSH2 0x9D2 PUSH2 0xDDA JUMP JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 DUP3 KECCAK256 ADD SLOAD PUSH1 0x6 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP3 AND SWAP4 POP SWAP1 DUP5 SWAP1 DUP2 LT PUSH2 0x9FF JUMPI PUSH2 0x9FF PUSH2 0xDDA JUMP JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 DUP3 KECCAK256 ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP4 DUP5 AND OR SWAP1 SSTORE PUSH1 0x40 MLOAD SWAP2 DUP4 AND SWAP2 PUSH7 0x2386F26FC10000 SWAP1 DUP3 DUP2 DUP2 DUP2 DUP6 DUP9 DUP4 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0xA5E JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP DUP1 DUP1 PUSH2 0xA6B SWAP1 PUSH2 0xF0A JUMP JUMPDEST SWAP2 POP POP PUSH2 0x9B3 JUMP JUMPDEST POP PUSH2 0xA80 PUSH1 0x6 PUSH1 0x0 PUSH2 0xCB3 JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH1 0x0 SWAP1 PUSH2 0x959 SWAP1 PUSH7 0x2386F26FC10000 SWAP1 PUSH2 0xDF0 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0xAFF JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x22 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x43616C6C6572206973206E6F7420746865206C6F7474657279206F7065726174 PUSH1 0x44 DUP3 ADD MSTORE PUSH2 0x37B9 PUSH1 0xF1 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0x487 JUMP JUMPDEST PUSH1 0x6 SLOAD ISZERO PUSH2 0xB75 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x26 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x43616E6E6F742052657374617274204472617720617320447261772069732069 PUSH1 0x44 DUP3 ADD MSTORE PUSH32 0x6E20706C61790000000000000000000000000000000000000000000000000000 PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0x487 JUMP JUMPDEST PUSH2 0xB81 PUSH1 0x6 PUSH1 0x0 PUSH2 0xCB3 JUMP JUMPDEST PUSH2 0xB8D PUSH2 0x708 TIMESTAMP PUSH2 0xE0F JUMP JUMPDEST PUSH1 0x0 SSTORE JUMP JUMPDEST PUSH1 0x60 DUP2 PUSH1 0x0 SUB PUSH2 0xBB9 JUMPI POP POP PUSH1 0x40 DUP1 MLOAD DUP1 DUP3 ADD SWAP1 SWAP2 MSTORE PUSH1 0x1 DUP2 MSTORE PUSH1 0x3 PUSH1 0xFC SHL PUSH1 0x20 DUP3 ADD MSTORE SWAP1 JUMP JUMPDEST DUP2 PUSH1 0x0 JUMPDEST DUP2 ISZERO PUSH2 0xBE3 JUMPI DUP1 PUSH2 0xBCD DUP2 PUSH2 0xF0A JUMP JUMPDEST SWAP2 POP PUSH2 0xBDC SWAP1 POP PUSH1 0xA DUP4 PUSH2 0xEF6 JUMP JUMPDEST SWAP2 POP PUSH2 0xBBD JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0xBFE JUMPI PUSH2 0xBFE PUSH2 0xF23 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP1 DUP3 MSTORE DUP1 PUSH1 0x1F ADD PUSH1 0x1F NOT AND PUSH1 0x20 ADD DUP3 ADD PUSH1 0x40 MSTORE DUP1 ISZERO PUSH2 0xC28 JUMPI PUSH1 0x20 DUP3 ADD DUP2 DUP1 CALLDATASIZE DUP4 CALLDATACOPY ADD SWAP1 POP JUMPDEST POP SWAP1 POP JUMPDEST DUP5 ISZERO PUSH2 0xCAB JUMPI PUSH2 0xC3D PUSH1 0x1 DUP4 PUSH2 0xD99 JUMP JUMPDEST SWAP2 POP PUSH2 0xC4A PUSH1 0xA DUP7 PUSH2 0xDC6 JUMP JUMPDEST PUSH2 0xC55 SWAP1 PUSH1 0x30 PUSH2 0xE0F JUMP JUMPDEST PUSH1 0xF8 SHL DUP2 DUP4 DUP2 MLOAD DUP2 LT PUSH2 0xC6A JUMPI PUSH2 0xC6A PUSH2 0xDDA JUMP JUMPDEST PUSH1 0x20 ADD ADD SWAP1 PUSH31 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND SWAP1 DUP2 PUSH1 0x0 BYTE SWAP1 MSTORE8 POP PUSH2 0xCA4 PUSH1 0xA DUP7 PUSH2 0xEF6 JUMP JUMPDEST SWAP5 POP PUSH2 0xC2C JUMP JUMPDEST SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST POP DUP1 SLOAD PUSH1 0x0 DUP3 SSTORE SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 DUP2 ADD SWAP1 PUSH2 0xCD1 SWAP2 SWAP1 PUSH2 0xCD4 JUMP JUMPDEST POP JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0xCE9 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0xCD5 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE DUP3 MLOAD DUP3 DUP3 ADD DUP2 SWAP1 MSTORE PUSH1 0x0 SWAP2 SWAP1 DUP5 DUP3 ADD SWAP1 PUSH1 0x40 DUP6 ADD SWAP1 DUP5 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0xD2E JUMPI DUP4 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP4 MSTORE SWAP3 DUP5 ADD SWAP3 SWAP2 DUP5 ADD SWAP2 PUSH1 0x1 ADD PUSH2 0xD09 JUMP JUMPDEST POP SWAP1 SWAP7 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xD4C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xD65 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0xD7C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 DUP3 DUP3 LT ISZERO PUSH2 0xDAB JUMPI PUSH2 0xDAB PUSH2 0xD83 JUMP JUMPDEST POP SUB SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 DUP3 PUSH2 0xDD5 JUMPI PUSH2 0xDD5 PUSH2 0xDB0 JUMP JUMPDEST POP MOD SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x0 NOT DIV DUP4 GT DUP3 ISZERO ISZERO AND ISZERO PUSH2 0xE0A JUMPI PUSH2 0xE0A PUSH2 0xD83 JUMP JUMPDEST POP MUL SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 NOT DUP3 GT ISZERO PUSH2 0xE22 JUMPI PUSH2 0xE22 PUSH2 0xD83 JUMP JUMPDEST POP ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0xE42 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0xE2A JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH2 0xE51 JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH32 0x7468652076616C7565206D757374206265206D756C7469706C65206F66200000 DUP2 MSTORE PUSH1 0x0 DUP3 MLOAD PUSH2 0xE8F DUP2 PUSH1 0x1E DUP6 ADD PUSH1 0x20 DUP8 ADD PUSH2 0xE27 JUMP JUMPDEST PUSH32 0x2045746865720000000000000000000000000000000000000000000000000000 PUSH1 0x1E SWAP4 SWAP1 SWAP2 ADD SWAP3 DUP4 ADD MSTORE POP PUSH1 0x24 ADD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x20 DUP2 MSTORE PUSH1 0x0 DUP3 MLOAD DUP1 PUSH1 0x20 DUP5 ADD MSTORE PUSH2 0xEE2 DUP2 PUSH1 0x40 DUP6 ADD PUSH1 0x20 DUP8 ADD PUSH2 0xE27 JUMP JUMPDEST PUSH1 0x1F ADD PUSH1 0x1F NOT AND SWAP2 SWAP1 SWAP2 ADD PUSH1 0x40 ADD SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH2 0xF05 JUMPI PUSH2 0xF05 PUSH2 0xDB0 JUMP JUMPDEST POP DIV SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 DUP3 ADD PUSH2 0xF1C JUMPI PUSH2 0xF1C PUSH2 0xD83 JUMP JUMPDEST POP PUSH1 0x1 ADD SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xFB 0xEB 0x4D DUP3 0x1F SWAP9 0x5F SWAP13 0xD6 PUSH9 0xE990C7177AA76A87C7 MLOAD 0x27 0xA9 SWAP4 0xD4 0xB4 CALLDATACOPY ADD CODECOPY 0x26 DUP16 0xB3 SELFDESTRUCT PUSH5 0x736F6C6343 STOP ADDMOD 0xD STOP CALLER ",
      "sourceMap": "122:4486:1:-:0;;;642:1;601:42;;1345:108;;;;;;;;;-1:-1:-1;1369:15:1;:28;;-1:-1:-1;;;;;;1369:28:1;1387:10;1369:28;;;1420:26;395:10;1420:15;:26;:::i;:::-;1407:10;:39;122:4486;;14:225:2;54:3;85:1;81:6;78:1;75:13;72:136;;;130:10;125:3;121:20;118:1;111:31;165:4;162:1;155:15;193:4;190:1;183:15;72:136;-1:-1:-1;224:9:2;;14:225::o;:::-;122:4486:1;;;;;;"
    },
    "deployedBytecode": {
      "functionDebugData": {
        "@BuyTickets_149": {
          "entryPoint": 2060,
          "id": 149,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@CurrentWinningReward_423": {
          "entryPoint": 2690,
          "id": 423,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@DrawWinnerTicket_241": {
          "entryPoint": 1229,
          "id": 241,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@IsWinner_412": {
          "entryPoint": null,
          "id": 412,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@RefundAll_371": {
          "entryPoint": 2398,
          "id": 371,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@RemainingTickets_434": {
          "entryPoint": 2376,
          "id": 434,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@WithdrawCommission_399": {
          "entryPoint": 1062,
          "id": 399,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@WithdrawWinnings_319": {
          "entryPoint": 1901,
          "id": 319,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@checkWinningsAmount_287": {
          "entryPoint": null,
          "id": 287,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@duration_14": {
          "entryPoint": null,
          "id": 14,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@expiration_16": {
          "entryPoint": null,
          "id": 16,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@getTickets_80": {
          "entryPoint": 1761,
          "id": 80,
          "parameterSlots": 0,
          "returnSlots": 1
        },
        "@getWinningsForAddress_92": {
          "entryPoint": null,
          "id": 92,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@lastWinnerAmount_25": {
          "entryPoint": null,
          "id": 25,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@lastWinner_23": {
          "entryPoint": null,
          "id": 23,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@lotteryOperator_18": {
          "entryPoint": null,
          "id": 18,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@maxTickets_8": {
          "entryPoint": null,
          "id": 8,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@operatorTotalCommission_21": {
          "entryPoint": null,
          "id": 21,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@restartDraw_265": {
          "entryPoint": 2714,
          "id": 265,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@ticketCommission_11": {
          "entryPoint": null,
          "id": 11,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@ticketPrice_5": {
          "entryPoint": null,
          "id": 5,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@tickets_32": {
          "entryPoint": 1859,
          "id": 32,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "@toString_523": {
          "entryPoint": 2962,
          "id": 523,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "@winnings_29": {
          "entryPoint": null,
          "id": 29,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "abi_decode_tuple_t_address": {
          "entryPoint": 3411,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_decode_tuple_t_uint256": {
          "entryPoint": 3386,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_packed_t_stringliteral_3cf252d718a814aceda19feb7511621f9cead4349daed57106896961018f0582_t_string_memory_ptr_t_stringliteral_addc182a513da9c4a04fe36f89b428528cea5fa9b24e0a885a5f284e0cfe451a__to_t_bytes30_t_string_memory_ptr_t_bytes6__nonPadded_inplace_fromStack_reversed": {
          "entryPoint": 3671,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_packed_t_uint256_t_bytes32__to_t_uint256_t_bytes32__nonPadded_inplace_fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_address__to_t_address__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_array$_t_address_$dyn_memory_ptr__to_t_array$_t_address_$dyn_memory_ptr__fromStack_reversed": {
          "entryPoint": 3309,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": 3779,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_stringliteral_0b7a5fb8a9efa5c0910fd86ab4c6c07a2ff1e3f0c9e970abc99c23eb24e1823a__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_stringliteral_2f407f41da031683eb6f27d900002adb30c9cad98d9e538171c2e77e5cab86a0__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_stringliteral_7c025869fc52da732ddafd9834c0b51ab79dab8cf32fb9b59b9f6d7ebe497f4f__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_stringliteral_9dd87e400d2508ad2a9dd23b947542259ca8cc80e6bf2945b2350434f2b02dec__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_stringliteral_cce6dd106c3a9827b08779915695170aa8591588f4deebc7e6491b26421b8ff8__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_stringliteral_d06a140eb73954d7c52524ec109e581f5d0d5dc9e21e3732b7ad580fb4f89e29__to_t_string_memory_ptr__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed": {
          "entryPoint": null,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "checked_add_t_uint256": {
          "entryPoint": 3599,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "checked_div_t_uint256": {
          "entryPoint": 3830,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "checked_mul_t_uint256": {
          "entryPoint": 3568,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "checked_sub_t_uint256": {
          "entryPoint": 3481,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "copy_memory_to_memory": {
          "entryPoint": 3623,
          "id": null,
          "parameterSlots": 3,
          "returnSlots": 0
        },
        "increment_t_uint256": {
          "entryPoint": 3850,
          "id": null,
          "parameterSlots": 1,
          "returnSlots": 1
        },
        "mod_t_uint256": {
          "entryPoint": 3526,
          "id": null,
          "parameterSlots": 2,
          "returnSlots": 1
        },
        "panic_error_0x11": {
          "entryPoint": 3459,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "panic_error_0x12": {
          "entryPoint": 3504,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "panic_error_0x32": {
          "entryPoint": 3546,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        },
        "panic_error_0x41": {
          "entryPoint": 3875,
          "id": null,
          "parameterSlots": 0,
          "returnSlots": 0
        }
      },
      "generatedSources": [
        {
          "ast": {
            "nodeType": "YulBlock",
            "src": "0:6872:2",
            "statements": [
              {
                "nodeType": "YulBlock",
                "src": "6:3:2",
                "statements": []
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "115:76:2",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "125:26:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "137:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "148:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "133:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "133:18:2"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "125:4:2"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "167:9:2"
                          },
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "178:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "160:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "160:25:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "160:25:2"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "84:9:2",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "95:6:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "106:4:2",
                    "type": ""
                  }
                ],
                "src": "14:177:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "347:530:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "357:12:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "367:2:2",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "_1",
                          "nodeType": "YulTypedName",
                          "src": "361:2:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "378:32:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "396:9:2"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "407:2:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "392:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "392:18:2"
                      },
                      "variables": [
                        {
                          "name": "tail_1",
                          "nodeType": "YulTypedName",
                          "src": "382:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "426:9:2"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "437:2:2"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "419:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "419:21:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "419:21:2"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "449:17:2",
                      "value": {
                        "name": "tail_1",
                        "nodeType": "YulIdentifier",
                        "src": "460:6:2"
                      },
                      "variables": [
                        {
                          "name": "pos",
                          "nodeType": "YulTypedName",
                          "src": "453:3:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "475:27:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "495:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "489:5:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "489:13:2"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nodeType": "YulTypedName",
                          "src": "479:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "tail_1",
                            "nodeType": "YulIdentifier",
                            "src": "518:6:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "526:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "511:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "511:22:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "511:22:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "542:25:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "553:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "564:2:2",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "549:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "549:18:2"
                      },
                      "variableNames": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "542:3:2"
                        }
                      ]
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "576:29:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "594:6:2"
                          },
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "602:2:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "590:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "590:15:2"
                      },
                      "variables": [
                        {
                          "name": "srcPtr",
                          "nodeType": "YulTypedName",
                          "src": "580:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "614:10:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "623:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "i",
                          "nodeType": "YulTypedName",
                          "src": "618:1:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "682:169:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "pos",
                                  "nodeType": "YulIdentifier",
                                  "src": "703:3:2"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "srcPtr",
                                          "nodeType": "YulIdentifier",
                                          "src": "718:6:2"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mload",
                                        "nodeType": "YulIdentifier",
                                        "src": "712:5:2"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "712:13:2"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "727:42:2",
                                      "type": "",
                                      "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "and",
                                    "nodeType": "YulIdentifier",
                                    "src": "708:3:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "708:62:2"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nodeType": "YulIdentifier",
                                "src": "696:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "696:75:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "696:75:2"
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "784:19:2",
                            "value": {
                              "arguments": [
                                {
                                  "name": "pos",
                                  "nodeType": "YulIdentifier",
                                  "src": "795:3:2"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "800:2:2"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "791:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "791:12:2"
                            },
                            "variableNames": [
                              {
                                "name": "pos",
                                "nodeType": "YulIdentifier",
                                "src": "784:3:2"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "816:25:2",
                            "value": {
                              "arguments": [
                                {
                                  "name": "srcPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "830:6:2"
                                },
                                {
                                  "name": "_1",
                                  "nodeType": "YulIdentifier",
                                  "src": "838:2:2"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "826:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "826:15:2"
                            },
                            "variableNames": [
                              {
                                "name": "srcPtr",
                                "nodeType": "YulIdentifier",
                                "src": "816:6:2"
                              }
                            ]
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "644:1:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "647:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "641:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "641:13:2"
                      },
                      "nodeType": "YulForLoop",
                      "post": {
                        "nodeType": "YulBlock",
                        "src": "655:18:2",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "657:14:2",
                            "value": {
                              "arguments": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "666:1:2"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "669:1:2",
                                  "type": "",
                                  "value": "1"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "662:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "662:9:2"
                            },
                            "variableNames": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "657:1:2"
                              }
                            ]
                          }
                        ]
                      },
                      "pre": {
                        "nodeType": "YulBlock",
                        "src": "637:3:2",
                        "statements": []
                      },
                      "src": "633:218:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "860:11:2",
                      "value": {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "868:3:2"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "860:4:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_array$_t_address_$dyn_memory_ptr__to_t_array$_t_address_$dyn_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "316:9:2",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "327:6:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "338:4:2",
                    "type": ""
                  }
                ],
                "src": "196:681:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "952:110:2",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "998:16:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1007:1:2",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1010:1:2",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "1000:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1000:12:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1000:12:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nodeType": "YulIdentifier",
                                "src": "973:7:2"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "982:9:2"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "969:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "969:23:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "994:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "965:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "965:32:2"
                      },
                      "nodeType": "YulIf",
                      "src": "962:52:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1023:33:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1046:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "1033:12:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1033:23:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1023:6:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "918:9:2",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "929:7:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "941:6:2",
                    "type": ""
                  }
                ],
                "src": "882:180:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1168:125:2",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "1178:26:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1190:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1201:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1186:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1186:18:2"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1178:4:2"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1220:9:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "1235:6:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1243:42:2",
                                "type": "",
                                "value": "0xffffffffffffffffffffffffffffffffffffffff"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "1231:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1231:55:2"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1213:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1213:74:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1213:74:2"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1137:9:2",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "1148:6:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "1159:4:2",
                    "type": ""
                  }
                ],
                "src": "1067:226:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1393:92:2",
                  "statements": [
                    {
                      "nodeType": "YulAssignment",
                      "src": "1403:26:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1415:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1426:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1411:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1411:18:2"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "1403:4:2"
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1445:9:2"
                          },
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "value0",
                                    "nodeType": "YulIdentifier",
                                    "src": "1470:6:2"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nodeType": "YulIdentifier",
                                  "src": "1463:6:2"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1463:14:2"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "1456:6:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1456:22:2"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1438:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1438:41:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1438:41:2"
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1362:9:2",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "1373:6:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "1384:4:2",
                    "type": ""
                  }
                ],
                "src": "1298:187:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1560:239:2",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1606:16:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1615:1:2",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1618:1:2",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "1608:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1608:12:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1608:12:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "dataEnd",
                                "nodeType": "YulIdentifier",
                                "src": "1581:7:2"
                              },
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1590:9:2"
                              }
                            ],
                            "functionName": {
                              "name": "sub",
                              "nodeType": "YulIdentifier",
                              "src": "1577:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1577:23:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1602:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "1573:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1573:32:2"
                      },
                      "nodeType": "YulIf",
                      "src": "1570:52:2"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1631:36:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1657:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "1644:12:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1644:23:2"
                      },
                      "variables": [
                        {
                          "name": "value",
                          "nodeType": "YulTypedName",
                          "src": "1635:5:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "1753:16:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1762:1:2",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1765:1:2",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "1755:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1755:12:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "1755:12:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1689:5:2"
                              },
                              {
                                "arguments": [
                                  {
                                    "name": "value",
                                    "nodeType": "YulIdentifier",
                                    "src": "1700:5:2"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1707:42:2",
                                    "type": "",
                                    "value": "0xffffffffffffffffffffffffffffffffffffffff"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "1696:3:2"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1696:54:2"
                              }
                            ],
                            "functionName": {
                              "name": "eq",
                              "nodeType": "YulIdentifier",
                              "src": "1686:2:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1686:65:2"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "1679:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1679:73:2"
                      },
                      "nodeType": "YulIf",
                      "src": "1676:93:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1778:15:2",
                      "value": {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1788:5:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1778:6:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_decode_tuple_t_address",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1526:9:2",
                    "type": ""
                  },
                  {
                    "name": "dataEnd",
                    "nodeType": "YulTypedName",
                    "src": "1537:7:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "1549:6:2",
                    "type": ""
                  }
                ],
                "src": "1490:309:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "1978:224:2",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1995:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2006:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "1988:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1988:21:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "1988:21:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2029:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2040:2:2",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2025:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2025:18:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2045:2:2",
                            "type": "",
                            "value": "34"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2018:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2018:30:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2018:30:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2068:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2079:2:2",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2064:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2064:18:2"
                          },
                          {
                            "hexValue": "43616c6c6572206973206e6f7420746865206c6f7474657279206f7065726174",
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "2084:34:2",
                            "type": "",
                            "value": "Caller is not the lottery operat"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2057:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2057:62:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2057:62:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2139:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2150:2:2",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2135:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2135:18:2"
                          },
                          {
                            "hexValue": "6f72",
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "2155:4:2",
                            "type": "",
                            "value": "or"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2128:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2128:32:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2128:32:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2169:27:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2181:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2192:3:2",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2177:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2177:19:2"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "2169:4:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_0b7a5fb8a9efa5c0910fd86ab4c6c07a2ff1e3f0c9e970abc99c23eb24e1823a__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "1955:9:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "1969:4:2",
                    "type": ""
                  }
                ],
                "src": "1804:398:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2381:175:2",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2398:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2409:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2391:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2391:21:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2391:21:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2432:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2443:2:2",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2428:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2428:18:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2448:2:2",
                            "type": "",
                            "value": "25"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2421:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2421:30:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2421:30:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2471:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2482:2:2",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2467:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2467:18:2"
                          },
                          {
                            "hexValue": "4e6f207469636b657473207765726520707572636861736564",
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "2487:27:2",
                            "type": "",
                            "value": "No tickets were purchased"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2460:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2460:55:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2460:55:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2524:26:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2536:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2547:2:2",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2532:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2532:18:2"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "2524:4:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_d06a140eb73954d7c52524ec109e581f5d0d5dc9e21e3732b7ad580fb4f89e29__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "2358:9:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "2372:4:2",
                    "type": ""
                  }
                ],
                "src": "2207:349:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2593:95:2",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2610:1:2",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2617:3:2",
                                "type": "",
                                "value": "224"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2622:10:2",
                                "type": "",
                                "value": "0x4e487b71"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nodeType": "YulIdentifier",
                              "src": "2613:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2613:20:2"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2603:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2603:31:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2603:31:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2650:1:2",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2653:4:2",
                            "type": "",
                            "value": "0x11"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2643:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2643:15:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2643:15:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2674:1:2",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2677:4:2",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nodeType": "YulIdentifier",
                          "src": "2667:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2667:15:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2667:15:2"
                    }
                  ]
                },
                "name": "panic_error_0x11",
                "nodeType": "YulFunctionDefinition",
                "src": "2561:127:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2742:76:2",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2764:22:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nodeType": "YulIdentifier",
                                "src": "2766:16:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2766:18:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2766:18:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "2758:1:2"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "2761:1:2"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "2755:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2755:8:2"
                      },
                      "nodeType": "YulIf",
                      "src": "2752:34:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2795:17:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "2807:1:2"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "2810:1:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2803:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2803:9:2"
                      },
                      "variableNames": [
                        {
                          "name": "diff",
                          "nodeType": "YulIdentifier",
                          "src": "2795:4:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "checked_sub_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "x",
                    "nodeType": "YulTypedName",
                    "src": "2724:1:2",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nodeType": "YulTypedName",
                    "src": "2727:1:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "diff",
                    "nodeType": "YulTypedName",
                    "src": "2733:4:2",
                    "type": ""
                  }
                ],
                "src": "2693:125:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "2970:100:2",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "2987:3:2"
                          },
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "2992:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "2980:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2980:19:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "2980:19:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "pos",
                                "nodeType": "YulIdentifier",
                                "src": "3019:3:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3024:2:2",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3015:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3015:12:2"
                          },
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "3029:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3008:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3008:28:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3008:28:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3045:19:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "3056:3:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3061:2:2",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3052:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3052:12:2"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "3045:3:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_packed_t_uint256_t_bytes32__to_t_uint256_t_bytes32__nonPadded_inplace_fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nodeType": "YulTypedName",
                    "src": "2938:3:2",
                    "type": ""
                  },
                  {
                    "name": "value1",
                    "nodeType": "YulTypedName",
                    "src": "2943:6:2",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "2951:6:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nodeType": "YulTypedName",
                    "src": "2962:3:2",
                    "type": ""
                  }
                ],
                "src": "2823:247:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3107:95:2",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3124:1:2",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3131:3:2",
                                "type": "",
                                "value": "224"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3136:10:2",
                                "type": "",
                                "value": "0x4e487b71"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nodeType": "YulIdentifier",
                              "src": "3127:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3127:20:2"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3117:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3117:31:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3117:31:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3164:1:2",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3167:4:2",
                            "type": "",
                            "value": "0x12"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3157:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3157:15:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3157:15:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3188:1:2",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3191:4:2",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nodeType": "YulIdentifier",
                          "src": "3181:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3181:15:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3181:15:2"
                    }
                  ]
                },
                "name": "panic_error_0x12",
                "nodeType": "YulFunctionDefinition",
                "src": "3075:127:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3245:74:2",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3268:22:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x12",
                                "nodeType": "YulIdentifier",
                                "src": "3270:16:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3270:18:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "3270:18:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "3265:1:2"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "3258:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3258:9:2"
                      },
                      "nodeType": "YulIf",
                      "src": "3255:35:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3299:14:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "3308:1:2"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "3311:1:2"
                          }
                        ],
                        "functionName": {
                          "name": "mod",
                          "nodeType": "YulIdentifier",
                          "src": "3304:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3304:9:2"
                      },
                      "variableNames": [
                        {
                          "name": "r",
                          "nodeType": "YulIdentifier",
                          "src": "3299:1:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "mod_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "x",
                    "nodeType": "YulTypedName",
                    "src": "3230:1:2",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nodeType": "YulTypedName",
                    "src": "3233:1:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "r",
                    "nodeType": "YulTypedName",
                    "src": "3239:1:2",
                    "type": ""
                  }
                ],
                "src": "3207:112:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3356:95:2",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3373:1:2",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3380:3:2",
                                "type": "",
                                "value": "224"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3385:10:2",
                                "type": "",
                                "value": "0x4e487b71"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nodeType": "YulIdentifier",
                              "src": "3376:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3376:20:2"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3366:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3366:31:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3366:31:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3413:1:2",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3416:4:2",
                            "type": "",
                            "value": "0x32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3406:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3406:15:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3406:15:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3437:1:2",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3440:4:2",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nodeType": "YulIdentifier",
                          "src": "3430:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3430:15:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3430:15:2"
                    }
                  ]
                },
                "name": "panic_error_0x32",
                "nodeType": "YulFunctionDefinition",
                "src": "3324:127:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3508:116:2",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3567:22:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nodeType": "YulIdentifier",
                                "src": "3569:16:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3569:18:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "3569:18:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "x",
                                    "nodeType": "YulIdentifier",
                                    "src": "3539:1:2"
                                  }
                                ],
                                "functionName": {
                                  "name": "iszero",
                                  "nodeType": "YulIdentifier",
                                  "src": "3532:6:2"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3532:9:2"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "3525:6:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3525:17:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "y",
                                "nodeType": "YulIdentifier",
                                "src": "3547:1:2"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "3558:1:2",
                                        "type": "",
                                        "value": "0"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "3554:3:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "3554:6:2"
                                  },
                                  {
                                    "name": "x",
                                    "nodeType": "YulIdentifier",
                                    "src": "3562:1:2"
                                  }
                                ],
                                "functionName": {
                                  "name": "div",
                                  "nodeType": "YulIdentifier",
                                  "src": "3550:3:2"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3550:14:2"
                              }
                            ],
                            "functionName": {
                              "name": "gt",
                              "nodeType": "YulIdentifier",
                              "src": "3544:2:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3544:21:2"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "3521:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3521:45:2"
                      },
                      "nodeType": "YulIf",
                      "src": "3518:71:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3598:20:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "3613:1:2"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "3616:1:2"
                          }
                        ],
                        "functionName": {
                          "name": "mul",
                          "nodeType": "YulIdentifier",
                          "src": "3609:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3609:9:2"
                      },
                      "variableNames": [
                        {
                          "name": "product",
                          "nodeType": "YulIdentifier",
                          "src": "3598:7:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "checked_mul_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "x",
                    "nodeType": "YulTypedName",
                    "src": "3487:1:2",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nodeType": "YulTypedName",
                    "src": "3490:1:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "product",
                    "nodeType": "YulTypedName",
                    "src": "3496:7:2",
                    "type": ""
                  }
                ],
                "src": "3456:168:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3677:80:2",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3704:22:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nodeType": "YulIdentifier",
                                "src": "3706:16:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3706:18:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "3706:18:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "3693:1:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "y",
                                "nodeType": "YulIdentifier",
                                "src": "3700:1:2"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "3696:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3696:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "3690:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3690:13:2"
                      },
                      "nodeType": "YulIf",
                      "src": "3687:39:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3735:16:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "3746:1:2"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "3749:1:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3742:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3742:9:2"
                      },
                      "variableNames": [
                        {
                          "name": "sum",
                          "nodeType": "YulIdentifier",
                          "src": "3735:3:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "checked_add_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "x",
                    "nodeType": "YulTypedName",
                    "src": "3660:1:2",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nodeType": "YulTypedName",
                    "src": "3663:1:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "sum",
                    "nodeType": "YulTypedName",
                    "src": "3669:3:2",
                    "type": ""
                  }
                ],
                "src": "3629:128:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "3936:172:2",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3953:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3964:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3946:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3946:21:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3946:21:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3987:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3998:2:2",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3983:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3983:18:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4003:2:2",
                            "type": "",
                            "value": "22"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "3976:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3976:30:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "3976:30:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4026:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4037:2:2",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4022:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4022:18:2"
                          },
                          {
                            "hexValue": "43616c6c6572206973206e6f7420612077696e6e6572",
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "4042:24:2",
                            "type": "",
                            "value": "Caller is not a winner"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "4015:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4015:52:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "4015:52:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4076:26:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4088:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4099:2:2",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4084:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4084:18:2"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "4076:4:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_cce6dd106c3a9827b08779915695170aa8591588f4deebc7e6491b26421b8ff8__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "3913:9:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "3927:4:2",
                    "type": ""
                  }
                ],
                "src": "3762:346:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "4166:205:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4176:10:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4185:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "i",
                          "nodeType": "YulTypedName",
                          "src": "4180:1:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "4245:63:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "dst",
                                      "nodeType": "YulIdentifier",
                                      "src": "4270:3:2"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "4275:1:2"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "4266:3:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4266:11:2"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "src",
                                          "nodeType": "YulIdentifier",
                                          "src": "4289:3:2"
                                        },
                                        {
                                          "name": "i",
                                          "nodeType": "YulIdentifier",
                                          "src": "4294:1:2"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "add",
                                        "nodeType": "YulIdentifier",
                                        "src": "4285:3:2"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4285:11:2"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mload",
                                    "nodeType": "YulIdentifier",
                                    "src": "4279:5:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4279:18:2"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nodeType": "YulIdentifier",
                                "src": "4259:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4259:39:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "4259:39:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "4206:1:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "4209:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "4203:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4203:13:2"
                      },
                      "nodeType": "YulForLoop",
                      "post": {
                        "nodeType": "YulBlock",
                        "src": "4217:19:2",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "4219:15:2",
                            "value": {
                              "arguments": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "4228:1:2"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4231:2:2",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4224:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4224:10:2"
                            },
                            "variableNames": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "4219:1:2"
                              }
                            ]
                          }
                        ]
                      },
                      "pre": {
                        "nodeType": "YulBlock",
                        "src": "4199:3:2",
                        "statements": []
                      },
                      "src": "4195:113:2"
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "4334:31:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "dst",
                                      "nodeType": "YulIdentifier",
                                      "src": "4347:3:2"
                                    },
                                    {
                                      "name": "length",
                                      "nodeType": "YulIdentifier",
                                      "src": "4352:6:2"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "4343:3:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4343:16:2"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4361:1:2",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "mstore",
                                "nodeType": "YulIdentifier",
                                "src": "4336:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4336:27:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "4336:27:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "4323:1:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "4326:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "4320:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4320:13:2"
                      },
                      "nodeType": "YulIf",
                      "src": "4317:48:2"
                    }
                  ]
                },
                "name": "copy_memory_to_memory",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "src",
                    "nodeType": "YulTypedName",
                    "src": "4144:3:2",
                    "type": ""
                  },
                  {
                    "name": "dst",
                    "nodeType": "YulTypedName",
                    "src": "4149:3:2",
                    "type": ""
                  },
                  {
                    "name": "length",
                    "nodeType": "YulTypedName",
                    "src": "4154:6:2",
                    "type": ""
                  }
                ],
                "src": "4113:258:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "4696:268:2",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "4713:3:2"
                          },
                          {
                            "hexValue": "7468652076616c7565206d757374206265206d756c7469706c65206f6620",
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "4718:32:2",
                            "type": "",
                            "value": "the value must be multiple of "
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "4706:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4706:45:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "4706:45:2"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4760:27:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "4780:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "4774:5:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4774:13:2"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nodeType": "YulTypedName",
                          "src": "4764:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "4822:6:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4830:4:2",
                                "type": "",
                                "value": "0x20"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4818:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4818:17:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "pos",
                                "nodeType": "YulIdentifier",
                                "src": "4841:3:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4846:2:2",
                                "type": "",
                                "value": "30"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4837:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4837:12:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "4851:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "copy_memory_to_memory",
                          "nodeType": "YulIdentifier",
                          "src": "4796:21:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4796:62:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "4796:62:2"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4867:26:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "4881:3:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "4886:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4877:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4877:16:2"
                      },
                      "variables": [
                        {
                          "name": "_1",
                          "nodeType": "YulTypedName",
                          "src": "4871:2:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "_1",
                                "nodeType": "YulIdentifier",
                                "src": "4913:2:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4917:2:2",
                                "type": "",
                                "value": "30"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4909:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4909:11:2"
                          },
                          {
                            "hexValue": "204574686572",
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "4922:8:2",
                            "type": "",
                            "value": " Ether"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "4902:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4902:29:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "4902:29:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4940:18:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "_1",
                            "nodeType": "YulIdentifier",
                            "src": "4951:2:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4955:2:2",
                            "type": "",
                            "value": "36"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4947:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4947:11:2"
                      },
                      "variableNames": [
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "4940:3:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_packed_t_stringliteral_3cf252d718a814aceda19feb7511621f9cead4349daed57106896961018f0582_t_string_memory_ptr_t_stringliteral_addc182a513da9c4a04fe36f89b428528cea5fa9b24e0a885a5f284e0cfe451a__to_t_bytes30_t_string_memory_ptr_t_bytes6__nonPadded_inplace_fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "pos",
                    "nodeType": "YulTypedName",
                    "src": "4672:3:2",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "4677:6:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "end",
                    "nodeType": "YulTypedName",
                    "src": "4688:3:2",
                    "type": ""
                  }
                ],
                "src": "4376:588:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "5090:262:2",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5107:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5118:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "5100:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5100:21:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "5100:21:2"
                    },
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5130:27:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "5150:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "mload",
                          "nodeType": "YulIdentifier",
                          "src": "5144:5:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5144:13:2"
                      },
                      "variables": [
                        {
                          "name": "length",
                          "nodeType": "YulTypedName",
                          "src": "5134:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5177:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5188:2:2",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5173:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5173:18:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "5193:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "5166:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5166:34:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "5166:34:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "5235:6:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5243:2:2",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5231:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5231:15:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5252:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5263:2:2",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5248:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5248:18:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "5268:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "copy_memory_to_memory",
                          "nodeType": "YulIdentifier",
                          "src": "5209:21:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5209:66:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "5209:66:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5284:62:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5300:9:2"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "length",
                                        "nodeType": "YulIdentifier",
                                        "src": "5319:6:2"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "5327:2:2",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "5315:3:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5315:15:2"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "5336:2:2",
                                        "type": "",
                                        "value": "31"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "not",
                                      "nodeType": "YulIdentifier",
                                      "src": "5332:3:2"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5332:7:2"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "5311:3:2"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5311:29:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5296:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5296:45:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5343:2:2",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5292:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5292:54:2"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "5284:4:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "5059:9:2",
                    "type": ""
                  },
                  {
                    "name": "value0",
                    "nodeType": "YulTypedName",
                    "src": "5070:6:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "5081:4:2",
                    "type": ""
                  }
                ],
                "src": "4969:383:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "5403:74:2",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "5426:22:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x12",
                                "nodeType": "YulIdentifier",
                                "src": "5428:16:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5428:18:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "5428:18:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "5423:1:2"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "5416:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5416:9:2"
                      },
                      "nodeType": "YulIf",
                      "src": "5413:35:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5457:14:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "5466:1:2"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "5469:1:2"
                          }
                        ],
                        "functionName": {
                          "name": "div",
                          "nodeType": "YulIdentifier",
                          "src": "5462:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5462:9:2"
                      },
                      "variableNames": [
                        {
                          "name": "r",
                          "nodeType": "YulIdentifier",
                          "src": "5457:1:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "checked_div_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "x",
                    "nodeType": "YulTypedName",
                    "src": "5388:1:2",
                    "type": ""
                  },
                  {
                    "name": "y",
                    "nodeType": "YulTypedName",
                    "src": "5391:1:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "r",
                    "nodeType": "YulTypedName",
                    "src": "5397:1:2",
                    "type": ""
                  }
                ],
                "src": "5357:120:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "5656:179:2",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5673:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5684:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "5666:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5666:21:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "5666:21:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5707:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5718:2:2",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5703:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5703:18:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5723:2:2",
                            "type": "",
                            "value": "29"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "5696:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5696:30:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "5696:30:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5746:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5757:2:2",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5742:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5742:18:2"
                          },
                          {
                            "hexValue": "4e6f7420656e6f756768207469636b65747320617661696c61626c652e",
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "5762:31:2",
                            "type": "",
                            "value": "Not enough tickets available."
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "5735:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5735:59:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "5735:59:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5803:26:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5815:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5826:2:2",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5811:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5811:18:2"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "5803:4:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_9dd87e400d2508ad2a9dd23b947542259ca8cc80e6bf2945b2350434f2b02dec__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "5633:9:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "5647:4:2",
                    "type": ""
                  }
                ],
                "src": "5482:353:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "5887:88:2",
                  "statements": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "5918:22:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "panic_error_0x11",
                                "nodeType": "YulIdentifier",
                                "src": "5920:16:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5920:18:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "5920:18:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5903:5:2"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5914:1:2",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "5910:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5910:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "5900:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5900:17:2"
                      },
                      "nodeType": "YulIf",
                      "src": "5897:43:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5949:20:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5960:5:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5967:1:2",
                            "type": "",
                            "value": "1"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5956:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5956:13:2"
                      },
                      "variableNames": [
                        {
                          "name": "ret",
                          "nodeType": "YulIdentifier",
                          "src": "5949:3:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "increment_t_uint256",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "value",
                    "nodeType": "YulTypedName",
                    "src": "5869:5:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "ret",
                    "nodeType": "YulTypedName",
                    "src": "5879:3:2",
                    "type": ""
                  }
                ],
                "src": "5840:135:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "6154:177:2",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6171:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6182:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "6164:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6164:21:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "6164:21:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6205:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6216:2:2",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6201:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6201:18:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6221:2:2",
                            "type": "",
                            "value": "27"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "6194:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6194:30:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "6194:30:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6244:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6255:2:2",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6240:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6240:18:2"
                          },
                          {
                            "hexValue": "746865206c6f7474657279206e6f74206578706972656420796574",
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "6260:29:2",
                            "type": "",
                            "value": "the lottery not expired yet"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "6233:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6233:57:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "6233:57:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6299:26:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6311:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6322:2:2",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6307:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6307:18:2"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "6299:4:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_2f407f41da031683eb6f27d900002adb30c9cad98d9e538171c2e77e5cab86a0__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "6131:9:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "6145:4:2",
                    "type": ""
                  }
                ],
                "src": "5980:351:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "6510:228:2",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6527:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6538:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "6520:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6520:21:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "6520:21:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6561:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6572:2:2",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6557:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6557:18:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6577:2:2",
                            "type": "",
                            "value": "38"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "6550:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6550:30:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "6550:30:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6600:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6611:2:2",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6596:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6596:18:2"
                          },
                          {
                            "hexValue": "43616e6e6f742052657374617274204472617720617320447261772069732069",
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "6616:34:2",
                            "type": "",
                            "value": "Cannot Restart Draw as Draw is i"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "6589:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6589:62:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "6589:62:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6671:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6682:2:2",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6667:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6667:18:2"
                          },
                          {
                            "hexValue": "6e20706c6179",
                            "kind": "string",
                            "nodeType": "YulLiteral",
                            "src": "6687:8:2",
                            "type": "",
                            "value": "n play"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "6660:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6660:36:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "6660:36:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6705:27:2",
                      "value": {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6717:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6728:3:2",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "6713:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6713:19:2"
                      },
                      "variableNames": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "6705:4:2"
                        }
                      ]
                    }
                  ]
                },
                "name": "abi_encode_tuple_t_stringliteral_7c025869fc52da732ddafd9834c0b51ab79dab8cf32fb9b59b9f6d7ebe497f4f__to_t_string_memory_ptr__fromStack_reversed",
                "nodeType": "YulFunctionDefinition",
                "parameters": [
                  {
                    "name": "headStart",
                    "nodeType": "YulTypedName",
                    "src": "6487:9:2",
                    "type": ""
                  }
                ],
                "returnVariables": [
                  {
                    "name": "tail",
                    "nodeType": "YulTypedName",
                    "src": "6501:4:2",
                    "type": ""
                  }
                ],
                "src": "6336:402:2"
              },
              {
                "body": {
                  "nodeType": "YulBlock",
                  "src": "6775:95:2",
                  "statements": [
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6792:1:2",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6799:3:2",
                                "type": "",
                                "value": "224"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6804:10:2",
                                "type": "",
                                "value": "0x4e487b71"
                              }
                            ],
                            "functionName": {
                              "name": "shl",
                              "nodeType": "YulIdentifier",
                              "src": "6795:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6795:20:2"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "6785:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6785:31:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "6785:31:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6832:1:2",
                            "type": "",
                            "value": "4"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6835:4:2",
                            "type": "",
                            "value": "0x41"
                          }
                        ],
                        "functionName": {
                          "name": "mstore",
                          "nodeType": "YulIdentifier",
                          "src": "6825:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6825:15:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "6825:15:2"
                    },
                    {
                      "expression": {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6856:1:2",
                            "type": "",
                            "value": "0"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6859:4:2",
                            "type": "",
                            "value": "0x24"
                          }
                        ],
                        "functionName": {
                          "name": "revert",
                          "nodeType": "YulIdentifier",
                          "src": "6849:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6849:15:2"
                      },
                      "nodeType": "YulExpressionStatement",
                      "src": "6849:15:2"
                    }
                  ]
                },
                "name": "panic_error_0x41",
                "nodeType": "YulFunctionDefinition",
                "src": "6743:127:2"
              }
            ]
          },
          "contents": "{\n    { }\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, value0)\n    }\n    function abi_encode_tuple_t_array$_t_address_$dyn_memory_ptr__to_t_array$_t_address_$dyn_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        let _1 := 32\n        let tail_1 := add(headStart, _1)\n        mstore(headStart, _1)\n        let pos := tail_1\n        let length := mload(value0)\n        mstore(tail_1, length)\n        pos := add(headStart, 64)\n        let srcPtr := add(value0, _1)\n        let i := 0\n        for { } lt(i, length) { i := add(i, 1) }\n        {\n            mstore(pos, and(mload(srcPtr), 0xffffffffffffffffffffffffffffffffffffffff))\n            pos := add(pos, _1)\n            srcPtr := add(srcPtr, _1)\n        }\n        tail := pos\n    }\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        value0 := calldataload(headStart)\n    }\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, and(value0, 0xffffffffffffffffffffffffffffffffffffffff))\n    }\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart, value0) -> tail\n    {\n        tail := add(headStart, 32)\n        mstore(headStart, iszero(iszero(value0)))\n    }\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0\n    {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n        let value := calldataload(headStart)\n        if iszero(eq(value, and(value, 0xffffffffffffffffffffffffffffffffffffffff))) { revert(0, 0) }\n        value0 := value\n    }\n    function abi_encode_tuple_t_stringliteral_0b7a5fb8a9efa5c0910fd86ab4c6c07a2ff1e3f0c9e970abc99c23eb24e1823a__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 34)\n        mstore(add(headStart, 64), \"Caller is not the lottery operat\")\n        mstore(add(headStart, 96), \"or\")\n        tail := add(headStart, 128)\n    }\n    function abi_encode_tuple_t_stringliteral_d06a140eb73954d7c52524ec109e581f5d0d5dc9e21e3732b7ad580fb4f89e29__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 25)\n        mstore(add(headStart, 64), \"No tickets were purchased\")\n        tail := add(headStart, 96)\n    }\n    function panic_error_0x11()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n    function checked_sub_t_uint256(x, y) -> diff\n    {\n        if lt(x, y) { panic_error_0x11() }\n        diff := sub(x, y)\n    }\n    function abi_encode_tuple_packed_t_uint256_t_bytes32__to_t_uint256_t_bytes32__nonPadded_inplace_fromStack_reversed(pos, value1, value0) -> end\n    {\n        mstore(pos, value0)\n        mstore(add(pos, 32), value1)\n        end := add(pos, 64)\n    }\n    function panic_error_0x12()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n    function mod_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n    function panic_error_0x32()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n    function checked_mul_t_uint256(x, y) -> product\n    {\n        if and(iszero(iszero(x)), gt(y, div(not(0), x))) { panic_error_0x11() }\n        product := mul(x, y)\n    }\n    function checked_add_t_uint256(x, y) -> sum\n    {\n        if gt(x, not(y)) { panic_error_0x11() }\n        sum := add(x, y)\n    }\n    function abi_encode_tuple_t_stringliteral_cce6dd106c3a9827b08779915695170aa8591588f4deebc7e6491b26421b8ff8__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 22)\n        mstore(add(headStart, 64), \"Caller is not a winner\")\n        tail := add(headStart, 96)\n    }\n    function copy_memory_to_memory(src, dst, length)\n    {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length) { mstore(add(dst, length), 0) }\n    }\n    function abi_encode_tuple_packed_t_stringliteral_3cf252d718a814aceda19feb7511621f9cead4349daed57106896961018f0582_t_string_memory_ptr_t_stringliteral_addc182a513da9c4a04fe36f89b428528cea5fa9b24e0a885a5f284e0cfe451a__to_t_bytes30_t_string_memory_ptr_t_bytes6__nonPadded_inplace_fromStack_reversed(pos, value0) -> end\n    {\n        mstore(pos, \"the value must be multiple of \")\n        let length := mload(value0)\n        copy_memory_to_memory(add(value0, 0x20), add(pos, 30), length)\n        let _1 := add(pos, length)\n        mstore(add(_1, 30), \" Ether\")\n        end := add(_1, 36)\n    }\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart, value0) -> tail\n    {\n        mstore(headStart, 32)\n        let length := mload(value0)\n        mstore(add(headStart, 32), length)\n        copy_memory_to_memory(add(value0, 32), add(headStart, 64), length)\n        tail := add(add(headStart, and(add(length, 31), not(31))), 64)\n    }\n    function checked_div_t_uint256(x, y) -> r\n    {\n        if iszero(y) { panic_error_0x12() }\n        r := div(x, y)\n    }\n    function abi_encode_tuple_t_stringliteral_9dd87e400d2508ad2a9dd23b947542259ca8cc80e6bf2945b2350434f2b02dec__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 29)\n        mstore(add(headStart, 64), \"Not enough tickets available.\")\n        tail := add(headStart, 96)\n    }\n    function increment_t_uint256(value) -> ret\n    {\n        if eq(value, not(0)) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n    function abi_encode_tuple_t_stringliteral_2f407f41da031683eb6f27d900002adb30c9cad98d9e538171c2e77e5cab86a0__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 27)\n        mstore(add(headStart, 64), \"the lottery not expired yet\")\n        tail := add(headStart, 96)\n    }\n    function abi_encode_tuple_t_stringliteral_7c025869fc52da732ddafd9834c0b51ab79dab8cf32fb9b59b9f6d7ebe497f4f__to_t_string_memory_ptr__fromStack_reversed(headStart) -> tail\n    {\n        mstore(headStart, 32)\n        mstore(add(headStart, 32), 38)\n        mstore(add(headStart, 64), \"Cannot Restart Draw as Draw is i\")\n        mstore(add(headStart, 96), \"n play\")\n        tail := add(headStart, 128)\n    }\n    function panic_error_0x41()\n    {\n        mstore(0, shl(224, 0x4e487b71))\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n}",
          "id": 2,
          "language": "Yul",
          "name": "#utility.yul"
        }
      ],
      "immutableReferences": {},
      "linkReferences": {},
      "object": "6080604052600436106101805760003560e01c806371827b7b116100d6578063ba946d791161007f578063ea3a149911610059578063ea3a1499146103c4578063f2613269146103f1578063fe1881841461040657600080fd5b8063ba946d7914610363578063c6944fa014610379578063dd64e5341461038e57600080fd5b806396c85ef3116100b057806396c85ef31461030a5780639b89470314610339578063a88f46721461034e57600080fd5b806371827b7b146102d857806391d8b14e146102ed57806393a563b5146102f557600080fd5b80634665096d1161013857806350b447121161011257806350b44712146102655780635a58acdd1461029d5780636032a4f9146102bd57600080fd5b80634665096d146102185780634788af7c1461022e5780634ed026221461024357600080fd5b80630fb5a6b4116101695780630fb5a6b4146101d05780631209b1f6146101e657806335580df21461020157600080fd5b806306f7f3bf146101855780630789c607146101ae575b600080fd5b34801561019157600080fd5b5061019b60045481565b6040519081526020015b60405180910390f35b3480156101ba57600080fd5b503360009081526005602052604090205461019b565b3480156101dc57600080fd5b5061019b61070881565b3480156101f257600080fd5b5061019b662386f26fc1000081565b34801561020d57600080fd5b50610216610426565b005b34801561022457600080fd5b5061019b60005481565b34801561023a57600080fd5b506102166104cd565b34801561024f57600080fd5b506102586106e1565b6040516101a59190610ced565b34801561027157600080fd5b50610285610280366004610d3a565b610743565b6040516001600160a01b0390911681526020016101a5565b3480156102a957600080fd5b50600154610285906001600160a01b031681565b3480156102c957600080fd5b5061019b66038d7ea4c6800081565b3480156102e457600080fd5b5061021661076d565b61021661080c565b34801561030157600080fd5b5061019b610948565b34801561031657600080fd5b5033600090815260056020526040902054151560405190151581526020016101a5565b34801561034557600080fd5b5061019b606481565b34801561035a57600080fd5b5061021661095e565b34801561036f57600080fd5b5061019b60025481565b34801561038557600080fd5b5061019b610a82565b34801561039a57600080fd5b5061019b6103a9366004610d53565b6001600160a01b031660009081526005602052604090205490565b3480156103d057600080fd5b5061019b6103df366004610d53565b60056020526000908152604090205481565b3480156103fd57600080fd5b50610216610a9a565b34801561041257600080fd5b50600354610285906001600160a01b031681565b6001546001600160a01b031633146104905760405162461bcd60e51b815260206004820152602260248201527f43616c6c6572206973206e6f7420746865206c6f7474657279206f706572617460448201526137b960f11b60648201526084015b60405180910390fd5b600280546000918290556040513392839183156108fc0291849190818181858888f193505050501580156104c8573d6000803e3d6000fd5b505050565b6001546001600160a01b031633146105325760405162461bcd60e51b815260206004820152602260248201527f43616c6c6572206973206e6f7420746865206c6f7474657279206f706572617460448201526137b960f11b6064820152608401610487565b6006546105815760405162461bcd60e51b815260206004820152601960248201527f4e6f207469636b657473207765726520707572636861736564000000000000006044820152606401610487565b6006546000906105919043610d99565b604080514260208201529140908201819052915060009060600160408051601f1981840301815291905280516020909101206006549091506000906105d69083610dc6565b90506000600682815481106105ed576105ed610dda565b6000918252602090912001546003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b039092169182179055905061063e66038d7ea4c68000662386f26fc10000610d99565b60065461064b9190610df0565b6001600160a01b03821660009081526005602052604081208054909190610673908490610e0f565b90915550506001600160a01b0381166000908152600560205260409020546004556006546106a99066038d7ea4c6800090610df0565b600260008282546106ba9190610e0f565b909155506106cc905060066000610cb3565b6106d861070842610e0f565b60005550505050565b6060600680548060200260200160405190810160405280929190818152602001828054801561073957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161071b575b5050505050905090565b6006818154811061075357600080fd5b6000918252602090912001546001600160a01b0316905081565b336000908152600560205260409020546107c95760405162461bcd60e51b815260206004820152601660248201527f43616c6c6572206973206e6f7420612077696e6e6572000000000000000000006044820152606401610487565b3360008181526005602052604080822080549083905590519091839183156108fc0291849190818181858888f193505050501580156104c8573d6000803e3d6000fd5b61081d662386f26fc1000034610dc6565b1561082e662386f26fc10000610b92565b60405160200161083e9190610e57565b6040516020818303038152906040529061086b5760405162461bcd60e51b81526004016104879190610ec3565b50600061087f662386f26fc1000034610ef6565b9050610889610948565b8111156108d85760405162461bcd60e51b815260206004820152601d60248201527f4e6f7420656e6f756768207469636b65747320617661696c61626c652e0000006044820152606401610487565b60005b8181101561094457600680546001810182556000919091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f01805473ffffffffffffffffffffffffffffffffffffffff1916331790558061093c81610f0a565b9150506108db565b5050565b600654600090610959906064610d99565b905090565b6000544210156109b05760405162461bcd60e51b815260206004820152601b60248201527f746865206c6f7474657279206e6f7420657870697265642079657400000000006044820152606401610487565b60005b600654811015610a73576000600682815481106109d2576109d2610dda565b6000918252602082200154600680546001600160a01b03909216935090849081106109ff576109ff610dda565b60009182526020822001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0393841617905560405191831691662386f26fc100009082818181858883f19350505050158015610a5e573d6000803e3d6000fd5b50508080610a6b90610f0a565b9150506109b3565b50610a8060066000610cb3565b565b60065460009061095990662386f26fc1000090610df0565b6001546001600160a01b03163314610aff5760405162461bcd60e51b815260206004820152602260248201527f43616c6c6572206973206e6f7420746865206c6f7474657279206f706572617460448201526137b960f11b6064820152608401610487565b60065415610b755760405162461bcd60e51b815260206004820152602660248201527f43616e6e6f74205265737461727420447261772061732044726177206973206960448201527f6e20706c617900000000000000000000000000000000000000000000000000006064820152608401610487565b610b8160066000610cb3565b610b8d61070842610e0f565b600055565b606081600003610bb95750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610be35780610bcd81610f0a565b9150610bdc9050600a83610ef6565b9150610bbd565b60008167ffffffffffffffff811115610bfe57610bfe610f23565b6040519080825280601f01601f191660200182016040528015610c28576020820181803683370190505b5090505b8415610cab57610c3d600183610d99565b9150610c4a600a86610dc6565b610c55906030610e0f565b60f81b818381518110610c6a57610c6a610dda565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350610ca4600a86610ef6565b9450610c2c565b949350505050565b5080546000825590600052602060002090810190610cd19190610cd4565b50565b5b80821115610ce95760008155600101610cd5565b5090565b6020808252825182820181905260009190848201906040850190845b81811015610d2e5783516001600160a01b031683529284019291840191600101610d09565b50909695505050505050565b600060208284031215610d4c57600080fd5b5035919050565b600060208284031215610d6557600080fd5b81356001600160a01b0381168114610d7c57600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b600082821015610dab57610dab610d83565b500390565b634e487b7160e01b600052601260045260246000fd5b600082610dd557610dd5610db0565b500690565b634e487b7160e01b600052603260045260246000fd5b6000816000190483118215151615610e0a57610e0a610d83565b500290565b60008219821115610e2257610e22610d83565b500190565b60005b83811015610e42578181015183820152602001610e2a565b83811115610e51576000848401525b50505050565b7f7468652076616c7565206d757374206265206d756c7469706c65206f66200000815260008251610e8f81601e850160208701610e27565b7f2045746865720000000000000000000000000000000000000000000000000000601e939091019283015250602401919050565b6020815260008251806020840152610ee2816040850160208701610e27565b601f01601f19169190910160400192915050565b600082610f0557610f05610db0565b500490565b600060018201610f1c57610f1c610d83565b5060010190565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220fbeb4d821f985f9cd668e990c7177aa76a87c75127a993d4b4370139268fb3ff64736f6c634300080d0033",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x180 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x71827B7B GT PUSH2 0xD6 JUMPI DUP1 PUSH4 0xBA946D79 GT PUSH2 0x7F JUMPI DUP1 PUSH4 0xEA3A1499 GT PUSH2 0x59 JUMPI DUP1 PUSH4 0xEA3A1499 EQ PUSH2 0x3C4 JUMPI DUP1 PUSH4 0xF2613269 EQ PUSH2 0x3F1 JUMPI DUP1 PUSH4 0xFE188184 EQ PUSH2 0x406 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0xBA946D79 EQ PUSH2 0x363 JUMPI DUP1 PUSH4 0xC6944FA0 EQ PUSH2 0x379 JUMPI DUP1 PUSH4 0xDD64E534 EQ PUSH2 0x38E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0x96C85EF3 GT PUSH2 0xB0 JUMPI DUP1 PUSH4 0x96C85EF3 EQ PUSH2 0x30A JUMPI DUP1 PUSH4 0x9B894703 EQ PUSH2 0x339 JUMPI DUP1 PUSH4 0xA88F4672 EQ PUSH2 0x34E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0x71827B7B EQ PUSH2 0x2D8 JUMPI DUP1 PUSH4 0x91D8B14E EQ PUSH2 0x2ED JUMPI DUP1 PUSH4 0x93A563B5 EQ PUSH2 0x2F5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0x4665096D GT PUSH2 0x138 JUMPI DUP1 PUSH4 0x50B44712 GT PUSH2 0x112 JUMPI DUP1 PUSH4 0x50B44712 EQ PUSH2 0x265 JUMPI DUP1 PUSH4 0x5A58ACDD EQ PUSH2 0x29D JUMPI DUP1 PUSH4 0x6032A4F9 EQ PUSH2 0x2BD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0x4665096D EQ PUSH2 0x218 JUMPI DUP1 PUSH4 0x4788AF7C EQ PUSH2 0x22E JUMPI DUP1 PUSH4 0x4ED02622 EQ PUSH2 0x243 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0xFB5A6B4 GT PUSH2 0x169 JUMPI DUP1 PUSH4 0xFB5A6B4 EQ PUSH2 0x1D0 JUMPI DUP1 PUSH4 0x1209B1F6 EQ PUSH2 0x1E6 JUMPI DUP1 PUSH4 0x35580DF2 EQ PUSH2 0x201 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 PUSH4 0x6F7F3BF EQ PUSH2 0x185 JUMPI DUP1 PUSH4 0x789C607 EQ PUSH2 0x1AE JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x191 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH1 0x4 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1BA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0x19B JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1DC JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH2 0x708 DUP2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1F2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH7 0x2386F26FC10000 DUP2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x20D JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x216 PUSH2 0x426 JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x224 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x23A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x216 PUSH2 0x4CD JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x24F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x258 PUSH2 0x6E1 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1A5 SWAP2 SWAP1 PUSH2 0xCED JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x271 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x285 PUSH2 0x280 CALLDATASIZE PUSH1 0x4 PUSH2 0xD3A JUMP JUMPDEST PUSH2 0x743 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP2 AND DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x1A5 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2A9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x1 SLOAD PUSH2 0x285 SWAP1 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2C9 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH7 0x38D7EA4C68000 DUP2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2E4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x216 PUSH2 0x76D JUMP JUMPDEST PUSH2 0x216 PUSH2 0x80C JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x301 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH2 0x948 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x316 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD ISZERO ISZERO PUSH1 0x40 MLOAD SWAP1 ISZERO ISZERO DUP2 MSTORE PUSH1 0x20 ADD PUSH2 0x1A5 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x345 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH1 0x64 DUP2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x35A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x216 PUSH2 0x95E JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x36F JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x385 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH2 0xA82 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x39A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH2 0x3A9 CALLDATASIZE PUSH1 0x4 PUSH2 0xD53 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD SWAP1 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x3D0 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19B PUSH2 0x3DF CALLDATASIZE PUSH1 0x4 PUSH2 0xD53 JUMP JUMPDEST PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD DUP2 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x3FD JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x216 PUSH2 0xA9A JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x412 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x3 SLOAD PUSH2 0x285 SWAP1 PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0x490 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x22 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x43616C6C6572206973206E6F7420746865206C6F7474657279206F7065726174 PUSH1 0x44 DUP3 ADD MSTORE PUSH2 0x37B9 PUSH1 0xF1 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x2 DUP1 SLOAD PUSH1 0x0 SWAP2 DUP3 SWAP1 SSTORE PUSH1 0x40 MLOAD CALLER SWAP3 DUP4 SWAP2 DUP4 ISZERO PUSH2 0x8FC MUL SWAP2 DUP5 SWAP2 SWAP1 DUP2 DUP2 DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x4C8 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0x532 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x22 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x43616C6C6572206973206E6F7420746865206C6F7474657279206F7065726174 PUSH1 0x44 DUP3 ADD MSTORE PUSH2 0x37B9 PUSH1 0xF1 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0x487 JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH2 0x581 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x19 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E6F207469636B65747320776572652070757263686173656400000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x487 JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH1 0x0 SWAP1 PUSH2 0x591 SWAP1 NUMBER PUSH2 0xD99 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD TIMESTAMP PUSH1 0x20 DUP3 ADD MSTORE SWAP2 BLOCKHASH SWAP1 DUP3 ADD DUP2 SWAP1 MSTORE SWAP2 POP PUSH1 0x0 SWAP1 PUSH1 0x60 ADD PUSH1 0x40 DUP1 MLOAD PUSH1 0x1F NOT DUP2 DUP5 SUB ADD DUP2 MSTORE SWAP2 SWAP1 MSTORE DUP1 MLOAD PUSH1 0x20 SWAP1 SWAP2 ADD KECCAK256 PUSH1 0x6 SLOAD SWAP1 SWAP2 POP PUSH1 0x0 SWAP1 PUSH2 0x5D6 SWAP1 DUP4 PUSH2 0xDC6 JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH1 0x6 DUP3 DUP2 SLOAD DUP2 LT PUSH2 0x5ED JUMPI PUSH2 0x5ED PUSH2 0xDDA JUMP JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x3 DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP3 AND SWAP2 DUP3 OR SWAP1 SSTORE SWAP1 POP PUSH2 0x63E PUSH7 0x38D7EA4C68000 PUSH7 0x2386F26FC10000 PUSH2 0xD99 JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH2 0x64B SWAP2 SWAP1 PUSH2 0xDF0 JUMP JUMPDEST PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP3 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 DUP2 KECCAK256 DUP1 SLOAD SWAP1 SWAP2 SWAP1 PUSH2 0x673 SWAP1 DUP5 SWAP1 PUSH2 0xE0F JUMP JUMPDEST SWAP1 SWAP2 SSTORE POP POP PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH1 0x4 SSTORE PUSH1 0x6 SLOAD PUSH2 0x6A9 SWAP1 PUSH7 0x38D7EA4C68000 SWAP1 PUSH2 0xDF0 JUMP JUMPDEST PUSH1 0x2 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH2 0x6BA SWAP2 SWAP1 PUSH2 0xE0F JUMP JUMPDEST SWAP1 SWAP2 SSTORE POP PUSH2 0x6CC SWAP1 POP PUSH1 0x6 PUSH1 0x0 PUSH2 0xCB3 JUMP JUMPDEST PUSH2 0x6D8 PUSH2 0x708 TIMESTAMP PUSH2 0xE0F JUMP JUMPDEST PUSH1 0x0 SSTORE POP POP POP POP JUMP JUMPDEST PUSH1 0x60 PUSH1 0x6 DUP1 SLOAD DUP1 PUSH1 0x20 MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD DUP1 ISZERO PUSH2 0x739 JUMPI PUSH1 0x20 MUL DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP2 MSTORE PUSH1 0x1 SWAP1 SWAP2 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x71B JUMPI JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x6 DUP2 DUP2 SLOAD DUP2 LT PUSH2 0x753 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 SWAP1 SWAP2 KECCAK256 ADD SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND SWAP1 POP DUP2 JUMP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 SWAP1 KECCAK256 SLOAD PUSH2 0x7C9 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x16 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x43616C6C6572206973206E6F7420612077696E6E657200000000000000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x487 JUMP JUMPDEST CALLER PUSH1 0x0 DUP2 DUP2 MSTORE PUSH1 0x5 PUSH1 0x20 MSTORE PUSH1 0x40 DUP1 DUP3 KECCAK256 DUP1 SLOAD SWAP1 DUP4 SWAP1 SSTORE SWAP1 MLOAD SWAP1 SWAP2 DUP4 SWAP2 DUP4 ISZERO PUSH2 0x8FC MUL SWAP2 DUP5 SWAP2 SWAP1 DUP2 DUP2 DUP2 DUP6 DUP9 DUP9 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0x4C8 JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST PUSH2 0x81D PUSH7 0x2386F26FC10000 CALLVALUE PUSH2 0xDC6 JUMP JUMPDEST ISZERO PUSH2 0x82E PUSH7 0x2386F26FC10000 PUSH2 0xB92 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 ADD PUSH2 0x83E SWAP2 SWAP1 PUSH2 0xE57 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH1 0x20 DUP2 DUP4 SUB SUB DUP2 MSTORE SWAP1 PUSH1 0x40 MSTORE SWAP1 PUSH2 0x86B JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x487 SWAP2 SWAP1 PUSH2 0xEC3 JUMP JUMPDEST POP PUSH1 0x0 PUSH2 0x87F PUSH7 0x2386F26FC10000 CALLVALUE PUSH2 0xEF6 JUMP JUMPDEST SWAP1 POP PUSH2 0x889 PUSH2 0x948 JUMP JUMPDEST DUP2 GT ISZERO PUSH2 0x8D8 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1D PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x4E6F7420656E6F756768207469636B65747320617661696C61626C652E000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x487 JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0x944 JUMPI PUSH1 0x6 DUP1 SLOAD PUSH1 0x1 DUP2 ADD DUP3 SSTORE PUSH1 0x0 SWAP2 SWAP1 SWAP2 MSTORE PUSH32 0xF652222313E28459528D920B65115C16C04F3EFC82AAEDC97BE59F3F377C0D3F ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND CALLER OR SWAP1 SSTORE DUP1 PUSH2 0x93C DUP2 PUSH2 0xF0A JUMP JUMPDEST SWAP2 POP POP PUSH2 0x8DB JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH1 0x0 SWAP1 PUSH2 0x959 SWAP1 PUSH1 0x64 PUSH2 0xD99 JUMP JUMPDEST SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 SLOAD TIMESTAMP LT ISZERO PUSH2 0x9B0 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x1B PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x746865206C6F7474657279206E6F742065787069726564207965740000000000 PUSH1 0x44 DUP3 ADD MSTORE PUSH1 0x64 ADD PUSH2 0x487 JUMP JUMPDEST PUSH1 0x0 JUMPDEST PUSH1 0x6 SLOAD DUP2 LT ISZERO PUSH2 0xA73 JUMPI PUSH1 0x0 PUSH1 0x6 DUP3 DUP2 SLOAD DUP2 LT PUSH2 0x9D2 JUMPI PUSH2 0x9D2 PUSH2 0xDDA JUMP JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 DUP3 KECCAK256 ADD SLOAD PUSH1 0x6 DUP1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP1 SWAP3 AND SWAP4 POP SWAP1 DUP5 SWAP1 DUP2 LT PUSH2 0x9FF JUMPI PUSH2 0x9FF PUSH2 0xDDA JUMP JUMPDEST PUSH1 0x0 SWAP2 DUP3 MSTORE PUSH1 0x20 DUP3 KECCAK256 ADD DUP1 SLOAD PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB SWAP4 DUP5 AND OR SWAP1 SSTORE PUSH1 0x40 MLOAD SWAP2 DUP4 AND SWAP2 PUSH7 0x2386F26FC10000 SWAP1 DUP3 DUP2 DUP2 DUP2 DUP6 DUP9 DUP4 CALL SWAP4 POP POP POP POP ISZERO DUP1 ISZERO PUSH2 0xA5E JUMPI RETURNDATASIZE PUSH1 0x0 DUP1 RETURNDATACOPY RETURNDATASIZE PUSH1 0x0 REVERT JUMPDEST POP POP DUP1 DUP1 PUSH2 0xA6B SWAP1 PUSH2 0xF0A JUMP JUMPDEST SWAP2 POP POP PUSH2 0x9B3 JUMP JUMPDEST POP PUSH2 0xA80 PUSH1 0x6 PUSH1 0x0 PUSH2 0xCB3 JUMP JUMPDEST JUMP JUMPDEST PUSH1 0x6 SLOAD PUSH1 0x0 SWAP1 PUSH2 0x959 SWAP1 PUSH7 0x2386F26FC10000 SWAP1 PUSH2 0xDF0 JUMP JUMPDEST PUSH1 0x1 SLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND CALLER EQ PUSH2 0xAFF JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x22 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x43616C6C6572206973206E6F7420746865206C6F7474657279206F7065726174 PUSH1 0x44 DUP3 ADD MSTORE PUSH2 0x37B9 PUSH1 0xF1 SHL PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0x487 JUMP JUMPDEST PUSH1 0x6 SLOAD ISZERO PUSH2 0xB75 JUMPI PUSH1 0x40 MLOAD PUSH3 0x461BCD PUSH1 0xE5 SHL DUP2 MSTORE PUSH1 0x20 PUSH1 0x4 DUP3 ADD MSTORE PUSH1 0x26 PUSH1 0x24 DUP3 ADD MSTORE PUSH32 0x43616E6E6F742052657374617274204472617720617320447261772069732069 PUSH1 0x44 DUP3 ADD MSTORE PUSH32 0x6E20706C61790000000000000000000000000000000000000000000000000000 PUSH1 0x64 DUP3 ADD MSTORE PUSH1 0x84 ADD PUSH2 0x487 JUMP JUMPDEST PUSH2 0xB81 PUSH1 0x6 PUSH1 0x0 PUSH2 0xCB3 JUMP JUMPDEST PUSH2 0xB8D PUSH2 0x708 TIMESTAMP PUSH2 0xE0F JUMP JUMPDEST PUSH1 0x0 SSTORE JUMP JUMPDEST PUSH1 0x60 DUP2 PUSH1 0x0 SUB PUSH2 0xBB9 JUMPI POP POP PUSH1 0x40 DUP1 MLOAD DUP1 DUP3 ADD SWAP1 SWAP2 MSTORE PUSH1 0x1 DUP2 MSTORE PUSH1 0x3 PUSH1 0xFC SHL PUSH1 0x20 DUP3 ADD MSTORE SWAP1 JUMP JUMPDEST DUP2 PUSH1 0x0 JUMPDEST DUP2 ISZERO PUSH2 0xBE3 JUMPI DUP1 PUSH2 0xBCD DUP2 PUSH2 0xF0A JUMP JUMPDEST SWAP2 POP PUSH2 0xBDC SWAP1 POP PUSH1 0xA DUP4 PUSH2 0xEF6 JUMP JUMPDEST SWAP2 POP PUSH2 0xBBD JUMP JUMPDEST PUSH1 0x0 DUP2 PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH2 0xBFE JUMPI PUSH2 0xBFE PUSH2 0xF23 JUMP JUMPDEST PUSH1 0x40 MLOAD SWAP1 DUP1 DUP3 MSTORE DUP1 PUSH1 0x1F ADD PUSH1 0x1F NOT AND PUSH1 0x20 ADD DUP3 ADD PUSH1 0x40 MSTORE DUP1 ISZERO PUSH2 0xC28 JUMPI PUSH1 0x20 DUP3 ADD DUP2 DUP1 CALLDATASIZE DUP4 CALLDATACOPY ADD SWAP1 POP JUMPDEST POP SWAP1 POP JUMPDEST DUP5 ISZERO PUSH2 0xCAB JUMPI PUSH2 0xC3D PUSH1 0x1 DUP4 PUSH2 0xD99 JUMP JUMPDEST SWAP2 POP PUSH2 0xC4A PUSH1 0xA DUP7 PUSH2 0xDC6 JUMP JUMPDEST PUSH2 0xC55 SWAP1 PUSH1 0x30 PUSH2 0xE0F JUMP JUMPDEST PUSH1 0xF8 SHL DUP2 DUP4 DUP2 MLOAD DUP2 LT PUSH2 0xC6A JUMPI PUSH2 0xC6A PUSH2 0xDDA JUMP JUMPDEST PUSH1 0x20 ADD ADD SWAP1 PUSH31 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF NOT AND SWAP1 DUP2 PUSH1 0x0 BYTE SWAP1 MSTORE8 POP PUSH2 0xCA4 PUSH1 0xA DUP7 PUSH2 0xEF6 JUMP JUMPDEST SWAP5 POP PUSH2 0xC2C JUMP JUMPDEST SWAP5 SWAP4 POP POP POP POP JUMP JUMPDEST POP DUP1 SLOAD PUSH1 0x0 DUP3 SSTORE SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 DUP2 ADD SWAP1 PUSH2 0xCD1 SWAP2 SWAP1 PUSH2 0xCD4 JUMP JUMPDEST POP JUMP JUMPDEST JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0xCE9 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0xCD5 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH1 0x20 DUP1 DUP3 MSTORE DUP3 MLOAD DUP3 DUP3 ADD DUP2 SWAP1 MSTORE PUSH1 0x0 SWAP2 SWAP1 DUP5 DUP3 ADD SWAP1 PUSH1 0x40 DUP6 ADD SWAP1 DUP5 JUMPDEST DUP2 DUP2 LT ISZERO PUSH2 0xD2E JUMPI DUP4 MLOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB AND DUP4 MSTORE SWAP3 DUP5 ADD SWAP3 SWAP2 DUP5 ADD SWAP2 PUSH1 0x1 ADD PUSH2 0xD09 JUMP JUMPDEST POP SWAP1 SWAP7 SWAP6 POP POP POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xD4C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xD65 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD PUSH1 0x1 PUSH1 0x1 PUSH1 0xA0 SHL SUB DUP2 AND DUP2 EQ PUSH2 0xD7C JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 DUP3 DUP3 LT ISZERO PUSH2 0xDAB JUMPI PUSH2 0xDAB PUSH2 0xD83 JUMP JUMPDEST POP SUB SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x12 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 DUP3 PUSH2 0xDD5 JUMPI PUSH2 0xDD5 PUSH2 0xDB0 JUMP JUMPDEST POP MOD SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x32 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x0 NOT DIV DUP4 GT DUP3 ISZERO ISZERO AND ISZERO PUSH2 0xE0A JUMPI PUSH2 0xE0A PUSH2 0xD83 JUMP JUMPDEST POP MUL SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP3 NOT DUP3 GT ISZERO PUSH2 0xE22 JUMPI PUSH2 0xE22 PUSH2 0xD83 JUMP JUMPDEST POP ADD SWAP1 JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0xE42 JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0xE2A JUMP JUMPDEST DUP4 DUP2 GT ISZERO PUSH2 0xE51 JUMPI PUSH1 0x0 DUP5 DUP5 ADD MSTORE JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH32 0x7468652076616C7565206D757374206265206D756C7469706C65206F66200000 DUP2 MSTORE PUSH1 0x0 DUP3 MLOAD PUSH2 0xE8F DUP2 PUSH1 0x1E DUP6 ADD PUSH1 0x20 DUP8 ADD PUSH2 0xE27 JUMP JUMPDEST PUSH32 0x2045746865720000000000000000000000000000000000000000000000000000 PUSH1 0x1E SWAP4 SWAP1 SWAP2 ADD SWAP3 DUP4 ADD MSTORE POP PUSH1 0x24 ADD SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x20 DUP2 MSTORE PUSH1 0x0 DUP3 MLOAD DUP1 PUSH1 0x20 DUP5 ADD MSTORE PUSH2 0xEE2 DUP2 PUSH1 0x40 DUP6 ADD PUSH1 0x20 DUP8 ADD PUSH2 0xE27 JUMP JUMPDEST PUSH1 0x1F ADD PUSH1 0x1F NOT AND SWAP2 SWAP1 SWAP2 ADD PUSH1 0x40 ADD SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH2 0xF05 JUMPI PUSH2 0xF05 PUSH2 0xDB0 JUMP JUMPDEST POP DIV SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 DUP3 ADD PUSH2 0xF1C JUMPI PUSH2 0xF1C PUSH2 0xD83 JUMP JUMPDEST POP PUSH1 0x1 ADD SWAP1 JUMP JUMPDEST PUSH4 0x4E487B71 PUSH1 0xE0 SHL PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 0xFB 0xEB 0x4D DUP3 0x1F SWAP9 0x5F SWAP13 0xD6 PUSH9 0xE990C7177AA76A87C7 MLOAD 0x27 0xA9 SWAP4 0xD4 0xB4 CALLDATACOPY ADD CODECOPY 0x26 DUP16 0xB3 SELFDESTRUCT PUSH5 0x736F6C6343 STOP ADDMOD 0xD STOP CALLER ",
      "sourceMap": "122:4486:1:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;746:31;;;;;;;;;;;;;;;;;;;160:25:2;;;148:2;133:18;746:31:1;;;;;;;;3219:208;;;;;;;;;;-1:-1:-1;3323:10:1;3271:7;3371:16;;;:8;:16;;;;;;3219:208;;360:45;;;;;;;;;;;;395:10;360:45;;145:48;;;;;;;;;;;;183:10;145:48;;4009:261;;;;;;;;;;;;;:::i;:::-;;448:25;;;;;;;;;;;;;;;;2283:722;;;;;;;;;;;;;:::i;1489:92::-;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;912:24::-;;;;;;;;;;-1:-1:-1;912:24:1;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;1231:55:2;;;1213:74;;1201:2;1186:18;912:24:1;1067:226:2;536:30:1;;;;;;;;;;-1:-1:-1;536:30:1;;;;-1:-1:-1;;;;;536:30:1;;;276:54;;;;;;;;;;;;319:11;276:54;;3433:231;;;;;;;;;;;;;:::i;1706:571::-;;;:::i;4497:109::-;;;;;;;;;;;;;:::i;4276:95::-;;;;;;;;;;-1:-1:-1;4349:10:1;4317:4;4340:20;;;:8;:20;;;;;;:24;;4276:95;;1463:14:2;;1456:22;1438:41;;1426:2;1411:18;4276:95:1;1298:187:2;199:40:1;;;;;;;;;;;;236:3;199:40;;3670:333;;;;;;;;;;;;;:::i;601:42::-;;;;;;;;;;;;;;;;4377:114;;;;;;;;;;;;;:::i;1587:113::-;;;;;;;;;;-1:-1:-1;1587:113:1;;;;;:::i;:::-;-1:-1:-1;;;;;1679:14:1;1653:7;1679:14;;;:8;:14;;;;;;;1587:113;825:43;;;;;;;;;;-1:-1:-1;825:43:1;;;;;:::i;:::-;;;;;;;;;;;;;;3011:202;;;;;;;;;;;;;:::i;681:25::-;;;;;;;;;;-1:-1:-1;681:25:1;;;;-1:-1:-1;;;;;681:25:1;;;4009:261;1099:15;;-1:-1:-1;;;;;1099:15:1;1085:10;:29;1063:112;;;;-1:-1:-1;;;1063:112:1;;2006:2:2;1063:112:1;;;1988:21:2;2045:2;2025:18;;;2018:30;2084:34;2064:18;;;2057:62;-1:-1:-1;;;2135:18:2;;;2128:32;2177:19;;1063:112:1;;;;;;;;;4154:23:::1;::::0;;4067:24:::1;4187:27:::0;;;;4225:38:::1;::::0;4102:10:::1;::::0;;;4225:38;::::1;;;::::0;4154:23;;4225:38;;4067:24;4225:38;4154:23;4102:10;4225:38;::::1;;;;;;;;;;;;;::::0;::::1;;;;;;4057:213;;4009:261::o:0;2283:722::-;1099:15;;-1:-1:-1;;;;;1099:15:1;1085:10;:29;1063:112;;;;-1:-1:-1;;;1063:112:1;;2006:2:2;1063:112:1;;;1988:21:2;2045:2;2025:18;;;2018:30;2084:34;2064:18;;;2057:62;-1:-1:-1;;;2135:18:2;;;2128:32;2177:19;;1063:112:1;1804:398:2;1063:112:1;2347:7:::1;:14:::0;2339:56:::1;;;::::0;-1:-1:-1;;;2339:56:1;;2409:2:2;2339:56:1::1;::::0;::::1;2391:21:2::0;2448:2;2428:18;;;2421:30;2487:27;2467:18;;;2460:55;2532:18;;2339:56:1::1;2207:349:2::0;2339:56:1::1;2451:7;:14:::0;2406:17:::1;::::0;2436:29:::1;::::0;:12:::1;:29;:::i;:::-;2530:44;::::0;;2547:15:::1;2530:44;::::0;::::1;2980:19:2::0;2426:40:1;::::1;3015:12:2::0;;;3008:28;;;2426:40:1;-1:-1:-1;2476:20:1::1;::::0;3052:12:2;;2530:44:1::1;::::0;;-1:-1:-1;;2530:44:1;;::::1;::::0;;;;;;2520:55;;2530:44:::1;2520:55:::0;;::::1;::::0;2634:7:::1;:14:::0;2520:55;;-1:-1:-1;2499:86:1::1;::::0;2619:29:::1;::::0;2520:55;2619:29:::1;:::i;:::-;2595:53;;2659:14;2676:7;2684:13;2676:22;;;;;;;;:::i;:::-;;::::0;;;::::1;::::0;;;::::1;::::0;2708:10:::1;:19:::0;;-1:-1:-1;;2708:19:1::1;-1:-1:-1::0;;;;;2676:22:1;;::::1;2708:19:::0;;::::1;::::0;;2676:22;-1:-1:-1;2776:30:1::1;319:11;183:10;2776:30;:::i;:::-;2758:7;:14:::0;:49:::1;::::0;;::::1;:::i;:::-;-1:-1:-1::0;;;;;2737:16:1;::::1;;::::0;;;:8:::1;:16;::::0;;;;:71;;:16;;;:71:::1;::::0;;;::::1;:::i;:::-;::::0;;;-1:-1:-1;;;;;;;2837:16:1;::::1;;::::0;;;:8:::1;:16;::::0;;;;;2818::::1;:35:::0;2891:7:::1;:14:::0;:33:::1;::::0;319:11:::1;::::0;2891:33:::1;:::i;:::-;2863:23;;:62;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;2935:14:1::1;::::0;-1:-1:-1;2942:7:1::1;;2935:14;:::i;:::-;2972:26;395:10;2972:15;:26;:::i;:::-;2959:10;:39:::0;-1:-1:-1;;;;2283:722:1:o;1489:92::-;1532:16;1567:7;1560:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1560:14:1;;;;;;;;;;;;;;;;;;;;;;;1489:92;:::o;912:24::-;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;912:24:1;;-1:-1:-1;912:24:1;:::o;3433:231::-;4349:10;4317:4;4340:20;;;:8;:20;;;;;;1276:45;;;;-1:-1:-1;;;1276:45:1;;3964:2:2;1276:45:1;;;3946:21:2;4003:2;3983:18;;;3976:30;4042:24;4022:18;;;4015:52;4084:18;;1276:45:1;3762:346:2;1276:45:1;3520:10:::1;3487:22;3568:16:::0;;;:8:::1;:16;::::0;;;;;;;3594:20;;;;3625:32;;3568:16;;3520:10;;3625:32;::::1;;;::::0;3568:16;;3625:32;;3487:22;3625:32;3568:16;3520:10;3625:32;::::1;;;;;;;;;;;;;::::0;::::1;;;;1706:571:::0;1774:23;183:10;1774:9;:23;:::i;:::-;:28;1897:29;183:10;1897:16;:29::i;:::-;1816:150;;;;;;;;:::i;:::-;;;;;;;;;;;;;1753:223;;;;;-1:-1:-1;;;1753:223:1;;;;;;;;:::i;:::-;-1:-1:-1;1986:25:1;2014:23;183:10;2014:9;:23;:::i;:::-;1986:51;;2090:18;:16;:18::i;:::-;2069:17;:39;;2048:115;;;;-1:-1:-1;;;2048:115:1;;5684:2:2;2048:115:1;;;5666:21:2;5723:2;5703:18;;;5696:30;5762:31;5742:18;;;5735:59;5811:18;;2048:115:1;5482:353:2;2048:115:1;2179:9;2174:97;2198:17;2194:1;:21;2174:97;;;2236:7;:24;;;;;;;-1:-1:-1;2236:24:1;;;;;;;;-1:-1:-1;;2236:24:1;2249:10;2236:24;;;2217:3;;;;:::i;:::-;;;;2174:97;;;;1743:534;1706:571::o;4497:109::-;4585:7;:14;4546:7;;4572:27;;236:3;4572:27;:::i;:::-;4565:34;;4497:109;:::o;3670:333::-;3735:10;;3716:15;:29;;3708:69;;;;-1:-1:-1;;;3708:69:1;;6182:2:2;3708:69:1;;;6164:21:2;6221:2;6201:18;;;6194:30;6260:29;6240:18;;;6233:57;6307:18;;3708:69:1;5980:351:2;3708:69:1;3793:9;3788:185;3812:7;:14;3808:18;;3788:185;;;3847:18;3876:7;3884:1;3876:10;;;;;;;;:::i;:::-;;;;;;;;;;3901:7;:10;;-1:-1:-1;;;;;3876:10:1;;;;-1:-1:-1;3901:7:1;3909:1;;3901:10;;;;;;:::i;:::-;;;;;;;;;:23;;-1:-1:-1;;3901:23:1;-1:-1:-1;;;;;3901:23:1;;;;;;3938:24;;:11;;;;183:10;;3901;3938:24;3901:10;3938:24;183:10;3938:11;3901:10;3938:24;;;;;;;;;;;;;;;;;;;;3833:140;3828:3;;;;;:::i;:::-;;;;3788:185;;;-1:-1:-1;3982:14:1;3989:7;;3982:14;:::i;:::-;3670:333::o;4377:114::-;4456:7;:14;4430:7;;4456:28;;183:10;;4456:28;:::i;3011:202::-;1099:15;;-1:-1:-1;;;;;1099:15:1;1085:10;:29;1063:112;;;;-1:-1:-1;;;1063:112:1;;2006:2:2;1063:112:1;;;1988:21:2;2045:2;2025:18;;;2018:30;2084:34;2064:18;;;2057:62;-1:-1:-1;;;2135:18:2;;;2128:32;2177:19;;1063:112:1;1804:398:2;1063:112:1;3070:7:::1;:14:::0;:19;3062:70:::1;;;::::0;-1:-1:-1;;;3062:70:1;;6538:2:2;3062:70:1::1;::::0;::::1;6520:21:2::0;6577:2;6557:18;;;6550:30;6616:34;6596:18;;;6589:62;6687:8;6667:18;;;6660:36;6713:19;;3062:70:1::1;6336:402:2::0;3062:70:1::1;3143:14;3150:7;;3143:14;:::i;:::-;3180:26;395:10;3180:15;:26;:::i;:::-;3167:10;:39:::0;3011:202::o;392:703:0:-;448:13;665:5;674:1;665:10;661:51;;-1:-1:-1;;691:10:0;;;;;;;;;;;;-1:-1:-1;;;691:10:0;;;;;392:703::o;661:51::-;736:5;721:12;775:75;782:9;;775:75;;807:8;;;;:::i;:::-;;-1:-1:-1;829:10:0;;-1:-1:-1;837:2:0;829:10;;:::i;:::-;;;775:75;;;859:19;891:6;881:17;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;881:17:0;;859:39;;908:150;915:10;;908:150;;941:11;951:1;941:11;;:::i;:::-;;-1:-1:-1;1009:10:0;1017:2;1009:5;:10;:::i;:::-;996:24;;:2;:24;:::i;:::-;983:39;;966:6;973;966:14;;;;;;;;:::i;:::-;;;;:56;;;;;;;;;;-1:-1:-1;1036:11:0;1045:2;1036:11;;:::i;:::-;;;908:150;;;1081:6;392:703;-1:-1:-1;;;;392:703:0:o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;:::o;196:681:2:-;367:2;419:21;;;489:13;;392:18;;;511:22;;;338:4;;367:2;590:15;;;;564:2;549:18;;;338:4;633:218;647:6;644:1;641:13;633:218;;;712:13;;-1:-1:-1;;;;;708:62:2;696:75;;826:15;;;;791:12;;;;669:1;662:9;633:218;;;-1:-1:-1;868:3:2;;196:681;-1:-1:-1;;;;;;196:681:2:o;882:180::-;941:6;994:2;982:9;973:7;969:23;965:32;962:52;;;1010:1;1007;1000:12;962:52;-1:-1:-1;1033:23:2;;882:180;-1:-1:-1;882:180:2:o;1490:309::-;1549:6;1602:2;1590:9;1581:7;1577:23;1573:32;1570:52;;;1618:1;1615;1608:12;1570:52;1657:9;1644:23;-1:-1:-1;;;;;1700:5:2;1696:54;1689:5;1686:65;1676:93;;1765:1;1762;1755:12;1676:93;1788:5;1490:309;-1:-1:-1;;;1490:309:2:o;2561:127::-;2622:10;2617:3;2613:20;2610:1;2603:31;2653:4;2650:1;2643:15;2677:4;2674:1;2667:15;2693:125;2733:4;2761:1;2758;2755:8;2752:34;;;2766:18;;:::i;:::-;-1:-1:-1;2803:9:2;;2693:125::o;3075:127::-;3136:10;3131:3;3127:20;3124:1;3117:31;3167:4;3164:1;3157:15;3191:4;3188:1;3181:15;3207:112;3239:1;3265;3255:35;;3270:18;;:::i;:::-;-1:-1:-1;3304:9:2;;3207:112::o;3324:127::-;3385:10;3380:3;3376:20;3373:1;3366:31;3416:4;3413:1;3406:15;3440:4;3437:1;3430:15;3456:168;3496:7;3562:1;3558;3554:6;3550:14;3547:1;3544:21;3539:1;3532:9;3525:17;3521:45;3518:71;;;3569:18;;:::i;:::-;-1:-1:-1;3609:9:2;;3456:168::o;3629:128::-;3669:3;3700:1;3696:6;3693:1;3690:13;3687:39;;;3706:18;;:::i;:::-;-1:-1:-1;3742:9:2;;3629:128::o;4113:258::-;4185:1;4195:113;4209:6;4206:1;4203:13;4195:113;;;4285:11;;;4279:18;4266:11;;;4259:39;4231:2;4224:10;4195:113;;;4326:6;4323:1;4320:13;4317:48;;;4361:1;4352:6;4347:3;4343:16;4336:27;4317:48;;4113:258;;;:::o;4376:588::-;4718:32;4713:3;4706:45;4688:3;4780:6;4774:13;4796:62;4851:6;4846:2;4841:3;4837:12;4830:4;4822:6;4818:17;4796:62;:::i;:::-;4922:8;4917:2;4877:16;;;;4909:11;;;4902:29;-1:-1:-1;4955:2:2;4947:11;;4376:588;-1:-1:-1;4376:588:2:o;4969:383::-;5118:2;5107:9;5100:21;5081:4;5150:6;5144:13;5193:6;5188:2;5177:9;5173:18;5166:34;5209:66;5268:6;5263:2;5252:9;5248:18;5243:2;5235:6;5231:15;5209:66;:::i;:::-;5336:2;5315:15;-1:-1:-1;;5311:29:2;5296:45;;;;5343:2;5292:54;;4969:383;-1:-1:-1;;4969:383:2:o;5357:120::-;5397:1;5423;5413:35;;5428:18;;:::i;:::-;-1:-1:-1;5462:9:2;;5357:120::o;5840:135::-;5879:3;5900:17;;;5897:43;;5920:18;;:::i;:::-;-1:-1:-1;5967:1:2;5956:13;;5840:135::o;6743:127::-;6804:10;6799:3;6795:20;6792:1;6785:31;6835:4;6832:1;6825:15;6859:4;6856:1;6849:15"
    },
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "790200",
        "executionCost": "52250",
        "totalCost": "842450"
      },
      "external": {
        "BuyTickets()": "infinite",
        "CurrentWinningReward()": "2469",
        "DrawWinnerTicket()": "infinite",
        "IsWinner()": "2405",
        "RefundAll()": "infinite",
        "RemainingTickets()": "2464",
        "WithdrawCommission()": "infinite",
        "WithdrawWinnings()": "infinite",
        "checkWinningsAmount()": "2418",
        "duration()": "230",
        "expiration()": "2330",
        "getTickets()": "infinite",
        "getWinningsForAddress(address)": "2580",
        "lastWinner()": "2425",
        "lastWinnerAmount()": "2331",
        "lotteryOperator()": "2404",
        "maxTickets()": "251",
        "operatorTotalCommission()": "2329",
        "restartDraw()": "infinite",
        "ticketCommission()": "273",
        "ticketPrice()": "252",
        "tickets(uint256)": "4659",
        "winnings(address)": "2517"
      }
    },
    "legacyAssembly": {
      ".code": [
        {
          "begin": 122,
          "end": 4608,
          "name": "PUSH",
          "source": 1,
          "value": "80"
        },
        {
          "begin": 122,
          "end": 4608,
          "name": "PUSH",
          "source": 1,
          "value": "40"
        },
        {
          "begin": 122,
          "end": 4608,
          "name": "MSTORE",
          "source": 1
        },
        {
          "begin": 642,
          "end": 643,
          "name": "PUSH",
          "source": 1,
          "value": "0"
        },
        {
          "begin": 601,
          "end": 643,
          "name": "PUSH",
          "source": 1,
          "value": "2"
        },
        {
          "begin": 601,
          "end": 643,
          "name": "SSTORE",
          "source": 1
        },
        {
          "begin": 1345,
          "end": 1453,
          "name": "CALLVALUE",
          "source": 1
        },
        {
          "begin": 1345,
          "end": 1453,
          "name": "DUP1",
          "source": 1
        },
        {
          "begin": 1345,
          "end": 1453,
          "name": "ISZERO",
          "source": 1
        },
        {
          "begin": 1345,
          "end": 1453,
          "name": "PUSH [tag]",
          "source": 1,
          "value": "1"
        },
        {
          "begin": 1345,
          "end": 1453,
          "name": "JUMPI",
          "source": 1
        },
        {
          "begin": 1345,
          "end": 1453,
          "name": "PUSH",
          "source": 1,
          "value": "0"
        },
        {
          "begin": 1345,
          "end": 1453,
          "name": "DUP1",
          "source": 1
        },
        {
          "begin": 1345,
          "end": 1453,
          "name": "REVERT",
          "source": 1
        },
        {
          "begin": 1345,
          "end": 1453,
          "name": "tag",
          "source": 1,
          "value": "1"
        },
        {
          "begin": 1345,
          "end": 1453,
          "name": "JUMPDEST",
          "source": 1
        },
        {
          "begin": -1,
          "end": -1,
          "name": "POP",
          "source": -1
        },
        {
          "begin": 1369,
          "end": 1384,
          "name": "PUSH",
          "source": 1,
          "value": "1"
        },
        {
          "begin": 1369,
          "end": 1397,
          "name": "DUP1",
          "source": 1
        },
        {
          "begin": 1369,
          "end": 1397,
          "name": "SLOAD",
          "source": 1
        },
        {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "source": -1,
          "value": "1"
        },
        {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "source": -1,
          "value": "1"
        },
        {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "source": -1,
          "value": "A0"
        },
        {
          "begin": -1,
          "end": -1,
          "name": "SHL",
          "source": -1
        },
        {
          "begin": -1,
          "end": -1,
          "name": "SUB",
          "source": -1
        },
        {
          "begin": -1,
          "end": -1,
          "name": "NOT",
          "source": -1
        },
        {
          "begin": 1369,
          "end": 1397,
          "name": "AND",
          "source": 1
        },
        {
          "begin": 1387,
          "end": 1397,
          "name": "CALLER",
          "source": 1
        },
        {
          "begin": 1369,
          "end": 1397,
          "name": "OR",
          "source": 1
        },
        {
          "begin": 1369,
          "end": 1397,
          "name": "SWAP1",
          "source": 1
        },
        {
          "begin": 1369,
          "end": 1397,
          "name": "SSTORE",
          "source": 1
        },
        {
          "begin": 1420,
          "end": 1446,
          "name": "PUSH [tag]",
          "source": 1,
          "value": "4"
        },
        {
          "begin": 395,
          "end": 405,
          "name": "PUSH",
          "source": 1,
          "value": "708"
        },
        {
          "begin": 1420,
          "end": 1435,
          "name": "TIMESTAMP",
          "source": 1
        },
        {
          "begin": 1420,
          "end": 1446,
          "name": "PUSH [tag]",
          "source": 1,
          "value": "5"
        },
        {
          "begin": 1420,
          "end": 1446,
          "name": "JUMP",
          "source": 1,
          "value": "[in]"
        },
        {
          "begin": 1420,
          "end": 1446,
          "name": "tag",
          "source": 1,
          "value": "4"
        },
        {
          "begin": 1420,
          "end": 1446,
          "name": "JUMPDEST",
          "source": 1
        },
        {
          "begin": 1407,
          "end": 1417,
          "name": "PUSH",
          "source": 1,
          "value": "0"
        },
        {
          "begin": 1407,
          "end": 1446,
          "name": "SSTORE",
          "source": 1
        },
        {
          "begin": 122,
          "end": 4608,
          "name": "PUSH [tag]",
          "source": 1,
          "value": "7"
        },
        {
          "begin": 122,
          "end": 4608,
          "name": "JUMP",
          "source": 1
        },
        {
          "begin": 14,
          "end": 239,
          "name": "tag",
          "source": 2,
          "value": "5"
        },
        {
          "begin": 14,
          "end": 239,
          "name": "JUMPDEST",
          "source": 2
        },
        {
          "begin": 54,
          "end": 57,
          "name": "PUSH",
          "source": 2,
          "value": "0"
        },
        {
          "begin": 85,
          "end": 86,
          "name": "DUP3",
          "source": 2
        },
        {
          "begin": 81,
          "end": 87,
          "name": "NOT",
          "source": 2
        },
        {
          "begin": 78,
          "end": 79,
          "name": "DUP3",
          "source": 2
        },
        {
          "begin": 75,
          "end": 88,
          "name": "GT",
          "source": 2
        },
        {
          "begin": 72,
          "end": 208,
          "name": "ISZERO",
          "source": 2
        },
        {
          "begin": 72,
          "end": 208,
          "name": "PUSH [tag]",
          "source": 2,
          "value": "9"
        },
        {
          "begin": 72,
          "end": 208,
          "name": "JUMPI",
          "source": 2
        },
        {
          "begin": 130,
          "end": 140,
          "name": "PUSH",
          "source": 2,
          "value": "4E487B71"
        },
        {
          "begin": 125,
          "end": 128,
          "name": "PUSH",
          "source": 2,
          "value": "E0"
        },
        {
          "begin": 121,
          "end": 141,
          "name": "SHL",
          "source": 2
        },
        {
          "begin": 118,
          "end": 119,
          "name": "PUSH",
          "source": 2,
          "value": "0"
        },
        {
          "begin": 111,
          "end": 142,
          "name": "MSTORE",
          "source": 2
        },
        {
          "begin": 165,
          "end": 169,
          "name": "PUSH",
          "source": 2,
          "value": "11"
        },
        {
          "begin": 162,
          "end": 163,
          "name": "PUSH",
          "source": 2,
          "value": "4"
        },
        {
          "begin": 155,
          "end": 170,
          "name": "MSTORE",
          "source": 2
        },
        {
          "begin": 193,
          "end": 197,
          "name": "PUSH",
          "source": 2,
          "value": "24"
        },
        {
          "begin": 190,
          "end": 191,
          "name": "PUSH",
          "source": 2,
          "value": "0"
        },
        {
          "begin": 183,
          "end": 198,
          "name": "REVERT",
          "source": 2
        },
        {
          "begin": 72,
          "end": 208,
          "name": "tag",
          "source": 2,
          "value": "9"
        },
        {
          "begin": 72,
          "end": 208,
          "name": "JUMPDEST",
          "source": 2
        },
        {
          "begin": -1,
          "end": -1,
          "name": "POP",
          "source": -1
        },
        {
          "begin": 224,
          "end": 233,
          "name": "ADD",
          "source": 2
        },
        {
          "begin": 224,
          "end": 233,
          "name": "SWAP1",
          "source": 2
        },
        {
          "begin": 14,
          "end": 239,
          "name": "JUMP",
          "source": 2,
          "value": "[out]"
        },
        {
          "begin": 14,
          "end": 239,
          "name": "tag",
          "source": 2,
          "value": "7"
        },
        {
          "begin": 14,
          "end": 239,
          "name": "JUMPDEST",
          "source": 2
        },
        {
          "begin": 122,
          "end": 4608,
          "name": "PUSH #[$]",
          "source": 1,
          "value": "0000000000000000000000000000000000000000000000000000000000000000"
        },
        {
          "begin": 122,
          "end": 4608,
          "name": "DUP1",
          "source": 1
        },
        {
          "begin": 122,
          "end": 4608,
          "name": "PUSH [$]",
          "source": 1,
          "value": "0000000000000000000000000000000000000000000000000000000000000000"
        },
        {
          "begin": 122,
          "end": 4608,
          "name": "PUSH",
          "source": 1,
          "value": "0"
        },
        {
          "begin": 122,
          "end": 4608,
          "name": "CODECOPY",
          "source": 1
        },
        {
          "begin": 122,
          "end": 4608,
          "name": "PUSH",
          "source": 1,
          "value": "0"
        },
        {
          "begin": 122,
          "end": 4608,
          "name": "RETURN",
          "source": 1
        }
      ],
      ".data": {
        "0": {
          ".auxdata": "a2646970667358221220fbeb4d821f985f9cd668e990c7177aa76a87c75127a993d4b4370139268fb3ff64736f6c634300080d0033",
          ".code": [
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "80"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "CALLDATASIZE",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "LT",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "1"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "CALLDATALOAD",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "E0"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "SHR",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "71827B7B"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "GT",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "25"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "BA946D79"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "GT",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "26"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "EA3A1499"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "GT",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "27"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "EA3A1499"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "22"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "F2613269"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "23"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "FE188184"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "24"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "tag",
              "source": 1,
              "value": "27"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "BA946D79"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "19"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "C6944FA0"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "DD64E534"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "21"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "tag",
              "source": 1,
              "value": "26"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "96C85EF3"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "GT",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "28"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "96C85EF3"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "16"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "9B894703"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "17"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "A88F4672"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "18"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "tag",
              "source": 1,
              "value": "28"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "71827B7B"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "13"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "91D8B14E"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "14"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "93A563B5"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "15"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "tag",
              "source": 1,
              "value": "25"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "4665096D"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "GT",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "29"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "50B44712"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "GT",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "30"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "50B44712"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "10"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "5A58ACDD"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "11"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "6032A4F9"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "12"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "tag",
              "source": 1,
              "value": "30"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "4665096D"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "7"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "4788AF7C"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "8"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "4ED02622"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "9"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "tag",
              "source": 1,
              "value": "29"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "FB5A6B4"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "GT",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "31"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "FB5A6B4"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "1209B1F6"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "5"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "35580DF2"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "tag",
              "source": 1,
              "value": "31"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "6F7F3BF"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "2"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "789C607"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "3"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "tag",
              "source": 1,
              "value": "1"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 122,
              "end": 4608,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "tag",
              "source": 1,
              "value": "2"
            },
            {
              "begin": 746,
              "end": 777,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "32"
            },
            {
              "begin": 746,
              "end": 777,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 746,
              "end": 777,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "tag",
              "source": 1,
              "value": "32"
            },
            {
              "begin": 746,
              "end": 777,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "33"
            },
            {
              "begin": 746,
              "end": 777,
              "name": "PUSH",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 746,
              "end": 777,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "JUMP",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "tag",
              "source": 1,
              "value": "33"
            },
            {
              "begin": 746,
              "end": 777,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 746,
              "end": 777,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": 160,
              "end": 185,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 160,
              "end": 185,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 160,
              "end": 185,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 148,
              "end": 150,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 133,
              "end": 151,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 746,
              "end": 777,
              "name": "tag",
              "source": 1,
              "value": "35"
            },
            {
              "begin": 746,
              "end": 777,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 746,
              "end": 777,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "SUB",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 746,
              "end": 777,
              "name": "RETURN",
              "source": 1
            },
            {
              "begin": 3219,
              "end": 3427,
              "name": "tag",
              "source": 1,
              "value": "3"
            },
            {
              "begin": 3219,
              "end": 3427,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3219,
              "end": 3427,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 3219,
              "end": 3427,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3219,
              "end": 3427,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 3219,
              "end": 3427,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "37"
            },
            {
              "begin": 3219,
              "end": 3427,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 3219,
              "end": 3427,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3219,
              "end": 3427,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3219,
              "end": 3427,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 3219,
              "end": 3427,
              "name": "tag",
              "source": 1,
              "value": "37"
            },
            {
              "begin": 3219,
              "end": 3427,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 3323,
              "end": 3333,
              "name": "CALLER",
              "source": 1
            },
            {
              "begin": 3271,
              "end": 3278,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3371,
              "end": 3387,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 3371,
              "end": 3387,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 3371,
              "end": 3387,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 3371,
              "end": 3379,
              "name": "PUSH",
              "source": 1,
              "value": "5"
            },
            {
              "begin": 3371,
              "end": 3387,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 3371,
              "end": 3387,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 3371,
              "end": 3387,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 3371,
              "end": 3387,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 3371,
              "end": 3387,
              "name": "KECCAK256",
              "source": 1
            },
            {
              "begin": 3371,
              "end": 3387,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 3219,
              "end": 3427,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "33"
            },
            {
              "begin": 3219,
              "end": 3427,
              "name": "JUMP",
              "source": 1
            },
            {
              "begin": 360,
              "end": 405,
              "name": "tag",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 360,
              "end": 405,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 360,
              "end": 405,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 360,
              "end": 405,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 360,
              "end": 405,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 360,
              "end": 405,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "41"
            },
            {
              "begin": 360,
              "end": 405,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 360,
              "end": 405,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 360,
              "end": 405,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 360,
              "end": 405,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 360,
              "end": 405,
              "name": "tag",
              "source": 1,
              "value": "41"
            },
            {
              "begin": 360,
              "end": 405,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 360,
              "end": 405,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 360,
              "end": 405,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "33"
            },
            {
              "begin": 395,
              "end": 405,
              "name": "PUSH",
              "source": 1,
              "value": "708"
            },
            {
              "begin": 360,
              "end": 405,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 360,
              "end": 405,
              "name": "JUMP",
              "source": 1
            },
            {
              "begin": 145,
              "end": 193,
              "name": "tag",
              "source": 1,
              "value": "5"
            },
            {
              "begin": 145,
              "end": 193,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 145,
              "end": 193,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 145,
              "end": 193,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 145,
              "end": 193,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 145,
              "end": 193,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "45"
            },
            {
              "begin": 145,
              "end": 193,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 145,
              "end": 193,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 145,
              "end": 193,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 145,
              "end": 193,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 145,
              "end": 193,
              "name": "tag",
              "source": 1,
              "value": "45"
            },
            {
              "begin": 145,
              "end": 193,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 145,
              "end": 193,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 145,
              "end": 193,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "33"
            },
            {
              "begin": 183,
              "end": 193,
              "name": "PUSH",
              "source": 1,
              "value": "2386F26FC10000"
            },
            {
              "begin": 145,
              "end": 193,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 145,
              "end": 193,
              "name": "JUMP",
              "source": 1
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "tag",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "49"
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "tag",
              "source": 1,
              "value": "49"
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "50"
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "51"
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "tag",
              "source": 1,
              "value": "50"
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "STOP",
              "source": 1
            },
            {
              "begin": 448,
              "end": 473,
              "name": "tag",
              "source": 1,
              "value": "7"
            },
            {
              "begin": 448,
              "end": 473,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 448,
              "end": 473,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 448,
              "end": 473,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 448,
              "end": 473,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 448,
              "end": 473,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "52"
            },
            {
              "begin": 448,
              "end": 473,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 448,
              "end": 473,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 448,
              "end": 473,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 448,
              "end": 473,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 448,
              "end": 473,
              "name": "tag",
              "source": 1,
              "value": "52"
            },
            {
              "begin": 448,
              "end": 473,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 448,
              "end": 473,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 448,
              "end": 473,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "33"
            },
            {
              "begin": 448,
              "end": 473,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 448,
              "end": 473,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 448,
              "end": 473,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 448,
              "end": 473,
              "name": "JUMP",
              "source": 1
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "tag",
              "source": 1,
              "value": "8"
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "56"
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "tag",
              "source": 1,
              "value": "56"
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "50"
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "58"
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "tag",
              "source": 1,
              "value": "9"
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "59"
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "tag",
              "source": 1,
              "value": "59"
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "60"
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "61"
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "tag",
              "source": 1,
              "value": "60"
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "35"
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "63"
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "tag",
              "source": 1,
              "value": "10"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "64"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "tag",
              "source": 1,
              "value": "64"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "65"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "66"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "CALLDATASIZE",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "PUSH",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "67"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "tag",
              "source": 1,
              "value": "66"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "68"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "tag",
              "source": 1,
              "value": "65"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "A0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SUB",
              "source": -1
            },
            {
              "begin": 1231,
              "end": 1286,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 1231,
              "end": 1286,
              "name": "SWAP2",
              "source": 2
            },
            {
              "begin": 1231,
              "end": 1286,
              "name": "AND",
              "source": 2
            },
            {
              "begin": 1213,
              "end": 1287,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 1213,
              "end": 1287,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 1201,
              "end": 1203,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 1186,
              "end": 1204,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 912,
              "end": 936,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "35"
            },
            {
              "begin": 1067,
              "end": 1293,
              "name": "JUMP",
              "source": 2
            },
            {
              "begin": 536,
              "end": 566,
              "name": "tag",
              "source": 1,
              "value": "11"
            },
            {
              "begin": 536,
              "end": 566,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 536,
              "end": 566,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 536,
              "end": 566,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 536,
              "end": 566,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 536,
              "end": 566,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "71"
            },
            {
              "begin": 536,
              "end": 566,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 536,
              "end": 566,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 536,
              "end": 566,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 536,
              "end": 566,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 536,
              "end": 566,
              "name": "tag",
              "source": 1,
              "value": "71"
            },
            {
              "begin": 536,
              "end": 566,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 536,
              "end": 566,
              "name": "PUSH",
              "source": 1,
              "value": "1"
            },
            {
              "begin": 536,
              "end": 566,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 536,
              "end": 566,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "65"
            },
            {
              "begin": 536,
              "end": 566,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "A0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SUB",
              "source": -1
            },
            {
              "begin": 536,
              "end": 566,
              "name": "AND",
              "source": 1
            },
            {
              "begin": 536,
              "end": 566,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 536,
              "end": 566,
              "name": "JUMP",
              "source": 1
            },
            {
              "begin": 276,
              "end": 330,
              "name": "tag",
              "source": 1,
              "value": "12"
            },
            {
              "begin": 276,
              "end": 330,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 276,
              "end": 330,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 276,
              "end": 330,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 276,
              "end": 330,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 276,
              "end": 330,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "75"
            },
            {
              "begin": 276,
              "end": 330,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 276,
              "end": 330,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 276,
              "end": 330,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 276,
              "end": 330,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 276,
              "end": 330,
              "name": "tag",
              "source": 1,
              "value": "75"
            },
            {
              "begin": 276,
              "end": 330,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 276,
              "end": 330,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 276,
              "end": 330,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "33"
            },
            {
              "begin": 319,
              "end": 330,
              "name": "PUSH",
              "source": 1,
              "value": "38D7EA4C68000"
            },
            {
              "begin": 276,
              "end": 330,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 276,
              "end": 330,
              "name": "JUMP",
              "source": 1
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "tag",
              "source": 1,
              "value": "13"
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "79"
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "tag",
              "source": 1,
              "value": "79"
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "50"
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "81"
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 1706,
              "end": 2277,
              "name": "tag",
              "source": 1,
              "value": "14"
            },
            {
              "begin": 1706,
              "end": 2277,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1706,
              "end": 2277,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "50"
            },
            {
              "begin": 1706,
              "end": 2277,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "83"
            },
            {
              "begin": 1706,
              "end": 2277,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "tag",
              "source": 1,
              "value": "15"
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "84"
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "tag",
              "source": 1,
              "value": "84"
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "33"
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "86"
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 4276,
              "end": 4371,
              "name": "tag",
              "source": 1,
              "value": "16"
            },
            {
              "begin": 4276,
              "end": 4371,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 4276,
              "end": 4371,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 4276,
              "end": 4371,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 4276,
              "end": 4371,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 4276,
              "end": 4371,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "88"
            },
            {
              "begin": 4276,
              "end": 4371,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 4276,
              "end": 4371,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 4276,
              "end": 4371,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 4276,
              "end": 4371,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 4276,
              "end": 4371,
              "name": "tag",
              "source": 1,
              "value": "88"
            },
            {
              "begin": 4276,
              "end": 4371,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 4349,
              "end": 4359,
              "name": "CALLER",
              "source": 1
            },
            {
              "begin": 4317,
              "end": 4321,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 4340,
              "end": 4348,
              "name": "PUSH",
              "source": 1,
              "value": "5"
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "KECCAK256",
              "source": 1
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 4340,
              "end": 4364,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 4340,
              "end": 4364,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 4276,
              "end": 4371,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 4276,
              "end": 4371,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": 1463,
              "end": 1477,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 1463,
              "end": 1477,
              "name": "ISZERO",
              "source": 2
            },
            {
              "begin": 1456,
              "end": 1478,
              "name": "ISZERO",
              "source": 2
            },
            {
              "begin": 1438,
              "end": 1479,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 1438,
              "end": 1479,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 1426,
              "end": 1428,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 1411,
              "end": 1429,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 4276,
              "end": 4371,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "35"
            },
            {
              "begin": 1298,
              "end": 1485,
              "name": "JUMP",
              "source": 2
            },
            {
              "begin": 199,
              "end": 239,
              "name": "tag",
              "source": 1,
              "value": "17"
            },
            {
              "begin": 199,
              "end": 239,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 199,
              "end": 239,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 199,
              "end": 239,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 199,
              "end": 239,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 199,
              "end": 239,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "93"
            },
            {
              "begin": 199,
              "end": 239,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 199,
              "end": 239,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 199,
              "end": 239,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 199,
              "end": 239,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 199,
              "end": 239,
              "name": "tag",
              "source": 1,
              "value": "93"
            },
            {
              "begin": 199,
              "end": 239,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 199,
              "end": 239,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 199,
              "end": 239,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "33"
            },
            {
              "begin": 236,
              "end": 239,
              "name": "PUSH",
              "source": 1,
              "value": "64"
            },
            {
              "begin": 199,
              "end": 239,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 199,
              "end": 239,
              "name": "JUMP",
              "source": 1
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "tag",
              "source": 1,
              "value": "18"
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "97"
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "tag",
              "source": 1,
              "value": "97"
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "50"
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "99"
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 601,
              "end": 643,
              "name": "tag",
              "source": 1,
              "value": "19"
            },
            {
              "begin": 601,
              "end": 643,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 601,
              "end": 643,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 601,
              "end": 643,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 601,
              "end": 643,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 601,
              "end": 643,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "100"
            },
            {
              "begin": 601,
              "end": 643,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 601,
              "end": 643,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 601,
              "end": 643,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 601,
              "end": 643,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 601,
              "end": 643,
              "name": "tag",
              "source": 1,
              "value": "100"
            },
            {
              "begin": 601,
              "end": 643,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 601,
              "end": 643,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 601,
              "end": 643,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "33"
            },
            {
              "begin": 601,
              "end": 643,
              "name": "PUSH",
              "source": 1,
              "value": "2"
            },
            {
              "begin": 601,
              "end": 643,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 601,
              "end": 643,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 601,
              "end": 643,
              "name": "JUMP",
              "source": 1
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "tag",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "104"
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "tag",
              "source": 1,
              "value": "104"
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "33"
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "106"
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "tag",
              "source": 1,
              "value": "21"
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "108"
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "tag",
              "source": 1,
              "value": "108"
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "33"
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "110"
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "CALLDATASIZE",
              "source": 1
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "PUSH",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "111"
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "tag",
              "source": 1,
              "value": "110"
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "A0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SUB",
              "source": -1
            },
            {
              "begin": 1679,
              "end": 1693,
              "name": "AND",
              "source": 1
            },
            {
              "begin": 1653,
              "end": 1660,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 1679,
              "end": 1693,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1679,
              "end": 1693,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 1679,
              "end": 1693,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 1679,
              "end": 1687,
              "name": "PUSH",
              "source": 1,
              "value": "5"
            },
            {
              "begin": 1679,
              "end": 1693,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 1679,
              "end": 1693,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 1679,
              "end": 1693,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 1679,
              "end": 1693,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1679,
              "end": 1693,
              "name": "KECCAK256",
              "source": 1
            },
            {
              "begin": 1679,
              "end": 1693,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 1679,
              "end": 1693,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1587,
              "end": 1700,
              "name": "JUMP",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "tag",
              "source": 1,
              "value": "22"
            },
            {
              "begin": 825,
              "end": 868,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "114"
            },
            {
              "begin": 825,
              "end": 868,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 825,
              "end": 868,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "tag",
              "source": 1,
              "value": "114"
            },
            {
              "begin": 825,
              "end": 868,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "33"
            },
            {
              "begin": 825,
              "end": 868,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "116"
            },
            {
              "begin": 825,
              "end": 868,
              "name": "CALLDATASIZE",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "PUSH",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 825,
              "end": 868,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "111"
            },
            {
              "begin": 825,
              "end": 868,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 825,
              "end": 868,
              "name": "tag",
              "source": 1,
              "value": "116"
            },
            {
              "begin": 825,
              "end": 868,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "PUSH",
              "source": 1,
              "value": "5"
            },
            {
              "begin": 825,
              "end": 868,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 825,
              "end": 868,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 825,
              "end": 868,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 825,
              "end": 868,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "KECCAK256",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 825,
              "end": 868,
              "name": "JUMP",
              "source": 1
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "tag",
              "source": 1,
              "value": "23"
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "119"
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "tag",
              "source": 1,
              "value": "119"
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "50"
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "121"
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 681,
              "end": 706,
              "name": "tag",
              "source": 1,
              "value": "24"
            },
            {
              "begin": 681,
              "end": 706,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 681,
              "end": 706,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 681,
              "end": 706,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 681,
              "end": 706,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 681,
              "end": 706,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "122"
            },
            {
              "begin": 681,
              "end": 706,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 681,
              "end": 706,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 681,
              "end": 706,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 681,
              "end": 706,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 681,
              "end": 706,
              "name": "tag",
              "source": 1,
              "value": "122"
            },
            {
              "begin": 681,
              "end": 706,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 681,
              "end": 706,
              "name": "PUSH",
              "source": 1,
              "value": "3"
            },
            {
              "begin": 681,
              "end": 706,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 681,
              "end": 706,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "65"
            },
            {
              "begin": 681,
              "end": 706,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "A0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SUB",
              "source": -1
            },
            {
              "begin": 681,
              "end": 706,
              "name": "AND",
              "source": 1
            },
            {
              "begin": 681,
              "end": 706,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 681,
              "end": 706,
              "name": "JUMP",
              "source": 1
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "tag",
              "source": 1,
              "value": "51"
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1099,
              "end": 1114,
              "name": "PUSH",
              "source": 1,
              "value": "1"
            },
            {
              "begin": 1099,
              "end": 1114,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "A0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SUB",
              "source": -1
            },
            {
              "begin": 1099,
              "end": 1114,
              "name": "AND",
              "source": 1
            },
            {
              "begin": 1085,
              "end": 1095,
              "name": "CALLER",
              "source": 1
            },
            {
              "begin": 1085,
              "end": 1114,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "128"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "461BCD"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "E5"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 2006,
              "end": 2008,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "PUSH",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 1988,
              "end": 2009,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 2045,
              "end": 2047,
              "name": "PUSH",
              "source": 2,
              "value": "22"
            },
            {
              "begin": 2025,
              "end": 2043,
              "name": "PUSH",
              "source": 2,
              "value": "24"
            },
            {
              "begin": 2025,
              "end": 2043,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 2025,
              "end": 2043,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 2018,
              "end": 2048,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 2084,
              "end": 2118,
              "name": "PUSH",
              "source": 2,
              "value": "43616C6C6572206973206E6F7420746865206C6F7474657279206F7065726174"
            },
            {
              "begin": 2064,
              "end": 2082,
              "name": "PUSH",
              "source": 2,
              "value": "44"
            },
            {
              "begin": 2064,
              "end": 2082,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 2064,
              "end": 2082,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 2057,
              "end": 2119,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "37B9"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "F1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": 2135,
              "end": 2153,
              "name": "PUSH",
              "source": 2,
              "value": "64"
            },
            {
              "begin": 2135,
              "end": 2153,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 2135,
              "end": 2153,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 2128,
              "end": 2160,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 2177,
              "end": 2196,
              "name": "PUSH",
              "source": 2,
              "value": "84"
            },
            {
              "begin": 2177,
              "end": 2196,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "tag",
              "source": 1,
              "value": "129"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "SUB",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "tag",
              "source": 1,
              "value": "128"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 4154,
              "end": 4177,
              "name": "PUSH",
              "source": 1,
              "value": "2"
            },
            {
              "begin": 4154,
              "end": 4177,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 4154,
              "end": 4177,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 4067,
              "end": 4091,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 4187,
              "end": 4214,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 4187,
              "end": 4214,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 4187,
              "end": 4214,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 4187,
              "end": 4214,
              "name": "SSTORE",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": 4102,
              "end": 4112,
              "name": "CALLER",
              "source": 1
            },
            {
              "begin": 4102,
              "end": 4112,
              "name": "SWAP3",
              "source": 1
            },
            {
              "begin": 4102,
              "end": 4112,
              "name": "DUP4",
              "source": 1
            },
            {
              "begin": 4102,
              "end": 4112,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "DUP4",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "PUSH",
              "source": 1,
              "value": "8FC"
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "MUL",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 4154,
              "end": 4177,
              "name": "DUP5",
              "source": 1
            },
            {
              "begin": 4154,
              "end": 4177,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 4067,
              "end": 4091,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 4154,
              "end": 4177,
              "name": "DUP6",
              "source": 1
            },
            {
              "begin": 4102,
              "end": 4112,
              "name": "DUP9",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "DUP9",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "CALL",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "SWAP4",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "133"
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "RETURNDATASIZE",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "RETURNDATACOPY",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "RETURNDATASIZE",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "tag",
              "source": 1,
              "value": "133"
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 4225,
              "end": 4263,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 4057,
              "end": 4270,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 4057,
              "end": 4270,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 4009,
              "end": 4270,
              "name": "JUMP",
              "source": 1,
              "value": "[out]"
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "tag",
              "source": 1,
              "value": "58"
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1099,
              "end": 1114,
              "name": "PUSH",
              "source": 1,
              "value": "1"
            },
            {
              "begin": 1099,
              "end": 1114,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "A0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SUB",
              "source": -1
            },
            {
              "begin": 1099,
              "end": 1114,
              "name": "AND",
              "source": 1
            },
            {
              "begin": 1085,
              "end": 1095,
              "name": "CALLER",
              "source": 1
            },
            {
              "begin": 1085,
              "end": 1114,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "135"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "461BCD"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "E5"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 2006,
              "end": 2008,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "PUSH",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 1988,
              "end": 2009,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 2045,
              "end": 2047,
              "name": "PUSH",
              "source": 2,
              "value": "22"
            },
            {
              "begin": 2025,
              "end": 2043,
              "name": "PUSH",
              "source": 2,
              "value": "24"
            },
            {
              "begin": 2025,
              "end": 2043,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 2025,
              "end": 2043,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 2018,
              "end": 2048,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 2084,
              "end": 2118,
              "name": "PUSH",
              "source": 2,
              "value": "43616C6C6572206973206E6F7420746865206C6F7474657279206F7065726174"
            },
            {
              "begin": 2064,
              "end": 2082,
              "name": "PUSH",
              "source": 2,
              "value": "44"
            },
            {
              "begin": 2064,
              "end": 2082,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 2064,
              "end": 2082,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 2057,
              "end": 2119,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "37B9"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "F1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": 2135,
              "end": 2153,
              "name": "PUSH",
              "source": 2,
              "value": "64"
            },
            {
              "begin": 2135,
              "end": 2153,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 2135,
              "end": 2153,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 2128,
              "end": 2160,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 2177,
              "end": 2196,
              "name": "PUSH",
              "source": 2,
              "value": "84"
            },
            {
              "begin": 2177,
              "end": 2196,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "129"
            },
            {
              "begin": 1804,
              "end": 2202,
              "name": "JUMP",
              "source": 2
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "tag",
              "source": 1,
              "value": "135"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2347,
              "end": 2354,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 2347,
              "end": 2361,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 2339,
              "end": 2395,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "138"
            },
            {
              "begin": 2339,
              "end": 2395,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 2339,
              "end": 2395,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 2339,
              "end": 2395,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "461BCD"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "E5"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": 2339,
              "end": 2395,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 2339,
              "end": 2395,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 2409,
              "end": 2411,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 2339,
              "end": 2395,
              "name": "PUSH",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 2339,
              "end": 2395,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 2339,
              "end": 2395,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 2391,
              "end": 2412,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 2448,
              "end": 2450,
              "name": "PUSH",
              "source": 2,
              "value": "19"
            },
            {
              "begin": 2428,
              "end": 2446,
              "name": "PUSH",
              "source": 2,
              "value": "24"
            },
            {
              "begin": 2428,
              "end": 2446,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 2428,
              "end": 2446,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 2421,
              "end": 2451,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 2487,
              "end": 2514,
              "name": "PUSH",
              "source": 2,
              "value": "4E6F207469636B65747320776572652070757263686173656400000000000000"
            },
            {
              "begin": 2467,
              "end": 2485,
              "name": "PUSH",
              "source": 2,
              "value": "44"
            },
            {
              "begin": 2467,
              "end": 2485,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 2467,
              "end": 2485,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 2460,
              "end": 2515,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 2532,
              "end": 2550,
              "name": "PUSH",
              "source": 2,
              "value": "64"
            },
            {
              "begin": 2532,
              "end": 2550,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 2339,
              "end": 2395,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "129"
            },
            {
              "begin": 2207,
              "end": 2556,
              "name": "JUMP",
              "source": 2
            },
            {
              "begin": 2339,
              "end": 2395,
              "name": "tag",
              "source": 1,
              "value": "138"
            },
            {
              "begin": 2339,
              "end": 2395,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2451,
              "end": 2458,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 2451,
              "end": 2465,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 2406,
              "end": 2423,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 2406,
              "end": 2423,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2436,
              "end": 2465,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "141"
            },
            {
              "begin": 2436,
              "end": 2465,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2436,
              "end": 2448,
              "name": "NUMBER",
              "source": 1
            },
            {
              "begin": 2436,
              "end": 2465,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "142"
            },
            {
              "begin": 2436,
              "end": 2465,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 2436,
              "end": 2465,
              "name": "tag",
              "source": 1,
              "value": "141"
            },
            {
              "begin": 2436,
              "end": 2465,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": 2547,
              "end": 2562,
              "name": "TIMESTAMP",
              "source": 1
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 2980,
              "end": 2999,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 2426,
              "end": 2466,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 2426,
              "end": 2466,
              "name": "BLOCKHASH",
              "source": 1
            },
            {
              "begin": 3015,
              "end": 3027,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 3015,
              "end": 3027,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 3015,
              "end": 3027,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 3008,
              "end": 3036,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 3008,
              "end": 3036,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 3008,
              "end": 3036,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 2426,
              "end": 2466,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 2476,
              "end": 2496,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 2476,
              "end": 2496,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 3052,
              "end": 3064,
              "name": "PUSH",
              "source": 2,
              "value": "60"
            },
            {
              "begin": 3052,
              "end": 3064,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1F"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "NOT",
              "source": -1
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "DUP5",
              "source": 1
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "SUB",
              "source": 1
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 2520,
              "end": 2575,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 2520,
              "end": 2575,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": 2530,
              "end": 2574,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 2520,
              "end": 2575,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2520,
              "end": 2575,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 2520,
              "end": 2575,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 2520,
              "end": 2575,
              "name": "KECCAK256",
              "source": 1
            },
            {
              "begin": 2634,
              "end": 2641,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 2634,
              "end": 2648,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 2520,
              "end": 2575,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2520,
              "end": 2575,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 2499,
              "end": 2585,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 2499,
              "end": 2585,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2619,
              "end": 2648,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "145"
            },
            {
              "begin": 2619,
              "end": 2648,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2520,
              "end": 2575,
              "name": "DUP4",
              "source": 1
            },
            {
              "begin": 2619,
              "end": 2648,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "146"
            },
            {
              "begin": 2619,
              "end": 2648,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 2619,
              "end": 2648,
              "name": "tag",
              "source": 1,
              "value": "145"
            },
            {
              "begin": 2619,
              "end": 2648,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2595,
              "end": 2648,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2595,
              "end": 2648,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 2659,
              "end": 2673,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 2676,
              "end": 2683,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 2684,
              "end": 2697,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "LT",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "148"
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "148"
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "149"
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "tag",
              "source": 1,
              "value": "148"
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "KECCAK256",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 2708,
              "end": 2718,
              "name": "PUSH",
              "source": 1,
              "value": "3"
            },
            {
              "begin": 2708,
              "end": 2727,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 2708,
              "end": 2727,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "NOT",
              "source": -1
            },
            {
              "begin": 2708,
              "end": 2727,
              "name": "AND",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "A0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SUB",
              "source": -1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "SWAP3",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "AND",
              "source": 1
            },
            {
              "begin": 2708,
              "end": 2727,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 2708,
              "end": 2727,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 2708,
              "end": 2727,
              "name": "OR",
              "source": 1
            },
            {
              "begin": 2708,
              "end": 2727,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2708,
              "end": 2727,
              "name": "SSTORE",
              "source": 1
            },
            {
              "begin": 2676,
              "end": 2698,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 2776,
              "end": 2806,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "151"
            },
            {
              "begin": 319,
              "end": 330,
              "name": "PUSH",
              "source": 1,
              "value": "38D7EA4C68000"
            },
            {
              "begin": 183,
              "end": 193,
              "name": "PUSH",
              "source": 1,
              "value": "2386F26FC10000"
            },
            {
              "begin": 2776,
              "end": 2806,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "142"
            },
            {
              "begin": 2776,
              "end": 2806,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 2776,
              "end": 2806,
              "name": "tag",
              "source": 1,
              "value": "151"
            },
            {
              "begin": 2776,
              "end": 2806,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2758,
              "end": 2765,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 2758,
              "end": 2772,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 2758,
              "end": 2807,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "152"
            },
            {
              "begin": 2758,
              "end": 2807,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 2758,
              "end": 2807,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2758,
              "end": 2807,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "153"
            },
            {
              "begin": 2758,
              "end": 2807,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 2758,
              "end": 2807,
              "name": "tag",
              "source": 1,
              "value": "152"
            },
            {
              "begin": 2758,
              "end": 2807,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "A0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SUB",
              "source": -1
            },
            {
              "begin": 2737,
              "end": 2753,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2753,
              "name": "AND",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2753,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 2737,
              "end": 2753,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2753,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2753,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2745,
              "name": "PUSH",
              "source": 1,
              "value": "5"
            },
            {
              "begin": 2737,
              "end": 2753,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 2737,
              "end": 2753,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2753,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 2737,
              "end": 2753,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2753,
              "name": "KECCAK256",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2808,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2808,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2753,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2753,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2753,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2808,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "154"
            },
            {
              "begin": 2737,
              "end": 2808,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2808,
              "name": "DUP5",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2808,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2808,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "155"
            },
            {
              "begin": 2737,
              "end": 2808,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 2737,
              "end": 2808,
              "name": "tag",
              "source": 1,
              "value": "154"
            },
            {
              "begin": 2737,
              "end": 2808,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2808,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2808,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 2737,
              "end": 2808,
              "name": "SSTORE",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "A0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SUB",
              "source": -1
            },
            {
              "begin": 2837,
              "end": 2853,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 2837,
              "end": 2853,
              "name": "AND",
              "source": 1
            },
            {
              "begin": 2837,
              "end": 2853,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 2837,
              "end": 2853,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2837,
              "end": 2853,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 2837,
              "end": 2853,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 2837,
              "end": 2845,
              "name": "PUSH",
              "source": 1,
              "value": "5"
            },
            {
              "begin": 2837,
              "end": 2853,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 2837,
              "end": 2853,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 2837,
              "end": 2853,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 2837,
              "end": 2853,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2837,
              "end": 2853,
              "name": "KECCAK256",
              "source": 1
            },
            {
              "begin": 2837,
              "end": 2853,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 2818,
              "end": 2834,
              "name": "PUSH",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 2818,
              "end": 2853,
              "name": "SSTORE",
              "source": 1
            },
            {
              "begin": 2891,
              "end": 2898,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 2891,
              "end": 2905,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 2891,
              "end": 2924,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "156"
            },
            {
              "begin": 2891,
              "end": 2924,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 319,
              "end": 330,
              "name": "PUSH",
              "source": 1,
              "value": "38D7EA4C68000"
            },
            {
              "begin": 319,
              "end": 330,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2891,
              "end": 2924,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "153"
            },
            {
              "begin": 2891,
              "end": 2924,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 2891,
              "end": 2924,
              "name": "tag",
              "source": 1,
              "value": "156"
            },
            {
              "begin": 2891,
              "end": 2924,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2863,
              "end": 2886,
              "name": "PUSH",
              "source": 1,
              "value": "2"
            },
            {
              "begin": 2863,
              "end": 2886,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 2863,
              "end": 2925,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 2863,
              "end": 2925,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 2863,
              "end": 2925,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 2863,
              "end": 2925,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "157"
            },
            {
              "begin": 2863,
              "end": 2925,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 2863,
              "end": 2925,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2863,
              "end": 2925,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "155"
            },
            {
              "begin": 2863,
              "end": 2925,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 2863,
              "end": 2925,
              "name": "tag",
              "source": 1,
              "value": "157"
            },
            {
              "begin": 2863,
              "end": 2925,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2863,
              "end": 2925,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2863,
              "end": 2925,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 2863,
              "end": 2925,
              "name": "SSTORE",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 2935,
              "end": 2949,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "158"
            },
            {
              "begin": 2935,
              "end": 2949,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 2942,
              "end": 2949,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 2942,
              "end": 2949,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 2935,
              "end": 2949,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "159"
            },
            {
              "begin": 2935,
              "end": 2949,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 2935,
              "end": 2949,
              "name": "tag",
              "source": 1,
              "value": "158"
            },
            {
              "begin": 2935,
              "end": 2949,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2972,
              "end": 2998,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "160"
            },
            {
              "begin": 395,
              "end": 405,
              "name": "PUSH",
              "source": 1,
              "value": "708"
            },
            {
              "begin": 2972,
              "end": 2987,
              "name": "TIMESTAMP",
              "source": 1
            },
            {
              "begin": 2972,
              "end": 2998,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "155"
            },
            {
              "begin": 2972,
              "end": 2998,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 2972,
              "end": 2998,
              "name": "tag",
              "source": 1,
              "value": "160"
            },
            {
              "begin": 2972,
              "end": 2998,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2959,
              "end": 2969,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 2959,
              "end": 2998,
              "name": "SSTORE",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 2283,
              "end": 3005,
              "name": "JUMP",
              "source": 1,
              "value": "[out]"
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "tag",
              "source": 1,
              "value": "61"
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1532,
              "end": 1548,
              "name": "PUSH",
              "source": 1,
              "value": "60"
            },
            {
              "begin": 1567,
              "end": 1574,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "MUL",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "SWAP3",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "162"
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "MUL",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "KECCAK256",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "tag",
              "source": 1,
              "value": "163"
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "A0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SUB",
              "source": -1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "AND",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "PUSH",
              "source": 1,
              "value": "1"
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "DUP4",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "GT",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "163"
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "tag",
              "source": 1,
              "value": "162"
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1560,
              "end": 1574,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1489,
              "end": 1581,
              "name": "JUMP",
              "source": 1,
              "value": "[out]"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "tag",
              "source": 1,
              "value": "68"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "LT",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "164"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "tag",
              "source": 1,
              "value": "164"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 912,
              "end": 936,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "KECCAK256",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "A0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SUB",
              "source": -1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "AND",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 912,
              "end": 936,
              "name": "JUMP",
              "source": 1,
              "value": "[out]"
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "tag",
              "source": 1,
              "value": "81"
            },
            {
              "begin": 3433,
              "end": 3664,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 4349,
              "end": 4359,
              "name": "CALLER",
              "source": 1
            },
            {
              "begin": 4317,
              "end": 4321,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 4340,
              "end": 4348,
              "name": "PUSH",
              "source": 1,
              "value": "5"
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "KECCAK256",
              "source": 1
            },
            {
              "begin": 4340,
              "end": 4360,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 1276,
              "end": 1321,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "168"
            },
            {
              "begin": 1276,
              "end": 1321,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 1276,
              "end": 1321,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 1276,
              "end": 1321,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "461BCD"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "E5"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": 1276,
              "end": 1321,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 1276,
              "end": 1321,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 3964,
              "end": 3966,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 1276,
              "end": 1321,
              "name": "PUSH",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 1276,
              "end": 1321,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 1276,
              "end": 1321,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 3946,
              "end": 3967,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 4003,
              "end": 4005,
              "name": "PUSH",
              "source": 2,
              "value": "16"
            },
            {
              "begin": 3983,
              "end": 4001,
              "name": "PUSH",
              "source": 2,
              "value": "24"
            },
            {
              "begin": 3983,
              "end": 4001,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 3983,
              "end": 4001,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 3976,
              "end": 4006,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 4042,
              "end": 4066,
              "name": "PUSH",
              "source": 2,
              "value": "43616C6C6572206973206E6F7420612077696E6E657200000000000000000000"
            },
            {
              "begin": 4022,
              "end": 4040,
              "name": "PUSH",
              "source": 2,
              "value": "44"
            },
            {
              "begin": 4022,
              "end": 4040,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 4022,
              "end": 4040,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 4015,
              "end": 4067,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 4084,
              "end": 4102,
              "name": "PUSH",
              "source": 2,
              "value": "64"
            },
            {
              "begin": 4084,
              "end": 4102,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 1276,
              "end": 1321,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "129"
            },
            {
              "begin": 3762,
              "end": 4108,
              "name": "JUMP",
              "source": 2
            },
            {
              "begin": 1276,
              "end": 1321,
              "name": "tag",
              "source": 1,
              "value": "168"
            },
            {
              "begin": 1276,
              "end": 1321,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3520,
              "end": 3530,
              "name": "CALLER",
              "source": 1
            },
            {
              "begin": 3487,
              "end": 3509,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3568,
              "end": 3584,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 3568,
              "end": 3584,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 3568,
              "end": 3584,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 3568,
              "end": 3576,
              "name": "PUSH",
              "source": 1,
              "value": "5"
            },
            {
              "begin": 3568,
              "end": 3584,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 3568,
              "end": 3584,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 3568,
              "end": 3584,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 3568,
              "end": 3584,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3568,
              "end": 3584,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 3568,
              "end": 3584,
              "name": "KECCAK256",
              "source": 1
            },
            {
              "begin": 3568,
              "end": 3584,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3568,
              "end": 3584,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 3594,
              "end": 3614,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 3594,
              "end": 3614,
              "name": "DUP4",
              "source": 1
            },
            {
              "begin": 3594,
              "end": 3614,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 3594,
              "end": 3614,
              "name": "SSTORE",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": 3568,
              "end": 3584,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 3568,
              "end": 3584,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 3520,
              "end": 3530,
              "name": "DUP4",
              "source": 1
            },
            {
              "begin": 3520,
              "end": 3530,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "DUP4",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "PUSH",
              "source": 1,
              "value": "8FC"
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "MUL",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 3568,
              "end": 3584,
              "name": "DUP5",
              "source": 1
            },
            {
              "begin": 3568,
              "end": 3584,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 3487,
              "end": 3509,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 3568,
              "end": 3584,
              "name": "DUP6",
              "source": 1
            },
            {
              "begin": 3520,
              "end": 3530,
              "name": "DUP9",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "DUP9",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "CALL",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "SWAP4",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "133"
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "RETURNDATASIZE",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "RETURNDATACOPY",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "RETURNDATASIZE",
              "source": 1
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3625,
              "end": 3657,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 1706,
              "end": 2277,
              "name": "tag",
              "source": 1,
              "value": "83"
            },
            {
              "begin": 1706,
              "end": 2277,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1774,
              "end": 1797,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "175"
            },
            {
              "begin": 183,
              "end": 193,
              "name": "PUSH",
              "source": 1,
              "value": "2386F26FC10000"
            },
            {
              "begin": 1774,
              "end": 1783,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 1774,
              "end": 1797,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "146"
            },
            {
              "begin": 1774,
              "end": 1797,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 1774,
              "end": 1797,
              "name": "tag",
              "source": 1,
              "value": "175"
            },
            {
              "begin": 1774,
              "end": 1797,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1774,
              "end": 1802,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 1897,
              "end": 1926,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "176"
            },
            {
              "begin": 183,
              "end": 193,
              "name": "PUSH",
              "source": 1,
              "value": "2386F26FC10000"
            },
            {
              "begin": 1897,
              "end": 1913,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "177"
            },
            {
              "begin": 1897,
              "end": 1926,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 1897,
              "end": 1926,
              "name": "tag",
              "source": 1,
              "value": "176"
            },
            {
              "begin": 1897,
              "end": 1926,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "178"
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "179"
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "tag",
              "source": 1,
              "value": "178"
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "DUP4",
              "source": 1
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "SUB",
              "source": 1
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "SUB",
              "source": 1
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 1816,
              "end": 1966,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 1753,
              "end": 1976,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1753,
              "end": 1976,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "180"
            },
            {
              "begin": 1753,
              "end": 1976,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 1753,
              "end": 1976,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 1753,
              "end": 1976,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "461BCD"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "E5"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": 1753,
              "end": 1976,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 1753,
              "end": 1976,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 1753,
              "end": 1976,
              "name": "PUSH",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 1753,
              "end": 1976,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 1753,
              "end": 1976,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "129"
            },
            {
              "begin": 1753,
              "end": 1976,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 1753,
              "end": 1976,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1753,
              "end": 1976,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "182"
            },
            {
              "begin": 1753,
              "end": 1976,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 1753,
              "end": 1976,
              "name": "tag",
              "source": 1,
              "value": "180"
            },
            {
              "begin": 1753,
              "end": 1976,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 1986,
              "end": 2011,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 2014,
              "end": 2037,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "183"
            },
            {
              "begin": 183,
              "end": 193,
              "name": "PUSH",
              "source": 1,
              "value": "2386F26FC10000"
            },
            {
              "begin": 2014,
              "end": 2023,
              "name": "CALLVALUE",
              "source": 1
            },
            {
              "begin": 2014,
              "end": 2037,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "184"
            },
            {
              "begin": 2014,
              "end": 2037,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 2014,
              "end": 2037,
              "name": "tag",
              "source": 1,
              "value": "183"
            },
            {
              "begin": 2014,
              "end": 2037,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1986,
              "end": 2037,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 1986,
              "end": 2037,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 2090,
              "end": 2108,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "185"
            },
            {
              "begin": 2090,
              "end": 2106,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "86"
            },
            {
              "begin": 2090,
              "end": 2108,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 2090,
              "end": 2108,
              "name": "tag",
              "source": 1,
              "value": "185"
            },
            {
              "begin": 2090,
              "end": 2108,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2069,
              "end": 2086,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 2069,
              "end": 2108,
              "name": "GT",
              "source": 1
            },
            {
              "begin": 2069,
              "end": 2108,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 2048,
              "end": 2163,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "186"
            },
            {
              "begin": 2048,
              "end": 2163,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 2048,
              "end": 2163,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 2048,
              "end": 2163,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "461BCD"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "E5"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": 2048,
              "end": 2163,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 2048,
              "end": 2163,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 5684,
              "end": 5686,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 2048,
              "end": 2163,
              "name": "PUSH",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 2048,
              "end": 2163,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 2048,
              "end": 2163,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 5666,
              "end": 5687,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 5723,
              "end": 5725,
              "name": "PUSH",
              "source": 2,
              "value": "1D"
            },
            {
              "begin": 5703,
              "end": 5721,
              "name": "PUSH",
              "source": 2,
              "value": "24"
            },
            {
              "begin": 5703,
              "end": 5721,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 5703,
              "end": 5721,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 5696,
              "end": 5726,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 5762,
              "end": 5793,
              "name": "PUSH",
              "source": 2,
              "value": "4E6F7420656E6F756768207469636B65747320617661696C61626C652E000000"
            },
            {
              "begin": 5742,
              "end": 5760,
              "name": "PUSH",
              "source": 2,
              "value": "44"
            },
            {
              "begin": 5742,
              "end": 5760,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 5742,
              "end": 5760,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 5735,
              "end": 5794,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 5811,
              "end": 5829,
              "name": "PUSH",
              "source": 2,
              "value": "64"
            },
            {
              "begin": 5811,
              "end": 5829,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 2048,
              "end": 2163,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "129"
            },
            {
              "begin": 5482,
              "end": 5835,
              "name": "JUMP",
              "source": 2
            },
            {
              "begin": 2048,
              "end": 2163,
              "name": "tag",
              "source": 1,
              "value": "186"
            },
            {
              "begin": 2048,
              "end": 2163,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2179,
              "end": 2188,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 2174,
              "end": 2271,
              "name": "tag",
              "source": 1,
              "value": "189"
            },
            {
              "begin": 2174,
              "end": 2271,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2198,
              "end": 2215,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 2194,
              "end": 2195,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 2194,
              "end": 2215,
              "name": "LT",
              "source": 1
            },
            {
              "begin": 2174,
              "end": 2271,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 2174,
              "end": 2271,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "190"
            },
            {
              "begin": 2174,
              "end": 2271,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 2236,
              "end": 2243,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "PUSH",
              "source": 1,
              "value": "1"
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "SSTORE",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "0"
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "PUSH",
              "source": 1,
              "value": "F652222313E28459528D920B65115C16C04F3EFC82AAEDC97BE59F3F377C0D3F"
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "NOT",
              "source": -1
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "AND",
              "source": 1
            },
            {
              "begin": 2249,
              "end": 2259,
              "name": "CALLER",
              "source": 1
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "OR",
              "source": 1
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 2236,
              "end": 2260,
              "name": "SSTORE",
              "source": 1
            },
            {
              "begin": 2217,
              "end": 2220,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 2217,
              "end": 2220,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "193"
            },
            {
              "begin": 2217,
              "end": 2220,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 2217,
              "end": 2220,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "194"
            },
            {
              "begin": 2217,
              "end": 2220,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 2217,
              "end": 2220,
              "name": "tag",
              "source": 1,
              "value": "193"
            },
            {
              "begin": 2217,
              "end": 2220,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2217,
              "end": 2220,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 2217,
              "end": 2220,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 2217,
              "end": 2220,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 2174,
              "end": 2271,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "189"
            },
            {
              "begin": 2174,
              "end": 2271,
              "name": "JUMP",
              "source": 1
            },
            {
              "begin": 2174,
              "end": 2271,
              "name": "tag",
              "source": 1,
              "value": "190"
            },
            {
              "begin": 2174,
              "end": 2271,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 2174,
              "end": 2271,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 1743,
              "end": 2277,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 1706,
              "end": 2277,
              "name": "JUMP",
              "source": 1,
              "value": "[out]"
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "tag",
              "source": 1,
              "value": "86"
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 4585,
              "end": 4592,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 4585,
              "end": 4599,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 4546,
              "end": 4553,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 4546,
              "end": 4553,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 4572,
              "end": 4599,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "196"
            },
            {
              "begin": 4572,
              "end": 4599,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 236,
              "end": 239,
              "name": "PUSH",
              "source": 1,
              "value": "64"
            },
            {
              "begin": 4572,
              "end": 4599,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "142"
            },
            {
              "begin": 4572,
              "end": 4599,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 4572,
              "end": 4599,
              "name": "tag",
              "source": 1,
              "value": "196"
            },
            {
              "begin": 4572,
              "end": 4599,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 4565,
              "end": 4599,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 4565,
              "end": 4599,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 4497,
              "end": 4606,
              "name": "JUMP",
              "source": 1,
              "value": "[out]"
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "tag",
              "source": 1,
              "value": "99"
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3735,
              "end": 3745,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3735,
              "end": 3745,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 3716,
              "end": 3731,
              "name": "TIMESTAMP",
              "source": 1
            },
            {
              "begin": 3716,
              "end": 3745,
              "name": "LT",
              "source": 1
            },
            {
              "begin": 3716,
              "end": 3745,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 3708,
              "end": 3777,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "199"
            },
            {
              "begin": 3708,
              "end": 3777,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 3708,
              "end": 3777,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 3708,
              "end": 3777,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "461BCD"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "E5"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": 3708,
              "end": 3777,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 3708,
              "end": 3777,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 6182,
              "end": 6184,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 3708,
              "end": 3777,
              "name": "PUSH",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 3708,
              "end": 3777,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 3708,
              "end": 3777,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 6164,
              "end": 6185,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 6221,
              "end": 6223,
              "name": "PUSH",
              "source": 2,
              "value": "1B"
            },
            {
              "begin": 6201,
              "end": 6219,
              "name": "PUSH",
              "source": 2,
              "value": "24"
            },
            {
              "begin": 6201,
              "end": 6219,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 6201,
              "end": 6219,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 6194,
              "end": 6224,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 6260,
              "end": 6289,
              "name": "PUSH",
              "source": 2,
              "value": "746865206C6F7474657279206E6F742065787069726564207965740000000000"
            },
            {
              "begin": 6240,
              "end": 6258,
              "name": "PUSH",
              "source": 2,
              "value": "44"
            },
            {
              "begin": 6240,
              "end": 6258,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 6240,
              "end": 6258,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 6233,
              "end": 6290,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 6307,
              "end": 6325,
              "name": "PUSH",
              "source": 2,
              "value": "64"
            },
            {
              "begin": 6307,
              "end": 6325,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 3708,
              "end": 3777,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "129"
            },
            {
              "begin": 5980,
              "end": 6331,
              "name": "JUMP",
              "source": 2
            },
            {
              "begin": 3708,
              "end": 3777,
              "name": "tag",
              "source": 1,
              "value": "199"
            },
            {
              "begin": 3708,
              "end": 3777,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3793,
              "end": 3802,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3788,
              "end": 3973,
              "name": "tag",
              "source": 1,
              "value": "202"
            },
            {
              "begin": 3788,
              "end": 3973,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3812,
              "end": 3819,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 3812,
              "end": 3826,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 3808,
              "end": 3826,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 3808,
              "end": 3826,
              "name": "LT",
              "source": 1
            },
            {
              "begin": 3788,
              "end": 3973,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 3788,
              "end": 3973,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "203"
            },
            {
              "begin": 3788,
              "end": 3973,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 3847,
              "end": 3865,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3876,
              "end": 3883,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 3884,
              "end": 3885,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "LT",
              "source": 1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "206"
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "206"
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "149"
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "tag",
              "source": 1,
              "value": "206"
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "KECCAK256",
              "source": 1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3908,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "A0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SUB",
              "source": -1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "SWAP3",
              "source": 1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "AND",
              "source": 1
            },
            {
              "begin": 3876,
              "end": 3886,
              "name": "SWAP4",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 3901,
              "end": 3908,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 3909,
              "end": 3910,
              "name": "DUP5",
              "source": 1
            },
            {
              "begin": 3909,
              "end": 3910,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "LT",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "209"
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "209"
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "149"
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "tag",
              "source": 1,
              "value": "209"
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "PUSH",
              "source": 1,
              "value": "20"
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "KECCAK256",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3924,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3924,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "NOT",
              "source": -1
            },
            {
              "begin": 3901,
              "end": 3924,
              "name": "AND",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "A0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SUB",
              "source": -1
            },
            {
              "begin": 3901,
              "end": 3924,
              "name": "SWAP4",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3924,
              "name": "DUP5",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3924,
              "name": "AND",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3924,
              "name": "OR",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3924,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3924,
              "name": "SSTORE",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3949,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3949,
              "name": "DUP4",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3949,
              "name": "AND",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3949,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 183,
              "end": 193,
              "name": "PUSH",
              "source": 1,
              "value": "2386F26FC10000"
            },
            {
              "begin": 183,
              "end": 193,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 183,
              "end": 193,
              "name": "DUP6",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3949,
              "name": "DUP9",
              "source": 1
            },
            {
              "begin": 3901,
              "end": 3911,
              "name": "DUP4",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "CALL",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "SWAP4",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "212"
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "RETURNDATASIZE",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "RETURNDATACOPY",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "RETURNDATASIZE",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "REVERT",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "tag",
              "source": 1,
              "value": "212"
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3938,
              "end": 3962,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 3833,
              "end": 3973,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 3828,
              "end": 3831,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3828,
              "end": 3831,
              "name": "DUP1",
              "source": 1
            },
            {
              "begin": 3828,
              "end": 3831,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "213"
            },
            {
              "begin": 3828,
              "end": 3831,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 3828,
              "end": 3831,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "194"
            },
            {
              "begin": 3828,
              "end": 3831,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 3828,
              "end": 3831,
              "name": "tag",
              "source": 1,
              "value": "213"
            },
            {
              "begin": 3828,
              "end": 3831,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3828,
              "end": 3831,
              "name": "SWAP2",
              "source": 1
            },
            {
              "begin": 3828,
              "end": 3831,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 3828,
              "end": 3831,
              "name": "POP",
              "source": 1
            },
            {
              "begin": 3788,
              "end": 3973,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "202"
            },
            {
              "begin": 3788,
              "end": 3973,
              "name": "JUMP",
              "source": 1
            },
            {
              "begin": 3788,
              "end": 3973,
              "name": "tag",
              "source": 1,
              "value": "203"
            },
            {
              "begin": 3788,
              "end": 3973,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 3982,
              "end": 3996,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "214"
            },
            {
              "begin": 3989,
              "end": 3996,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 3989,
              "end": 3996,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3982,
              "end": 3996,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "159"
            },
            {
              "begin": 3982,
              "end": 3996,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 3982,
              "end": 3996,
              "name": "tag",
              "source": 1,
              "value": "214"
            },
            {
              "begin": 3982,
              "end": 3996,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3670,
              "end": 4003,
              "name": "JUMP",
              "source": 1,
              "value": "[out]"
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "tag",
              "source": 1,
              "value": "106"
            },
            {
              "begin": 4377,
              "end": 4491,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 4456,
              "end": 4463,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 4456,
              "end": 4470,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 4430,
              "end": 4437,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 4430,
              "end": 4437,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 4456,
              "end": 4484,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "196"
            },
            {
              "begin": 4456,
              "end": 4484,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 183,
              "end": 193,
              "name": "PUSH",
              "source": 1,
              "value": "2386F26FC10000"
            },
            {
              "begin": 183,
              "end": 193,
              "name": "SWAP1",
              "source": 1
            },
            {
              "begin": 4456,
              "end": 4484,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "153"
            },
            {
              "begin": 4456,
              "end": 4484,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "tag",
              "source": 1,
              "value": "121"
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 1099,
              "end": 1114,
              "name": "PUSH",
              "source": 1,
              "value": "1"
            },
            {
              "begin": 1099,
              "end": 1114,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "A0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SUB",
              "source": -1
            },
            {
              "begin": 1099,
              "end": 1114,
              "name": "AND",
              "source": 1
            },
            {
              "begin": 1085,
              "end": 1095,
              "name": "CALLER",
              "source": 1
            },
            {
              "begin": 1085,
              "end": 1114,
              "name": "EQ",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "219"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "461BCD"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "E5"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 2006,
              "end": 2008,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "PUSH",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 1988,
              "end": 2009,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 2045,
              "end": 2047,
              "name": "PUSH",
              "source": 2,
              "value": "22"
            },
            {
              "begin": 2025,
              "end": 2043,
              "name": "PUSH",
              "source": 2,
              "value": "24"
            },
            {
              "begin": 2025,
              "end": 2043,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 2025,
              "end": 2043,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 2018,
              "end": 2048,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 2084,
              "end": 2118,
              "name": "PUSH",
              "source": 2,
              "value": "43616C6C6572206973206E6F7420746865206C6F7474657279206F7065726174"
            },
            {
              "begin": 2064,
              "end": 2082,
              "name": "PUSH",
              "source": 2,
              "value": "44"
            },
            {
              "begin": 2064,
              "end": 2082,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 2064,
              "end": 2082,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 2057,
              "end": 2119,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "37B9"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "F1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": 2135,
              "end": 2153,
              "name": "PUSH",
              "source": 2,
              "value": "64"
            },
            {
              "begin": 2135,
              "end": 2153,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 2135,
              "end": 2153,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 2128,
              "end": 2160,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 2177,
              "end": 2196,
              "name": "PUSH",
              "source": 2,
              "value": "84"
            },
            {
              "begin": 2177,
              "end": 2196,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "129"
            },
            {
              "begin": 1804,
              "end": 2202,
              "name": "JUMP",
              "source": 2
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "tag",
              "source": 1,
              "value": "219"
            },
            {
              "begin": 1063,
              "end": 1175,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3070,
              "end": 3077,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 3070,
              "end": 3084,
              "name": "SLOAD",
              "source": 1
            },
            {
              "begin": 3070,
              "end": 3089,
              "name": "ISZERO",
              "source": 1
            },
            {
              "begin": 3062,
              "end": 3132,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "222"
            },
            {
              "begin": 3062,
              "end": 3132,
              "name": "JUMPI",
              "source": 1
            },
            {
              "begin": 3062,
              "end": 3132,
              "name": "PUSH",
              "source": 1,
              "value": "40"
            },
            {
              "begin": 3062,
              "end": 3132,
              "name": "MLOAD",
              "source": 1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "461BCD"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "E5"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": 3062,
              "end": 3132,
              "name": "DUP2",
              "source": 1
            },
            {
              "begin": 3062,
              "end": 3132,
              "name": "MSTORE",
              "source": 1
            },
            {
              "begin": 6538,
              "end": 6540,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 3062,
              "end": 3132,
              "name": "PUSH",
              "source": 1,
              "value": "4"
            },
            {
              "begin": 3062,
              "end": 3132,
              "name": "DUP3",
              "source": 1
            },
            {
              "begin": 3062,
              "end": 3132,
              "name": "ADD",
              "source": 1
            },
            {
              "begin": 6520,
              "end": 6541,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 6577,
              "end": 6579,
              "name": "PUSH",
              "source": 2,
              "value": "26"
            },
            {
              "begin": 6557,
              "end": 6575,
              "name": "PUSH",
              "source": 2,
              "value": "24"
            },
            {
              "begin": 6557,
              "end": 6575,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 6557,
              "end": 6575,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 6550,
              "end": 6580,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 6616,
              "end": 6650,
              "name": "PUSH",
              "source": 2,
              "value": "43616E6E6F742052657374617274204472617720617320447261772069732069"
            },
            {
              "begin": 6596,
              "end": 6614,
              "name": "PUSH",
              "source": 2,
              "value": "44"
            },
            {
              "begin": 6596,
              "end": 6614,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 6596,
              "end": 6614,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 6589,
              "end": 6651,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 6687,
              "end": 6695,
              "name": "PUSH",
              "source": 2,
              "value": "6E20706C61790000000000000000000000000000000000000000000000000000"
            },
            {
              "begin": 6667,
              "end": 6685,
              "name": "PUSH",
              "source": 2,
              "value": "64"
            },
            {
              "begin": 6667,
              "end": 6685,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 6667,
              "end": 6685,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 6660,
              "end": 6696,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 6713,
              "end": 6732,
              "name": "PUSH",
              "source": 2,
              "value": "84"
            },
            {
              "begin": 6713,
              "end": 6732,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 3062,
              "end": 3132,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "129"
            },
            {
              "begin": 6336,
              "end": 6738,
              "name": "JUMP",
              "source": 2
            },
            {
              "begin": 3062,
              "end": 3132,
              "name": "tag",
              "source": 1,
              "value": "222"
            },
            {
              "begin": 3062,
              "end": 3132,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3143,
              "end": 3157,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "225"
            },
            {
              "begin": 3150,
              "end": 3157,
              "name": "PUSH",
              "source": 1,
              "value": "6"
            },
            {
              "begin": 3150,
              "end": 3157,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3143,
              "end": 3157,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "159"
            },
            {
              "begin": 3143,
              "end": 3157,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 3143,
              "end": 3157,
              "name": "tag",
              "source": 1,
              "value": "225"
            },
            {
              "begin": 3143,
              "end": 3157,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3180,
              "end": 3206,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "226"
            },
            {
              "begin": 395,
              "end": 405,
              "name": "PUSH",
              "source": 1,
              "value": "708"
            },
            {
              "begin": 3180,
              "end": 3195,
              "name": "TIMESTAMP",
              "source": 1
            },
            {
              "begin": 3180,
              "end": 3206,
              "name": "PUSH [tag]",
              "source": 1,
              "value": "155"
            },
            {
              "begin": 3180,
              "end": 3206,
              "name": "JUMP",
              "source": 1,
              "value": "[in]"
            },
            {
              "begin": 3180,
              "end": 3206,
              "name": "tag",
              "source": 1,
              "value": "226"
            },
            {
              "begin": 3180,
              "end": 3206,
              "name": "JUMPDEST",
              "source": 1
            },
            {
              "begin": 3167,
              "end": 3177,
              "name": "PUSH",
              "source": 1,
              "value": "0"
            },
            {
              "begin": 3167,
              "end": 3206,
              "name": "SSTORE",
              "source": 1
            },
            {
              "begin": 3011,
              "end": 3213,
              "name": "JUMP",
              "source": 1,
              "value": "[out]"
            },
            {
              "begin": 392,
              "end": 1095,
              "name": "tag",
              "source": 0,
              "value": "177"
            },
            {
              "begin": 392,
              "end": 1095,
              "name": "JUMPDEST",
              "source": 0
            },
            {
              "begin": 448,
              "end": 461,
              "name": "PUSH",
              "source": 0,
              "value": "60"
            },
            {
              "begin": 665,
              "end": 670,
              "name": "DUP2",
              "source": 0
            },
            {
              "begin": 674,
              "end": 675,
              "name": "PUSH",
              "source": 0,
              "value": "0"
            },
            {
              "begin": 665,
              "end": 675,
              "name": "SUB",
              "source": 0
            },
            {
              "begin": 661,
              "end": 712,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "228"
            },
            {
              "begin": 661,
              "end": 712,
              "name": "JUMPI",
              "source": 0
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 691,
              "end": 701,
              "name": "PUSH",
              "source": 0,
              "value": "40"
            },
            {
              "begin": 691,
              "end": 701,
              "name": "DUP1",
              "source": 0
            },
            {
              "begin": 691,
              "end": 701,
              "name": "MLOAD",
              "source": 0
            },
            {
              "begin": 691,
              "end": 701,
              "name": "DUP1",
              "source": 0
            },
            {
              "begin": 691,
              "end": 701,
              "name": "DUP3",
              "source": 0
            },
            {
              "begin": 691,
              "end": 701,
              "name": "ADD",
              "source": 0
            },
            {
              "begin": 691,
              "end": 701,
              "name": "SWAP1",
              "source": 0
            },
            {
              "begin": 691,
              "end": 701,
              "name": "SWAP2",
              "source": 0
            },
            {
              "begin": 691,
              "end": 701,
              "name": "MSTORE",
              "source": 0
            },
            {
              "begin": 691,
              "end": 701,
              "name": "PUSH",
              "source": 0,
              "value": "1"
            },
            {
              "begin": 691,
              "end": 701,
              "name": "DUP2",
              "source": 0
            },
            {
              "begin": 691,
              "end": 701,
              "name": "MSTORE",
              "source": 0
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "3"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "FC"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": 691,
              "end": 701,
              "name": "PUSH",
              "source": 0,
              "value": "20"
            },
            {
              "begin": 691,
              "end": 701,
              "name": "DUP3",
              "source": 0
            },
            {
              "begin": 691,
              "end": 701,
              "name": "ADD",
              "source": 0
            },
            {
              "begin": 691,
              "end": 701,
              "name": "MSTORE",
              "source": 0
            },
            {
              "begin": 691,
              "end": 701,
              "name": "SWAP1",
              "source": 0
            },
            {
              "begin": 392,
              "end": 1095,
              "name": "JUMP",
              "source": 0,
              "value": "[out]"
            },
            {
              "begin": 661,
              "end": 712,
              "name": "tag",
              "source": 0,
              "value": "228"
            },
            {
              "begin": 661,
              "end": 712,
              "name": "JUMPDEST",
              "source": 0
            },
            {
              "begin": 736,
              "end": 741,
              "name": "DUP2",
              "source": 0
            },
            {
              "begin": 721,
              "end": 733,
              "name": "PUSH",
              "source": 0,
              "value": "0"
            },
            {
              "begin": 775,
              "end": 850,
              "name": "tag",
              "source": 0,
              "value": "229"
            },
            {
              "begin": 775,
              "end": 850,
              "name": "JUMPDEST",
              "source": 0
            },
            {
              "begin": 782,
              "end": 791,
              "name": "DUP2",
              "source": 0
            },
            {
              "begin": 782,
              "end": 791,
              "name": "ISZERO",
              "source": 0
            },
            {
              "begin": 775,
              "end": 850,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "230"
            },
            {
              "begin": 775,
              "end": 850,
              "name": "JUMPI",
              "source": 0
            },
            {
              "begin": 807,
              "end": 815,
              "name": "DUP1",
              "source": 0
            },
            {
              "begin": 807,
              "end": 815,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "231"
            },
            {
              "begin": 807,
              "end": 815,
              "name": "DUP2",
              "source": 0
            },
            {
              "begin": 807,
              "end": 815,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "194"
            },
            {
              "begin": 807,
              "end": 815,
              "name": "JUMP",
              "source": 0,
              "value": "[in]"
            },
            {
              "begin": 807,
              "end": 815,
              "name": "tag",
              "source": 0,
              "value": "231"
            },
            {
              "begin": 807,
              "end": 815,
              "name": "JUMPDEST",
              "source": 0
            },
            {
              "begin": 807,
              "end": 815,
              "name": "SWAP2",
              "source": 0
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 829,
              "end": 839,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "232"
            },
            {
              "begin": 829,
              "end": 839,
              "name": "SWAP1",
              "source": 0
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 837,
              "end": 839,
              "name": "PUSH",
              "source": 0,
              "value": "A"
            },
            {
              "begin": 829,
              "end": 839,
              "name": "DUP4",
              "source": 0
            },
            {
              "begin": 829,
              "end": 839,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "184"
            },
            {
              "begin": 829,
              "end": 839,
              "name": "JUMP",
              "source": 0,
              "value": "[in]"
            },
            {
              "begin": 829,
              "end": 839,
              "name": "tag",
              "source": 0,
              "value": "232"
            },
            {
              "begin": 829,
              "end": 839,
              "name": "JUMPDEST",
              "source": 0
            },
            {
              "begin": 829,
              "end": 839,
              "name": "SWAP2",
              "source": 0
            },
            {
              "begin": 829,
              "end": 839,
              "name": "POP",
              "source": 0
            },
            {
              "begin": 775,
              "end": 850,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "229"
            },
            {
              "begin": 775,
              "end": 850,
              "name": "JUMP",
              "source": 0
            },
            {
              "begin": 775,
              "end": 850,
              "name": "tag",
              "source": 0,
              "value": "230"
            },
            {
              "begin": 775,
              "end": 850,
              "name": "JUMPDEST",
              "source": 0
            },
            {
              "begin": 859,
              "end": 878,
              "name": "PUSH",
              "source": 0,
              "value": "0"
            },
            {
              "begin": 891,
              "end": 897,
              "name": "DUP2",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "PUSH",
              "source": 0,
              "value": "FFFFFFFFFFFFFFFF"
            },
            {
              "begin": 881,
              "end": 898,
              "name": "DUP2",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "GT",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "ISZERO",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "234"
            },
            {
              "begin": 881,
              "end": 898,
              "name": "JUMPI",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "234"
            },
            {
              "begin": 881,
              "end": 898,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "235"
            },
            {
              "begin": 881,
              "end": 898,
              "name": "JUMP",
              "source": 0,
              "value": "[in]"
            },
            {
              "begin": 881,
              "end": 898,
              "name": "tag",
              "source": 0,
              "value": "234"
            },
            {
              "begin": 881,
              "end": 898,
              "name": "JUMPDEST",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "PUSH",
              "source": 0,
              "value": "40"
            },
            {
              "begin": 881,
              "end": 898,
              "name": "MLOAD",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "SWAP1",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "DUP1",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "DUP3",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "MSTORE",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "DUP1",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "PUSH",
              "source": 0,
              "value": "1F"
            },
            {
              "begin": 881,
              "end": 898,
              "name": "ADD",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "PUSH",
              "source": 0,
              "value": "1F"
            },
            {
              "begin": 881,
              "end": 898,
              "name": "NOT",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "AND",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "PUSH",
              "source": 0,
              "value": "20"
            },
            {
              "begin": 881,
              "end": 898,
              "name": "ADD",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "DUP3",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "ADD",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "PUSH",
              "source": 0,
              "value": "40"
            },
            {
              "begin": 881,
              "end": 898,
              "name": "MSTORE",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "DUP1",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "ISZERO",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "236"
            },
            {
              "begin": 881,
              "end": 898,
              "name": "JUMPI",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "PUSH",
              "source": 0,
              "value": "20"
            },
            {
              "begin": 881,
              "end": 898,
              "name": "DUP3",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "ADD",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "DUP2",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "DUP1",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "CALLDATASIZE",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "DUP4",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "CALLDATACOPY",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "ADD",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "SWAP1",
              "source": 0
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 881,
              "end": 898,
              "name": "tag",
              "source": 0,
              "value": "236"
            },
            {
              "begin": 881,
              "end": 898,
              "name": "JUMPDEST",
              "source": 0
            },
            {
              "begin": 881,
              "end": 898,
              "name": "POP",
              "source": 0
            },
            {
              "begin": 859,
              "end": 898,
              "name": "SWAP1",
              "source": 0
            },
            {
              "begin": 859,
              "end": 898,
              "name": "POP",
              "source": 0
            },
            {
              "begin": 908,
              "end": 1058,
              "name": "tag",
              "source": 0,
              "value": "237"
            },
            {
              "begin": 908,
              "end": 1058,
              "name": "JUMPDEST",
              "source": 0
            },
            {
              "begin": 915,
              "end": 925,
              "name": "DUP5",
              "source": 0
            },
            {
              "begin": 915,
              "end": 925,
              "name": "ISZERO",
              "source": 0
            },
            {
              "begin": 908,
              "end": 1058,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "238"
            },
            {
              "begin": 908,
              "end": 1058,
              "name": "JUMPI",
              "source": 0
            },
            {
              "begin": 941,
              "end": 952,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "239"
            },
            {
              "begin": 951,
              "end": 952,
              "name": "PUSH",
              "source": 0,
              "value": "1"
            },
            {
              "begin": 941,
              "end": 952,
              "name": "DUP4",
              "source": 0
            },
            {
              "begin": 941,
              "end": 952,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "142"
            },
            {
              "begin": 941,
              "end": 952,
              "name": "JUMP",
              "source": 0,
              "value": "[in]"
            },
            {
              "begin": 941,
              "end": 952,
              "name": "tag",
              "source": 0,
              "value": "239"
            },
            {
              "begin": 941,
              "end": 952,
              "name": "JUMPDEST",
              "source": 0
            },
            {
              "begin": 941,
              "end": 952,
              "name": "SWAP2",
              "source": 0
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 1009,
              "end": 1019,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "240"
            },
            {
              "begin": 1017,
              "end": 1019,
              "name": "PUSH",
              "source": 0,
              "value": "A"
            },
            {
              "begin": 1009,
              "end": 1014,
              "name": "DUP7",
              "source": 0
            },
            {
              "begin": 1009,
              "end": 1019,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "146"
            },
            {
              "begin": 1009,
              "end": 1019,
              "name": "JUMP",
              "source": 0,
              "value": "[in]"
            },
            {
              "begin": 1009,
              "end": 1019,
              "name": "tag",
              "source": 0,
              "value": "240"
            },
            {
              "begin": 1009,
              "end": 1019,
              "name": "JUMPDEST",
              "source": 0
            },
            {
              "begin": 996,
              "end": 1020,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "241"
            },
            {
              "begin": 996,
              "end": 1020,
              "name": "SWAP1",
              "source": 0
            },
            {
              "begin": 996,
              "end": 998,
              "name": "PUSH",
              "source": 0,
              "value": "30"
            },
            {
              "begin": 996,
              "end": 1020,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "155"
            },
            {
              "begin": 996,
              "end": 1020,
              "name": "JUMP",
              "source": 0,
              "value": "[in]"
            },
            {
              "begin": 996,
              "end": 1020,
              "name": "tag",
              "source": 0,
              "value": "241"
            },
            {
              "begin": 996,
              "end": 1020,
              "name": "JUMPDEST",
              "source": 0
            },
            {
              "begin": 983,
              "end": 1022,
              "name": "PUSH",
              "source": 0,
              "value": "F8"
            },
            {
              "begin": 983,
              "end": 1022,
              "name": "SHL",
              "source": 0
            },
            {
              "begin": 966,
              "end": 972,
              "name": "DUP2",
              "source": 0
            },
            {
              "begin": 973,
              "end": 979,
              "name": "DUP4",
              "source": 0
            },
            {
              "begin": 966,
              "end": 980,
              "name": "DUP2",
              "source": 0
            },
            {
              "begin": 966,
              "end": 980,
              "name": "MLOAD",
              "source": 0
            },
            {
              "begin": 966,
              "end": 980,
              "name": "DUP2",
              "source": 0
            },
            {
              "begin": 966,
              "end": 980,
              "name": "LT",
              "source": 0
            },
            {
              "begin": 966,
              "end": 980,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "243"
            },
            {
              "begin": 966,
              "end": 980,
              "name": "JUMPI",
              "source": 0
            },
            {
              "begin": 966,
              "end": 980,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "243"
            },
            {
              "begin": 966,
              "end": 980,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "149"
            },
            {
              "begin": 966,
              "end": 980,
              "name": "JUMP",
              "source": 0,
              "value": "[in]"
            },
            {
              "begin": 966,
              "end": 980,
              "name": "tag",
              "source": 0,
              "value": "243"
            },
            {
              "begin": 966,
              "end": 980,
              "name": "JUMPDEST",
              "source": 0
            },
            {
              "begin": 966,
              "end": 980,
              "name": "PUSH",
              "source": 0,
              "value": "20"
            },
            {
              "begin": 966,
              "end": 980,
              "name": "ADD",
              "source": 0
            },
            {
              "begin": 966,
              "end": 980,
              "name": "ADD",
              "source": 0
            },
            {
              "begin": 966,
              "end": 1022,
              "name": "SWAP1",
              "source": 0
            },
            {
              "begin": 966,
              "end": 1022,
              "name": "PUSH",
              "source": 0,
              "value": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
            },
            {
              "begin": 966,
              "end": 1022,
              "name": "NOT",
              "source": 0
            },
            {
              "begin": 966,
              "end": 1022,
              "name": "AND",
              "source": 0
            },
            {
              "begin": 966,
              "end": 1022,
              "name": "SWAP1",
              "source": 0
            },
            {
              "begin": 966,
              "end": 1022,
              "name": "DUP2",
              "source": 0
            },
            {
              "begin": 966,
              "end": 1022,
              "name": "PUSH",
              "source": 0,
              "value": "0"
            },
            {
              "begin": 966,
              "end": 1022,
              "name": "BYTE",
              "source": 0
            },
            {
              "begin": 966,
              "end": 1022,
              "name": "SWAP1",
              "source": 0
            },
            {
              "begin": 966,
              "end": 1022,
              "name": "MSTORE8",
              "source": 0
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 1036,
              "end": 1047,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "244"
            },
            {
              "begin": 1045,
              "end": 1047,
              "name": "PUSH",
              "source": 0,
              "value": "A"
            },
            {
              "begin": 1036,
              "end": 1047,
              "name": "DUP7",
              "source": 0
            },
            {
              "begin": 1036,
              "end": 1047,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "184"
            },
            {
              "begin": 1036,
              "end": 1047,
              "name": "JUMP",
              "source": 0,
              "value": "[in]"
            },
            {
              "begin": 1036,
              "end": 1047,
              "name": "tag",
              "source": 0,
              "value": "244"
            },
            {
              "begin": 1036,
              "end": 1047,
              "name": "JUMPDEST",
              "source": 0
            },
            {
              "begin": 1036,
              "end": 1047,
              "name": "SWAP5",
              "source": 0
            },
            {
              "begin": 1036,
              "end": 1047,
              "name": "POP",
              "source": 0
            },
            {
              "begin": 908,
              "end": 1058,
              "name": "PUSH [tag]",
              "source": 0,
              "value": "237"
            },
            {
              "begin": 908,
              "end": 1058,
              "name": "JUMP",
              "source": 0
            },
            {
              "begin": 908,
              "end": 1058,
              "name": "tag",
              "source": 0,
              "value": "238"
            },
            {
              "begin": 908,
              "end": 1058,
              "name": "JUMPDEST",
              "source": 0
            },
            {
              "begin": 1081,
              "end": 1087,
              "name": "SWAP5",
              "source": 0
            },
            {
              "begin": 392,
              "end": 1095,
              "name": "SWAP4",
              "source": 0
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 392,
              "end": 1095,
              "name": "JUMP",
              "source": 0,
              "value": "[out]"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "tag",
              "source": -1,
              "value": "159"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "JUMPDEST",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "DUP1",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SLOAD",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "DUP3",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SSTORE",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SWAP1",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "MSTORE",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "20"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "KECCAK256",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SWAP1",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "DUP2",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "ADD",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SWAP1",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH [tag]",
              "source": -1,
              "value": "246"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SWAP2",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SWAP1",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH [tag]",
              "source": -1,
              "value": "247"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "JUMP",
              "source": -1,
              "value": "[in]"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "tag",
              "source": -1,
              "value": "246"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "JUMPDEST",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "JUMP",
              "source": -1,
              "value": "[out]"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "tag",
              "source": -1,
              "value": "247"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "JUMPDEST",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "tag",
              "source": -1,
              "value": "248"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "JUMPDEST",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "DUP1",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "DUP3",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "GT",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "ISZERO",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH [tag]",
              "source": -1,
              "value": "249"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "JUMPI",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "DUP2",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SSTORE",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "ADD",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH [tag]",
              "source": -1,
              "value": "248"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "JUMP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "tag",
              "source": -1,
              "value": "249"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "JUMPDEST",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SWAP1",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "JUMP",
              "source": -1,
              "value": "[out]"
            },
            {
              "begin": 196,
              "end": 877,
              "name": "tag",
              "source": 2,
              "value": "63"
            },
            {
              "begin": 196,
              "end": 877,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 367,
              "end": 369,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 419,
              "end": 440,
              "name": "DUP1",
              "source": 2
            },
            {
              "begin": 419,
              "end": 440,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 419,
              "end": 440,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 489,
              "end": 502,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 489,
              "end": 502,
              "name": "MLOAD",
              "source": 2
            },
            {
              "begin": 392,
              "end": 410,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 392,
              "end": 410,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 392,
              "end": 410,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 511,
              "end": 533,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 511,
              "end": 533,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 511,
              "end": 533,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 338,
              "end": 342,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 338,
              "end": 342,
              "name": "SWAP2",
              "source": 2
            },
            {
              "begin": 367,
              "end": 369,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 590,
              "end": 605,
              "name": "DUP5",
              "source": 2
            },
            {
              "begin": 590,
              "end": 605,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 590,
              "end": 605,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 590,
              "end": 605,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 564,
              "end": 566,
              "name": "PUSH",
              "source": 2,
              "value": "40"
            },
            {
              "begin": 549,
              "end": 567,
              "name": "DUP6",
              "source": 2
            },
            {
              "begin": 549,
              "end": 567,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 549,
              "end": 567,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 338,
              "end": 342,
              "name": "DUP5",
              "source": 2
            },
            {
              "begin": 633,
              "end": 851,
              "name": "tag",
              "source": 2,
              "value": "256"
            },
            {
              "begin": 633,
              "end": 851,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 647,
              "end": 653,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 644,
              "end": 645,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 641,
              "end": 654,
              "name": "LT",
              "source": 2
            },
            {
              "begin": 633,
              "end": 851,
              "name": "ISZERO",
              "source": 2
            },
            {
              "begin": 633,
              "end": 851,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "258"
            },
            {
              "begin": 633,
              "end": 851,
              "name": "JUMPI",
              "source": 2
            },
            {
              "begin": 712,
              "end": 725,
              "name": "DUP4",
              "source": 2
            },
            {
              "begin": 712,
              "end": 725,
              "name": "MLOAD",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "A0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SUB",
              "source": -1
            },
            {
              "begin": 708,
              "end": 770,
              "name": "AND",
              "source": 2
            },
            {
              "begin": 696,
              "end": 771,
              "name": "DUP4",
              "source": 2
            },
            {
              "begin": 696,
              "end": 771,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 826,
              "end": 841,
              "name": "SWAP3",
              "source": 2
            },
            {
              "begin": 826,
              "end": 841,
              "name": "DUP5",
              "source": 2
            },
            {
              "begin": 826,
              "end": 841,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 826,
              "end": 841,
              "name": "SWAP3",
              "source": 2
            },
            {
              "begin": 791,
              "end": 803,
              "name": "SWAP2",
              "source": 2
            },
            {
              "begin": 791,
              "end": 803,
              "name": "DUP5",
              "source": 2
            },
            {
              "begin": 791,
              "end": 803,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 791,
              "end": 803,
              "name": "SWAP2",
              "source": 2
            },
            {
              "begin": 669,
              "end": 670,
              "name": "PUSH",
              "source": 2,
              "value": "1"
            },
            {
              "begin": 662,
              "end": 671,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 633,
              "end": 851,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "256"
            },
            {
              "begin": 633,
              "end": 851,
              "name": "JUMP",
              "source": 2
            },
            {
              "begin": 633,
              "end": 851,
              "name": "tag",
              "source": 2,
              "value": "258"
            },
            {
              "begin": 633,
              "end": 851,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 868,
              "end": 871,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 868,
              "end": 871,
              "name": "SWAP7",
              "source": 2
            },
            {
              "begin": 196,
              "end": 877,
              "name": "SWAP6",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 196,
              "end": 877,
              "name": "JUMP",
              "source": 2,
              "value": "[out]"
            },
            {
              "begin": 882,
              "end": 1062,
              "name": "tag",
              "source": 2,
              "value": "67"
            },
            {
              "begin": 882,
              "end": 1062,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 941,
              "end": 947,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 994,
              "end": 996,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 982,
              "end": 991,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 973,
              "end": 980,
              "name": "DUP5",
              "source": 2
            },
            {
              "begin": 969,
              "end": 992,
              "name": "SUB",
              "source": 2
            },
            {
              "begin": 965,
              "end": 997,
              "name": "SLT",
              "source": 2
            },
            {
              "begin": 962,
              "end": 1014,
              "name": "ISZERO",
              "source": 2
            },
            {
              "begin": 962,
              "end": 1014,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "260"
            },
            {
              "begin": 962,
              "end": 1014,
              "name": "JUMPI",
              "source": 2
            },
            {
              "begin": 1010,
              "end": 1011,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 1007,
              "end": 1008,
              "name": "DUP1",
              "source": 2
            },
            {
              "begin": 1000,
              "end": 1012,
              "name": "REVERT",
              "source": 2
            },
            {
              "begin": 962,
              "end": 1014,
              "name": "tag",
              "source": 2,
              "value": "260"
            },
            {
              "begin": 962,
              "end": 1014,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 1033,
              "end": 1056,
              "name": "CALLDATALOAD",
              "source": 2
            },
            {
              "begin": 1033,
              "end": 1056,
              "name": "SWAP2",
              "source": 2
            },
            {
              "begin": 882,
              "end": 1062,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 882,
              "end": 1062,
              "name": "JUMP",
              "source": 2,
              "value": "[out]"
            },
            {
              "begin": 1490,
              "end": 1799,
              "name": "tag",
              "source": 2,
              "value": "111"
            },
            {
              "begin": 1490,
              "end": 1799,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 1549,
              "end": 1555,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 1602,
              "end": 1604,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 1590,
              "end": 1599,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 1581,
              "end": 1588,
              "name": "DUP5",
              "source": 2
            },
            {
              "begin": 1577,
              "end": 1600,
              "name": "SUB",
              "source": 2
            },
            {
              "begin": 1573,
              "end": 1605,
              "name": "SLT",
              "source": 2
            },
            {
              "begin": 1570,
              "end": 1622,
              "name": "ISZERO",
              "source": 2
            },
            {
              "begin": 1570,
              "end": 1622,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "264"
            },
            {
              "begin": 1570,
              "end": 1622,
              "name": "JUMPI",
              "source": 2
            },
            {
              "begin": 1618,
              "end": 1619,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 1615,
              "end": 1616,
              "name": "DUP1",
              "source": 2
            },
            {
              "begin": 1608,
              "end": 1620,
              "name": "REVERT",
              "source": 2
            },
            {
              "begin": 1570,
              "end": 1622,
              "name": "tag",
              "source": 2,
              "value": "264"
            },
            {
              "begin": 1570,
              "end": 1622,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 1657,
              "end": 1666,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 1644,
              "end": 1667,
              "name": "CALLDATALOAD",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "A0"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SHL",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "SUB",
              "source": -1
            },
            {
              "begin": 1700,
              "end": 1705,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 1696,
              "end": 1750,
              "name": "AND",
              "source": 2
            },
            {
              "begin": 1689,
              "end": 1694,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 1686,
              "end": 1751,
              "name": "EQ",
              "source": 2
            },
            {
              "begin": 1676,
              "end": 1769,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "265"
            },
            {
              "begin": 1676,
              "end": 1769,
              "name": "JUMPI",
              "source": 2
            },
            {
              "begin": 1765,
              "end": 1766,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 1762,
              "end": 1763,
              "name": "DUP1",
              "source": 2
            },
            {
              "begin": 1755,
              "end": 1767,
              "name": "REVERT",
              "source": 2
            },
            {
              "begin": 1676,
              "end": 1769,
              "name": "tag",
              "source": 2,
              "value": "265"
            },
            {
              "begin": 1676,
              "end": 1769,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 1788,
              "end": 1793,
              "name": "SWAP4",
              "source": 2
            },
            {
              "begin": 1490,
              "end": 1799,
              "name": "SWAP3",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 1490,
              "end": 1799,
              "name": "JUMP",
              "source": 2,
              "value": "[out]"
            },
            {
              "begin": 2561,
              "end": 2688,
              "name": "tag",
              "source": 2,
              "value": "250"
            },
            {
              "begin": 2561,
              "end": 2688,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 2622,
              "end": 2632,
              "name": "PUSH",
              "source": 2,
              "value": "4E487B71"
            },
            {
              "begin": 2617,
              "end": 2620,
              "name": "PUSH",
              "source": 2,
              "value": "E0"
            },
            {
              "begin": 2613,
              "end": 2633,
              "name": "SHL",
              "source": 2
            },
            {
              "begin": 2610,
              "end": 2611,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 2603,
              "end": 2634,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 2653,
              "end": 2657,
              "name": "PUSH",
              "source": 2,
              "value": "11"
            },
            {
              "begin": 2650,
              "end": 2651,
              "name": "PUSH",
              "source": 2,
              "value": "4"
            },
            {
              "begin": 2643,
              "end": 2658,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 2677,
              "end": 2681,
              "name": "PUSH",
              "source": 2,
              "value": "24"
            },
            {
              "begin": 2674,
              "end": 2675,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 2667,
              "end": 2682,
              "name": "REVERT",
              "source": 2
            },
            {
              "begin": 2693,
              "end": 2818,
              "name": "tag",
              "source": 2,
              "value": "142"
            },
            {
              "begin": 2693,
              "end": 2818,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 2733,
              "end": 2737,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 2761,
              "end": 2762,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 2758,
              "end": 2759,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 2755,
              "end": 2763,
              "name": "LT",
              "source": 2
            },
            {
              "begin": 2752,
              "end": 2786,
              "name": "ISZERO",
              "source": 2
            },
            {
              "begin": 2752,
              "end": 2786,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "271"
            },
            {
              "begin": 2752,
              "end": 2786,
              "name": "JUMPI",
              "source": 2
            },
            {
              "begin": 2766,
              "end": 2784,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "271"
            },
            {
              "begin": 2766,
              "end": 2784,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "250"
            },
            {
              "begin": 2766,
              "end": 2784,
              "name": "JUMP",
              "source": 2,
              "value": "[in]"
            },
            {
              "begin": 2766,
              "end": 2784,
              "name": "tag",
              "source": 2,
              "value": "271"
            },
            {
              "begin": 2766,
              "end": 2784,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 2803,
              "end": 2812,
              "name": "SUB",
              "source": 2
            },
            {
              "begin": 2803,
              "end": 2812,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 2693,
              "end": 2818,
              "name": "JUMP",
              "source": 2,
              "value": "[out]"
            },
            {
              "begin": 3075,
              "end": 3202,
              "name": "tag",
              "source": 2,
              "value": "251"
            },
            {
              "begin": 3075,
              "end": 3202,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 3136,
              "end": 3146,
              "name": "PUSH",
              "source": 2,
              "value": "4E487B71"
            },
            {
              "begin": 3131,
              "end": 3134,
              "name": "PUSH",
              "source": 2,
              "value": "E0"
            },
            {
              "begin": 3127,
              "end": 3147,
              "name": "SHL",
              "source": 2
            },
            {
              "begin": 3124,
              "end": 3125,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 3117,
              "end": 3148,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 3167,
              "end": 3171,
              "name": "PUSH",
              "source": 2,
              "value": "12"
            },
            {
              "begin": 3164,
              "end": 3165,
              "name": "PUSH",
              "source": 2,
              "value": "4"
            },
            {
              "begin": 3157,
              "end": 3172,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 3191,
              "end": 3195,
              "name": "PUSH",
              "source": 2,
              "value": "24"
            },
            {
              "begin": 3188,
              "end": 3189,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 3181,
              "end": 3196,
              "name": "REVERT",
              "source": 2
            },
            {
              "begin": 3207,
              "end": 3319,
              "name": "tag",
              "source": 2,
              "value": "146"
            },
            {
              "begin": 3207,
              "end": 3319,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 3239,
              "end": 3240,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 3265,
              "end": 3266,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 3255,
              "end": 3290,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "276"
            },
            {
              "begin": 3255,
              "end": 3290,
              "name": "JUMPI",
              "source": 2
            },
            {
              "begin": 3270,
              "end": 3288,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "276"
            },
            {
              "begin": 3270,
              "end": 3288,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "251"
            },
            {
              "begin": 3270,
              "end": 3288,
              "name": "JUMP",
              "source": 2,
              "value": "[in]"
            },
            {
              "begin": 3270,
              "end": 3288,
              "name": "tag",
              "source": 2,
              "value": "276"
            },
            {
              "begin": 3270,
              "end": 3288,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 3304,
              "end": 3313,
              "name": "MOD",
              "source": 2
            },
            {
              "begin": 3304,
              "end": 3313,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 3207,
              "end": 3319,
              "name": "JUMP",
              "source": 2,
              "value": "[out]"
            },
            {
              "begin": 3324,
              "end": 3451,
              "name": "tag",
              "source": 2,
              "value": "149"
            },
            {
              "begin": 3324,
              "end": 3451,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 3385,
              "end": 3395,
              "name": "PUSH",
              "source": 2,
              "value": "4E487B71"
            },
            {
              "begin": 3380,
              "end": 3383,
              "name": "PUSH",
              "source": 2,
              "value": "E0"
            },
            {
              "begin": 3376,
              "end": 3396,
              "name": "SHL",
              "source": 2
            },
            {
              "begin": 3373,
              "end": 3374,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 3366,
              "end": 3397,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 3416,
              "end": 3420,
              "name": "PUSH",
              "source": 2,
              "value": "32"
            },
            {
              "begin": 3413,
              "end": 3414,
              "name": "PUSH",
              "source": 2,
              "value": "4"
            },
            {
              "begin": 3406,
              "end": 3421,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 3440,
              "end": 3444,
              "name": "PUSH",
              "source": 2,
              "value": "24"
            },
            {
              "begin": 3437,
              "end": 3438,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 3430,
              "end": 3445,
              "name": "REVERT",
              "source": 2
            },
            {
              "begin": 3456,
              "end": 3624,
              "name": "tag",
              "source": 2,
              "value": "153"
            },
            {
              "begin": 3456,
              "end": 3624,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 3496,
              "end": 3503,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 3562,
              "end": 3563,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 3558,
              "end": 3559,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 3554,
              "end": 3560,
              "name": "NOT",
              "source": 2
            },
            {
              "begin": 3550,
              "end": 3564,
              "name": "DIV",
              "source": 2
            },
            {
              "begin": 3547,
              "end": 3548,
              "name": "DUP4",
              "source": 2
            },
            {
              "begin": 3544,
              "end": 3565,
              "name": "GT",
              "source": 2
            },
            {
              "begin": 3539,
              "end": 3540,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 3532,
              "end": 3541,
              "name": "ISZERO",
              "source": 2
            },
            {
              "begin": 3525,
              "end": 3542,
              "name": "ISZERO",
              "source": 2
            },
            {
              "begin": 3521,
              "end": 3566,
              "name": "AND",
              "source": 2
            },
            {
              "begin": 3518,
              "end": 3589,
              "name": "ISZERO",
              "source": 2
            },
            {
              "begin": 3518,
              "end": 3589,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "280"
            },
            {
              "begin": 3518,
              "end": 3589,
              "name": "JUMPI",
              "source": 2
            },
            {
              "begin": 3569,
              "end": 3587,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "280"
            },
            {
              "begin": 3569,
              "end": 3587,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "250"
            },
            {
              "begin": 3569,
              "end": 3587,
              "name": "JUMP",
              "source": 2,
              "value": "[in]"
            },
            {
              "begin": 3569,
              "end": 3587,
              "name": "tag",
              "source": 2,
              "value": "280"
            },
            {
              "begin": 3569,
              "end": 3587,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 3609,
              "end": 3618,
              "name": "MUL",
              "source": 2
            },
            {
              "begin": 3609,
              "end": 3618,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 3456,
              "end": 3624,
              "name": "JUMP",
              "source": 2,
              "value": "[out]"
            },
            {
              "begin": 3629,
              "end": 3757,
              "name": "tag",
              "source": 2,
              "value": "155"
            },
            {
              "begin": 3629,
              "end": 3757,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 3669,
              "end": 3672,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 3700,
              "end": 3701,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 3696,
              "end": 3702,
              "name": "NOT",
              "source": 2
            },
            {
              "begin": 3693,
              "end": 3694,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 3690,
              "end": 3703,
              "name": "GT",
              "source": 2
            },
            {
              "begin": 3687,
              "end": 3726,
              "name": "ISZERO",
              "source": 2
            },
            {
              "begin": 3687,
              "end": 3726,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "283"
            },
            {
              "begin": 3687,
              "end": 3726,
              "name": "JUMPI",
              "source": 2
            },
            {
              "begin": 3706,
              "end": 3724,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "283"
            },
            {
              "begin": 3706,
              "end": 3724,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "250"
            },
            {
              "begin": 3706,
              "end": 3724,
              "name": "JUMP",
              "source": 2,
              "value": "[in]"
            },
            {
              "begin": 3706,
              "end": 3724,
              "name": "tag",
              "source": 2,
              "value": "283"
            },
            {
              "begin": 3706,
              "end": 3724,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 3742,
              "end": 3751,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 3742,
              "end": 3751,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 3629,
              "end": 3757,
              "name": "JUMP",
              "source": 2,
              "value": "[out]"
            },
            {
              "begin": 4113,
              "end": 4371,
              "name": "tag",
              "source": 2,
              "value": "252"
            },
            {
              "begin": 4113,
              "end": 4371,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 4185,
              "end": 4186,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 4195,
              "end": 4308,
              "name": "tag",
              "source": 2,
              "value": "286"
            },
            {
              "begin": 4195,
              "end": 4308,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 4209,
              "end": 4215,
              "name": "DUP4",
              "source": 2
            },
            {
              "begin": 4206,
              "end": 4207,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 4203,
              "end": 4216,
              "name": "LT",
              "source": 2
            },
            {
              "begin": 4195,
              "end": 4308,
              "name": "ISZERO",
              "source": 2
            },
            {
              "begin": 4195,
              "end": 4308,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "288"
            },
            {
              "begin": 4195,
              "end": 4308,
              "name": "JUMPI",
              "source": 2
            },
            {
              "begin": 4285,
              "end": 4296,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 4285,
              "end": 4296,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 4285,
              "end": 4296,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 4279,
              "end": 4297,
              "name": "MLOAD",
              "source": 2
            },
            {
              "begin": 4266,
              "end": 4277,
              "name": "DUP4",
              "source": 2
            },
            {
              "begin": 4266,
              "end": 4277,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 4266,
              "end": 4277,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 4259,
              "end": 4298,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 4231,
              "end": 4233,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 4224,
              "end": 4234,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 4195,
              "end": 4308,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "286"
            },
            {
              "begin": 4195,
              "end": 4308,
              "name": "JUMP",
              "source": 2
            },
            {
              "begin": 4195,
              "end": 4308,
              "name": "tag",
              "source": 2,
              "value": "288"
            },
            {
              "begin": 4195,
              "end": 4308,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 4326,
              "end": 4332,
              "name": "DUP4",
              "source": 2
            },
            {
              "begin": 4323,
              "end": 4324,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 4320,
              "end": 4333,
              "name": "GT",
              "source": 2
            },
            {
              "begin": 4317,
              "end": 4365,
              "name": "ISZERO",
              "source": 2
            },
            {
              "begin": 4317,
              "end": 4365,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "289"
            },
            {
              "begin": 4317,
              "end": 4365,
              "name": "JUMPI",
              "source": 2
            },
            {
              "begin": 4361,
              "end": 4362,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 4352,
              "end": 4358,
              "name": "DUP5",
              "source": 2
            },
            {
              "begin": 4347,
              "end": 4350,
              "name": "DUP5",
              "source": 2
            },
            {
              "begin": 4343,
              "end": 4359,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 4336,
              "end": 4363,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 4317,
              "end": 4365,
              "name": "tag",
              "source": 2,
              "value": "289"
            },
            {
              "begin": 4317,
              "end": 4365,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 4317,
              "end": 4365,
              "name": "POP",
              "source": 2
            },
            {
              "begin": 4113,
              "end": 4371,
              "name": "POP",
              "source": 2
            },
            {
              "begin": 4113,
              "end": 4371,
              "name": "POP",
              "source": 2
            },
            {
              "begin": 4113,
              "end": 4371,
              "name": "POP",
              "source": 2
            },
            {
              "begin": 4113,
              "end": 4371,
              "name": "JUMP",
              "source": 2,
              "value": "[out]"
            },
            {
              "begin": 4376,
              "end": 4964,
              "name": "tag",
              "source": 2,
              "value": "179"
            },
            {
              "begin": 4376,
              "end": 4964,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 4718,
              "end": 4750,
              "name": "PUSH",
              "source": 2,
              "value": "7468652076616C7565206D757374206265206D756C7469706C65206F66200000"
            },
            {
              "begin": 4713,
              "end": 4716,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 4706,
              "end": 4751,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 4688,
              "end": 4691,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 4780,
              "end": 4786,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 4774,
              "end": 4787,
              "name": "MLOAD",
              "source": 2
            },
            {
              "begin": 4796,
              "end": 4858,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "291"
            },
            {
              "begin": 4851,
              "end": 4857,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 4846,
              "end": 4848,
              "name": "PUSH",
              "source": 2,
              "value": "1E"
            },
            {
              "begin": 4841,
              "end": 4844,
              "name": "DUP6",
              "source": 2
            },
            {
              "begin": 4837,
              "end": 4849,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 4830,
              "end": 4834,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 4822,
              "end": 4828,
              "name": "DUP8",
              "source": 2
            },
            {
              "begin": 4818,
              "end": 4835,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 4796,
              "end": 4858,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "252"
            },
            {
              "begin": 4796,
              "end": 4858,
              "name": "JUMP",
              "source": 2,
              "value": "[in]"
            },
            {
              "begin": 4796,
              "end": 4858,
              "name": "tag",
              "source": 2,
              "value": "291"
            },
            {
              "begin": 4796,
              "end": 4858,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 4922,
              "end": 4930,
              "name": "PUSH",
              "source": 2,
              "value": "2045746865720000000000000000000000000000000000000000000000000000"
            },
            {
              "begin": 4917,
              "end": 4919,
              "name": "PUSH",
              "source": 2,
              "value": "1E"
            },
            {
              "begin": 4877,
              "end": 4893,
              "name": "SWAP4",
              "source": 2
            },
            {
              "begin": 4877,
              "end": 4893,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 4877,
              "end": 4893,
              "name": "SWAP2",
              "source": 2
            },
            {
              "begin": 4877,
              "end": 4893,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 4909,
              "end": 4920,
              "name": "SWAP3",
              "source": 2
            },
            {
              "begin": 4909,
              "end": 4920,
              "name": "DUP4",
              "source": 2
            },
            {
              "begin": 4909,
              "end": 4920,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 4902,
              "end": 4931,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 4955,
              "end": 4957,
              "name": "PUSH",
              "source": 2,
              "value": "24"
            },
            {
              "begin": 4947,
              "end": 4958,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 4947,
              "end": 4958,
              "name": "SWAP2",
              "source": 2
            },
            {
              "begin": 4376,
              "end": 4964,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 4376,
              "end": 4964,
              "name": "JUMP",
              "source": 2,
              "value": "[out]"
            },
            {
              "begin": 4969,
              "end": 5352,
              "name": "tag",
              "source": 2,
              "value": "182"
            },
            {
              "begin": 4969,
              "end": 5352,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 5118,
              "end": 5120,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 5107,
              "end": 5116,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 5100,
              "end": 5121,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 5081,
              "end": 5085,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 5150,
              "end": 5156,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 5144,
              "end": 5157,
              "name": "MLOAD",
              "source": 2
            },
            {
              "begin": 5193,
              "end": 5199,
              "name": "DUP1",
              "source": 2
            },
            {
              "begin": 5188,
              "end": 5190,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 5177,
              "end": 5186,
              "name": "DUP5",
              "source": 2
            },
            {
              "begin": 5173,
              "end": 5191,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 5166,
              "end": 5200,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 5209,
              "end": 5275,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "293"
            },
            {
              "begin": 5268,
              "end": 5274,
              "name": "DUP2",
              "source": 2
            },
            {
              "begin": 5263,
              "end": 5265,
              "name": "PUSH",
              "source": 2,
              "value": "40"
            },
            {
              "begin": 5252,
              "end": 5261,
              "name": "DUP6",
              "source": 2
            },
            {
              "begin": 5248,
              "end": 5266,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 5243,
              "end": 5245,
              "name": "PUSH",
              "source": 2,
              "value": "20"
            },
            {
              "begin": 5235,
              "end": 5241,
              "name": "DUP8",
              "source": 2
            },
            {
              "begin": 5231,
              "end": 5246,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 5209,
              "end": 5275,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "252"
            },
            {
              "begin": 5209,
              "end": 5275,
              "name": "JUMP",
              "source": 2,
              "value": "[in]"
            },
            {
              "begin": 5209,
              "end": 5275,
              "name": "tag",
              "source": 2,
              "value": "293"
            },
            {
              "begin": 5209,
              "end": 5275,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 5336,
              "end": 5338,
              "name": "PUSH",
              "source": 2,
              "value": "1F"
            },
            {
              "begin": 5315,
              "end": 5330,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "source": -1,
              "value": "1F"
            },
            {
              "begin": -1,
              "end": -1,
              "name": "NOT",
              "source": -1
            },
            {
              "begin": 5311,
              "end": 5340,
              "name": "AND",
              "source": 2
            },
            {
              "begin": 5296,
              "end": 5341,
              "name": "SWAP2",
              "source": 2
            },
            {
              "begin": 5296,
              "end": 5341,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 5296,
              "end": 5341,
              "name": "SWAP2",
              "source": 2
            },
            {
              "begin": 5296,
              "end": 5341,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 5343,
              "end": 5345,
              "name": "PUSH",
              "source": 2,
              "value": "40"
            },
            {
              "begin": 5292,
              "end": 5346,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 5292,
              "end": 5346,
              "name": "SWAP3",
              "source": 2
            },
            {
              "begin": 4969,
              "end": 5352,
              "name": "SWAP2",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 4969,
              "end": 5352,
              "name": "JUMP",
              "source": 2,
              "value": "[out]"
            },
            {
              "begin": 5357,
              "end": 5477,
              "name": "tag",
              "source": 2,
              "value": "184"
            },
            {
              "begin": 5357,
              "end": 5477,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 5397,
              "end": 5398,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 5423,
              "end": 5424,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 5413,
              "end": 5448,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "296"
            },
            {
              "begin": 5413,
              "end": 5448,
              "name": "JUMPI",
              "source": 2
            },
            {
              "begin": 5428,
              "end": 5446,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "296"
            },
            {
              "begin": 5428,
              "end": 5446,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "251"
            },
            {
              "begin": 5428,
              "end": 5446,
              "name": "JUMP",
              "source": 2,
              "value": "[in]"
            },
            {
              "begin": 5428,
              "end": 5446,
              "name": "tag",
              "source": 2,
              "value": "296"
            },
            {
              "begin": 5428,
              "end": 5446,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 5462,
              "end": 5471,
              "name": "DIV",
              "source": 2
            },
            {
              "begin": 5462,
              "end": 5471,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 5357,
              "end": 5477,
              "name": "JUMP",
              "source": 2,
              "value": "[out]"
            },
            {
              "begin": 5840,
              "end": 5975,
              "name": "tag",
              "source": 2,
              "value": "194"
            },
            {
              "begin": 5840,
              "end": 5975,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 5879,
              "end": 5882,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 5900,
              "end": 5917,
              "name": "PUSH",
              "source": 2,
              "value": "1"
            },
            {
              "begin": 5900,
              "end": 5917,
              "name": "DUP3",
              "source": 2
            },
            {
              "begin": 5900,
              "end": 5917,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 5897,
              "end": 5940,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "300"
            },
            {
              "begin": 5897,
              "end": 5940,
              "name": "JUMPI",
              "source": 2
            },
            {
              "begin": 5920,
              "end": 5938,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "300"
            },
            {
              "begin": 5920,
              "end": 5938,
              "name": "PUSH [tag]",
              "source": 2,
              "value": "250"
            },
            {
              "begin": 5920,
              "end": 5938,
              "name": "JUMP",
              "source": 2,
              "value": "[in]"
            },
            {
              "begin": 5920,
              "end": 5938,
              "name": "tag",
              "source": 2,
              "value": "300"
            },
            {
              "begin": 5920,
              "end": 5938,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": -1,
              "end": -1,
              "name": "POP",
              "source": -1
            },
            {
              "begin": 5967,
              "end": 5968,
              "name": "PUSH",
              "source": 2,
              "value": "1"
            },
            {
              "begin": 5956,
              "end": 5969,
              "name": "ADD",
              "source": 2
            },
            {
              "begin": 5956,
              "end": 5969,
              "name": "SWAP1",
              "source": 2
            },
            {
              "begin": 5840,
              "end": 5975,
              "name": "JUMP",
              "source": 2,
              "value": "[out]"
            },
            {
              "begin": 6743,
              "end": 6870,
              "name": "tag",
              "source": 2,
              "value": "235"
            },
            {
              "begin": 6743,
              "end": 6870,
              "name": "JUMPDEST",
              "source": 2
            },
            {
              "begin": 6804,
              "end": 6814,
              "name": "PUSH",
              "source": 2,
              "value": "4E487B71"
            },
            {
              "begin": 6799,
              "end": 6802,
              "name": "PUSH",
              "source": 2,
              "value": "E0"
            },
            {
              "begin": 6795,
              "end": 6815,
              "name": "SHL",
              "source": 2
            },
            {
              "begin": 6792,
              "end": 6793,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 6785,
              "end": 6816,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 6835,
              "end": 6839,
              "name": "PUSH",
              "source": 2,
              "value": "41"
            },
            {
              "begin": 6832,
              "end": 6833,
              "name": "PUSH",
              "source": 2,
              "value": "4"
            },
            {
              "begin": 6825,
              "end": 6840,
              "name": "MSTORE",
              "source": 2
            },
            {
              "begin": 6859,
              "end": 6863,
              "name": "PUSH",
              "source": 2,
              "value": "24"
            },
            {
              "begin": 6856,
              "end": 6857,
              "name": "PUSH",
              "source": 2,
              "value": "0"
            },
            {
              "begin": 6849,
              "end": 6864,
              "name": "REVERT",
              "source": 2
            }
          ]
        }
      }
    },
    "methodIdentifiers": {
      "BuyTickets()": "91d8b14e",
      "CurrentWinningReward()": "c6944fa0",
      "DrawWinnerTicket()": "4788af7c",
      "IsWinner()": "96c85ef3",
      "RefundAll()": "a88f4672",
      "RemainingTickets()": "93a563b5",
      "WithdrawCommission()": "35580df2",
      "WithdrawWinnings()": "71827b7b",
      "checkWinningsAmount()": "0789c607",
      "duration()": "0fb5a6b4",
      "expiration()": "4665096d",
      "getTickets()": "4ed02622",
      "getWinningsForAddress(address)": "dd64e534",
      "lastWinner()": "fe188184",
      "lastWinnerAmount()": "06f7f3bf",
      "lotteryOperator()": "5a58acdd",
      "maxTickets()": "9b894703",
      "operatorTotalCommission()": "ba946d79",
      "restartDraw()": "f2613269",
      "ticketCommission()": "6032a4f9",
      "ticketPrice()": "1209b1f6",
      "tickets(uint256)": "50b44712",
      "winnings(address)": "ea3a1499"
    }
  },
  "ewasm": {
    "wasm": ""
  },
  "metadata": "{\"compiler\":{\"version\":\"0.8.13+commit.abaa5c0e\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"BuyTickets\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"CurrentWinningReward\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"DrawWinnerTicket\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"IsWinner\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"RefundAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"RemainingTickets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"WithdrawCommission\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"WithdrawWinnings\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"checkWinningsAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"duration\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"expiration\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTickets\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"getWinningsForAddress\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"lastWinner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"lastWinnerAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"lotteryOperator\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"maxTickets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"operatorTotalCommission\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"restartDraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ticketCommission\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ticketPrice\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"tickets\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"winnings\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"Lottery.sol\":\"Lottery\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":800},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"Lottery.sol\":{\"keccak256\":\"0xba3aba38bb6281d182e3e5c7e804cbe2d5529fc46553bb1d59b08ad249edaa37\",\"license\":\"GPL-3.0\",\"urls\":[\"bzz-raw://e83a278c09d0fed9183a3b9815bdc4a23ca6b8f639c30af364483ae53c3e89a7\",\"dweb:/ipfs/Qmd8b3TK7SMpBTwiZXdLaoL87W3UTiS8aT7rpP7BPoxxGF\"]}},\"version\":1}",
  "storageLayout": {
    "storage": [
      {
        "astId": 16,
        "contract": "Lottery.sol:Lottery",
        "label": "expiration",
        "offset": 0,
        "slot": "0",
        "type": "t_uint256"
      },
      {
        "astId": 18,
        "contract": "Lottery.sol:Lottery",
        "label": "lotteryOperator",
        "offset": 0,
        "slot": "1",
        "type": "t_address"
      },
      {
        "astId": 21,
        "contract": "Lottery.sol:Lottery",
        "label": "operatorTotalCommission",
        "offset": 0,
        "slot": "2",
        "type": "t_uint256"
      },
      {
        "astId": 23,
        "contract": "Lottery.sol:Lottery",
        "label": "lastWinner",
        "offset": 0,
        "slot": "3",
        "type": "t_address"
      },
      {
        "astId": 25,
        "contract": "Lottery.sol:Lottery",
        "label": "lastWinnerAmount",
        "offset": 0,
        "slot": "4",
        "type": "t_uint256"
      },
      {
        "astId": 29,
        "contract": "Lottery.sol:Lottery",
        "label": "winnings",
        "offset": 0,
        "slot": "5",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 32,
        "contract": "Lottery.sol:Lottery",
        "label": "tickets",
        "offset": 0,
        "slot": "6",
        "type": "t_array(t_address)dyn_storage"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_array(t_address)dyn_storage": {
        "base": "t_address",
        "encoding": "dynamic_array",
        "label": "address[]",
        "numberOfBytes": "32"
      },
      "t_mapping(t_address,t_uint256)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}
```

### In contract/Lottery.sol:

```
// SPDX-License-Identifier: GPL-3.0
import "@openzeppelin/contracts/utils/Strings.sol";

pragma solidity >=0.7.0 <0.9.0;

contract Lottery {
    uint256 public constant ticketPrice = 0.01 ether;
    uint256 public constant maxTickets = 100; // maximum tickets per lottery
    uint256 public constant ticketCommission = 0.001 ether; // commition per ticket
    uint256 public constant duration = 30 minutes; // The duration set for the lottery

    uint256 public expiration; // Timeout in case That the lottery was not carried out.
    address public lotteryOperator; // the crator of the lottery
    uint256 public operatorTotalCommission = 0; // the total commission balance
    address public lastWinner; // the last winner of the lottery
    uint256 public lastWinnerAmount; // the last winner amount of the lottery

    mapping(address => uint256) public winnings; // maps the winners to there winnings
    address[] public tickets; //array of purchased Tickets

    // modifier to check if caller is the lottery operator
    modifier isOperator() {
        require(
            (msg.sender == lotteryOperator),
            "Caller is not the lottery operator"
        );
        _;
    }

    // modifier to check if caller is a winner
    modifier isWinner() {
        require(IsWinner(), "Caller is not a winner");
        _;
    }

    constructor() {
        lotteryOperator = msg.sender;
        expiration = block.timestamp + duration;
    }

    // return all the tickets
    function getTickets() public view returns (address[] memory) {
        return tickets;
    }

    function getWinningsForAddress(address addr) public view returns (uint256) {
        return winnings[addr];
    }

    function BuyTickets() public payable {
        require(
            msg.value % ticketPrice == 0,
            string.concat(
                "the value must be multiple of ",
                Strings.toString(ticketPrice),
                " Ether"
            )
        );
        uint256 numOfTicketsToBuy = msg.value / ticketPrice;

        require(
            numOfTicketsToBuy <= RemainingTickets(),
            "Not enough tickets available."
        );

        for (uint256 i = 0; i < numOfTicketsToBuy; i++) {
            tickets.push(msg.sender);
        }
    }

    function DrawWinnerTicket() public isOperator {
        require(tickets.length > 0, "No tickets were purchased");

        bytes32 blockHash = blockhash(block.number - tickets.length);
        uint256 randomNumber = uint256(
            keccak256(abi.encodePacked(block.timestamp, blockHash))
        );
        uint256 winningTicket = randomNumber % tickets.length;

        address winner = tickets[winningTicket];
        lastWinner = winner;
        winnings[winner] += (tickets.length * (ticketPrice - ticketCommission));
        lastWinnerAmount = winnings[winner];
        operatorTotalCommission += (tickets.length * ticketCommission);
        delete tickets;
        expiration = block.timestamp + duration;
    }

    function restartDraw() public isOperator {
        require(tickets.length == 0, "Cannot Restart Draw as Draw is in play");

        delete tickets;
        expiration = block.timestamp + duration;
    }

    function checkWinningsAmount() public view returns (uint256) {
        address payable winner = payable(msg.sender);

        uint256 reward2Transfer = winnings[winner];

        return reward2Transfer;
    }

    function WithdrawWinnings() public isWinner {
        address payable winner = payable(msg.sender);

        uint256 reward2Transfer = winnings[winner];
        winnings[winner] = 0;

        winner.transfer(reward2Transfer);
    }

    function RefundAll() public {
        require(block.timestamp >= expiration, "the lottery not expired yet");

        for (uint256 i = 0; i < tickets.length; i++) {
            address payable to = payable(tickets[i]);
            tickets[i] = address(0);
            to.transfer(ticketPrice);
        }
        delete tickets;
    }

    function WithdrawCommission() public isOperator {
        address payable operator = payable(msg.sender);

        uint256 commission2Transfer = operatorTotalCommission;
        operatorTotalCommission = 0;

        operator.transfer(commission2Transfer);
    }

    function IsWinner() public view returns (bool) {
        return winnings[msg.sender] > 0;
    }

    function CurrentWinningReward() public view returns (uint256) {
        return tickets.length * ticketPrice;
    }

    function RemainingTickets() public view returns (uint256) {
        return maxTickets - tickets.length;
    }
}
```

#### [Thirdweb Deploy](https://portal.thirdweb.com/deploy)

```
npx thirdweb deploy (Let's you deploy once)
```

Running the command above will:

- Compile all the contracts in the current directory.
- Allow you to select which contract(s) you want to deploy.
- Upload your contract source code (ABI) to IPFS.
- Open the deploy flow in the dashboard for you to select one of our supported networks to deploy to.

We use Thirdweb Release instead.

#### [Thirdweb Release](https://portal.thirdweb.com/release):

By releasing your contract onto the thirdweb registry, you unlock a way of creating versioned deployments of you contracts. When you publish a new version, you can easily deploy it to any supported netwroks in one cick, without exposing your private key at any point.

If you run into a bug run "npx thirdweb@latest release"

Install dependencies:

```
cd contract
npm init
npm install @openzeppelin/contracts
npx thirdweb@latest release
Ok to proceed? (y) y
Do you want to continue and compile this project with solc instead? (y/N) · true
```

This will upload the contract to thirdweb and we can release this contract on the blockchain.

- When the thirdweb site opens connect to your MetaMask wallet.
- When developing this Crypto App we used the Testnet "Mumbai (MATIC)"
- Release Name: Crypto Lottery Dapp v1
- Description: Crypto Lottery Dapp by Valyn D'Silva
- Create Release > Sign
- The Contract releases on the Polygon network. Releasing is free (gasless).
- Deploy Now
- Choose Network/Chain: Testnet "Mumbai (MATIC)" > Deploy Now > Confirm > Contract Deployment(Pending) > Multicall (Unapproved) > Confirm > Contract successfully deployed

- You can get MATIC from https://mumbaifaucet.com/ or https://faucet.polygon.technology/

In contract/Lottery.sol ticketPrice = 0.01 ether
Go to Explorer > Write > BuyTickets: Native Token Value: 0.01 > Execute > MetaMAsk pop-up > Confirm
Go to Explorer > Read > getTickets. You see 1 ticket.
Go to Explorer > Read > remianingTickets. You see 99 tickets reminaing.

Everytime you deploy you need to use the latest contract address.

Go to Code tab > React

Install [thirdweb React SDK](https://portal.thirdweb.com/react) dependencies in the root of project:

```
npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers
```

In pages/\_app.tsx:

```
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp
```

We can now make use of the thirdweb hooks after wrapping the ThirdwebProvider in \_app.tsx.

## Build Frontend UI:

### NavButton Component:

In root directory create components/NavButton.tsx:

```
import React from "react";

interface Props {
  title: string;
  isActive?:boolean;
  onClick?:()=>void;
}
function NavButton({ title, isActive, onClick }: Props) {
  return <button onClick={onClick} className={`${isActive && "bg-[#036756]"} hover:bg-[#036756] text-white font-bold py-2 px-4 rounded`}>{title}</button>;
}

export default NavButton;

```

### Header Component:

In root directory create components/Header.tsx:

```
import Image from "next/image";
import React from "react";
import NavButton from "./NavButton";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";

function Header() {
  const address = useAddress();
  console.log(address);
  const disconnect = useDisconnect();
  return (
    <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
      <div className="flex items-center space-x-2">
        <Image
          src="/profile.png"
          alt="Profile Picture"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div>
          <h1 className="text-lg text-white fontbold">Valyn D'Silva</h1>
          <p className="text-xs text-emerald-500 truncate">
            User:{address?.substring(0, 5)}...
            {address?.substring(address.length, address.length - 5)}
          </p>
        </div>
      </div>
      <div className="hidden md:col-span-3 md:flex items-center justify-center rounded-md">
        <div className="bg-[#0A1F1C] p-4 space-x-2">
          <NavButton title="Buy Tickets" isActive />
          <NavButton title="Logout" onClick={disconnect} />
        </div>
      </div>

      <div className="flex flex-col ml-auto text-right">
        <Bars3BottomRightIcon className="h-8 w-8 mx-auto text-white cursor-pointer" />
        <span className="md:hidden">
          <NavButton title="Logout" onClick={disconnect} />
        </span>
      </div>
    </header>
  );
}

export default Header;


```

### Create components/Login.tsx:

```
import Image from "next/image";
import React from "react";
import { useMetamask } from "@thirdweb-dev/react";

function Login() {
  const connectWithMetamask = useMetamask();
  return (
    <div className="bg-[#091B18] min-h-screen flex flex--col items-center justify-center text-center">
      <div className="flex flex-col items-center mb-10">
        <Image
          src="/profile.png"
          alt="Profile Picture"
          width={224}
          height={224}
          className="rounded-full mb-10"
        />
        <h1 className="text-6xl text-white font-bold">The Lucky Draw</h1>
        <h2 className="text-white">
          Get Started By logging in with your MetaMask
        </h2>
        <button
          onClick={connectWithMetamask}
          className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
        >
          Login with MetaMask
        </button>
      </div>
    </div>
  );
}

export default Login;
```

### Create components/Loading.tsx:

```
import Image from "next/image";
import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function Loading() {
  return (
    <div className="bg-[#091B18] h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x -2 mb-10 ">
        <Image
          src="/profile.png"
          alt="banner image"
          width={80}
          height={80}
          className="rounded-full mr-2"
        />
        <h1 className="text-lg text-white font-bold">Loading the LUCKY DRAW</h1>
      </div>
      <PropagateLoader color="white" size={30} />
    </div>
  );
}

export default Loading;

```

### In components/index.tsx:

```
export {default as Header} from "./Header"
export {default as NavButton} from "./NavButton"
export {default as Login} from "./Login"
export {default as Loading} from "./Loading"
```

### Create an env.local file:

To execute all the functions related to the Contract you need to pull in the contract from Thirdweb. Copy the contract address from thirdweb.

In .env.local:

```
NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS=...
```

Restart server.

If you do any changes to your smart contract you need to run:

```
npx thirdweb release
```

The smart contract address changes. So you need to use the latest address in your app.

### Install [react-spinners](https://www.npmjs.com/package/react-spinners):

```
npm install --save react-spinners
```

### Upate pages/index.tsx:

```
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header, Loading, Login } from "../components";
import { useAddress, useContract } from "@thirdweb-dev/react";

const Home: NextPage = () => {
  const address = useAddress();
  console.log(address);
  const { isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  if (isLoading) return <Loading />;
  if (!address) return <Login />;

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Crypto Lottery</title>
      </Head>
      <Header />
    </div>
  );
};

export default Home;

```

### Building the Next Draw UI:

#### Create components/NextDraw.tsx:

```
import React from "react";

function NextDraw() {
  return <div>NextDraw</div>;
}

export default NextDraw;

```

#### Create components/TicketPrice.tsx:

```
import React from "react";

function TicketPrice() {
  return <div>TicketPrice</div>;
}

export default TicketPrice;

```

#### Create components/CountdownTimer.tsx:

```
import React from "react";

function CountdownTimer() {
  return <div>CountdownTimer</div>;
}

export default CountdownTimer;

```

#### Update components/index.tsx:

```
export {default as Header} from "./Header"
export {default as NavButton} from "./NavButton"
export {default as Login} from "./Login"
export {default as Loading} from "./Loading"
export {default as NextDraw} from "./NextDraw"
export {default as CountdownTimer} from "./CountdownTimer"
export {default as TicketPrice} from "./TicketPrice"
```

#### Update pages/index.tsx:

```
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header, Loading, Login, NextDraw } from "../components";
import { useAddress, useContract } from "@thirdweb-dev/react";

const Home: NextPage = () => {
  const address = useAddress();
  console.log(address);
  const { isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  if (isLoading) return <Loading />;
  if (!address) return <Login />;

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Crypto Lottery</title>
      </Head>
      <div className="flex-1">
        <Header />
        <NextDraw />
      </div>
    </div>
  );
};

export default Home;



```

#### Update styles/global.css:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .stats {
    @apply bg-[#091F1C] text-white p-4 flex-1 rounded-md border-2 border-[#004337];
  }

  .stats-container {
    @apply bg-[#091F1C] p-5 rounded-lg border-[#004337] border;
  }

  .fees {
    @apply flex items-center justify-between text-emerald-300 text-xs italic;
  }
}

```

#### Update components/NextDraw.tsx:

```
import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";

function NextDraw() {
  const [quantity, setQuantity] = useState<number>(1);
  return (
    <div className="space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5">
      <div className="stats-container">
        <h1 className="text-5xl text-white font-semibold text-center">
          The Next Draw
        </h1>
        <div className="flex justify-between p-2 space-x-2">
          <div className="stats">
            <h2 className="text-sm">Total Pool</h2>
            <p className="text-xl">0.1 MATIC</p>
          </div>
          <div className="stats">
            <h2 className="text-sm">Tickets Remaing</h2>
            <p className="text-xl">100</p>
          </div>
        </div>
        <CountdownTimer />
      </div>
     <TicketPrice />
    </div>
  );
}

export default NextDraw;
```

### Pulling Lottery Statistics from Thirdweb:

#### Go to thirdweb under Code tab

In Reading Data section check: Remaining Tickets, CurrentWinningReward, ticketPrice, ticketCommission, expiration and copy the code
When you read the currency value in third web it normally returns with a wei or gwei which isa smallest unit that represents a matic, etherium etc. We us formatEther() to convert to etherium or matic value using the ethers libarary.

#### Create a constants.ts file in the root:

```
export const currency: string = "MATIC";
```

#### Update components/NextDraw.tsx:

```
import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { currency } from "../constants";
import TicketPrice from "./TicketPrice";

function NextDraw() {
  const [countdownEnded, setCountdownEnded] = useState<boolean>(false);
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: remainingTickets } = useContractRead(
    contract,
    "RemainingTickets"
  );
  const { data: currentWinningReward } = useContractRead(
    contract,
    "CurrentWinningReward"
  );
  const { data: duration } = useContractRead(contract, "duration");
  console.log(duration);
  return (
    <div className="space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5">
      <div className="stats-container">
        <h1 className="text-5xl text-white font-semibold text-center">
          The Next Draw
        </h1>
        <div className="flex justify-between p-2 space-x-2">
          <div className="stats">
            <h2 className="text-sm">Total Pool</h2>
            <p className="text-xl">
              {currentWinningReward &&
                ethers.utils.formatEther(currentWinningReward.toString())}{" "}
              {currency}
            </p>
          </div>
          <div className="stats">
            <h2 className="text-sm">Tickets Remaing</h2>
            <p className="text-xl">{remainingTickets?.toNumber()}</p>
          </div>
        </div>
        {duration !== undefined && (
          <CountdownTimer setCountdownEnded={setCountdownEnded} />
        )}
      </div>
      <TicketPrice countdownEnded={countdownEnded} />
    </div>
  );
}

export default NextDraw;


```

#### Update components/TicketPrice.tsx:

```
import React, { useState } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { currency } from "../constants";

interface Props {
  countdownEnded: boolean;
}

function TicketPrice({ countdownEnded }: Props) {

  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: ticketPrice } = useContractRead(contract, "ticketPrice");
  const { data: ticketCommission } = useContractRead(
    contract,
    "ticketCommission"
  );
  const { data: remainingTickets } = useContractRead(
    contract,
    "RemainingTickets"
  );
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="stats-container space-y-2">
      <div className="stats-container">
        <div className="flex justify-between items-center text-white pb-2">
          <h2>Price per ticket</h2>
          <p>
            {ticketPrice && ethers.utils.formatEther(ticketPrice.toString())}{" "}
            {currency}
          </p>
        </div>
        <div className="flex text-white items-center space-x-2 bg-[#091B18]  border-[#004337] border p-4">
          <p>TICKETS</p>
          <input
            type="number"
            className="flex w-full bg-transparent text-right outline-none"
            min={1}
            max={10}
            value={quantity}
            //   onChange={(e) => setQuantity(parseInt(e.target.value))}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <div className="space-y-2 mt-5">
          <div className="fees font-extrabold text-sm">
            <p>Total cost of tickets</p>
            <p>
              {ticketPrice &&
                Number(ethers.utils.formatEther(ticketPrice?.toString())) *
                  quantity}{" "}
              {currency}
            </p>
          </div>
          <div className="fees">
            <p>Service fees</p>
            <p>
              {" "}
              {ticketCommission &&
                ethers.utils.formatEther(ticketCommission.toString())}{" "}
              {currency}
            </p>
          </div>
          <div className="fees">
            <p>+ Network Fees</p>
            <p>TBC</p>
          </div>
        </div>
        <button
          disabled={countdownEnded || remainingTickets?.toNumber === 0}
          className="mt-5 w-full bg-gradient-to-br from-orange-500 to-emerald-600 px-10 py-5 rounded-md text-white shadow-xl disabled:from-gray-600 disabled:to-gray-100 disabled:text-gray-100 disabled:cursor-not-allowed"
        >
          Buy Tickets
        </button>
      </div>
    </div>
  );
}

export default TicketPrice;

```

#### Update styles/global.css:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .stats {
    @apply bg-[#091F1C] text-white p-4 flex-1 rounded-md border-2 border-[#004337];
  }

  .stats-container {
    @apply bg-[#091F1C] p-5 rounded-lg border-[#004337] border;
  }

  .fees {
    @apply flex items-center justify-between text-emerald-300 text-xs italic;
  }

  .countdown {
    @apply p-8 text-5xl text-center text-white rounded-lg lg:min-w-[150px] bg-[#013F34];
  }
  .countdown-label {
    @apply text-center text-white uppercase text-sm p-4;
  }
}
```

#### Update components/CountdownTimer.tsx:

Install dependencies [react-countdown](https://www.npmjs.com/package/react-countdown):

```
npm install react-countdown --save
```

In components/CountdownTimer.tsx:

```
import React, { useRef } from "react";
import { useContract, useContractRead } from "@thirdweb-dev/react";
import Countdown from "react-countdown";

interface Props {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}
interface CountdownProps {
  setCountdownEnded: (countdownEnded: boolean) => void;
}
function CountdownTimer({ setCountdownEnded }: CountdownProps) {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: expiration, isLoading: isLoadingExpiration } = useContractRead(
    contract,
    "expiration"
  );
  const { data: duration } = useContractRead(contract, "duration");

  // Avoid reloading timer
  const startDate = useRef(Date.now());
  // const timer = startDate.current + 5000; // 5 seconds
  // const timer = startDate.current + expiration * 1000;
  const timer = startDate.current + duration * 1000;

  const renderer = ({ hours, minutes, seconds, completed }: Props) => {
    if (completed) {
      setCountdownEnded(completed);
      // console.log(completed);
      // Render a completed state
      return (
        <div>
          <h2 className="text-white text-xl text-center mb-2 animate-bounce">
            Ticket Sales have now CLOSED for this draw
          </h2>
          <div className="flex space-x-6">
            <div className="flex-1">
              <div className="countdown animate-pulse">{hours}</div>
              <div className="countdown-label">hours</div>
            </div>
            <div className="flex-1">
              <div className="countdown animate-pulse">{minutes}</div>
              <div className="countdown-label">minutes</div>
            </div>
            <div className="flex-1">
              <div className="countdown animate-pulse">{seconds}</div>
              <div className="countdown-label">seconds</div>
            </div>
          </div>
        </div>
      );
    } else {
      // Render a countdown
      return (
        <div>
          <h3 className="text-white text-sm mb-2 italic">Time Remaining</h3>
          <div className="flex space-x-6">
            <div className="flex-1">
              <div className="countdown">{hours}</div>
              <div className="countdown-label">hours</div>
            </div>
            <div className="flex-1">
              <div className="countdown">{minutes}</div>
              <div className="countdown-label">minutes</div>
            </div>
            <div className="flex-1">
              <div className="countdown">{seconds}</div>
              <div className="countdown-label">seconds</div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="mt-5 mb-3">
      <div>
        {/* <Countdown date={new Date(expiration * 1000) } renderer={renderer} /> */}
        <Countdown date={timer} renderer={renderer} />
      </div>
    </div>
  );
}

export default CountdownTimer;

```

To restart the draw open the smart contract in thirdweb
DrawWinnerTicket > Execute (This resets all the tickets)

### Implementing Buy Ticket Functionality:

#### Install [React Hot Toast](https://react-hot-toast.com/):

```
npm install react-hot-toast
```

#### Update pages/_app_.tsx:

```
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import {Toaster} from "react-hot-toast"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <Component {...pageProps} />
      <Toaster/>
    </ThirdwebProvider>
  );
}

export default MyApp

```

#### Update components/TicketPrice.tsx:

```
import React, { useState } from "react";
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { currency } from "../constants";
import toast from "react-hot-toast";

interface Props {
  countdownEnded: boolean;
}

function TicketPrice({ countdownEnded }: Props) {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: ticketPrice } = useContractRead(contract, "ticketPrice");
  const { data: ticketCommission } = useContractRead(
    contract,
    "ticketCommission"
  );

  const { data: remainingTickets } = useContractRead(
    contract,
    "RemainingTickets"
  );
  const [quantity, setQuantity] = useState<number>(1);

  const { mutateAsync: BuyTickets } = useContractWrite(contract, "BuyTickets");

  const handleClick = async () => {
    if (!ticketPrice) return;
    const notification = toast.loading("Buying your tickets...");
    try {
      const data = await BuyTickets([
        {
          value: ethers.utils.parseEther(
            (
              Number(ethers.utils.formatEther(ticketPrice)) * quantity
            ).toString()
          ),
        },
      ]);
      toast.success("Tickets purchased successfully!", { id: notification });
      console.log("Contract call success!", data);
    } catch (err) {
      toast.error("Whoops, something went wrong!", { id: notification });
      console.log("Contract call failure!", err);
    }
  };

  return (
    <div className="stats-container space-y-2">
      <div className="stats-container">
        <div className="flex justify-between items-center text-white pb-2">
          <h2>Price per ticket</h2>
          <p>
            {ticketPrice && ethers.utils.formatEther(ticketPrice.toString())}{" "}
            {currency}
          </p>
        </div>
        <div className="flex text-white items-center space-x-2 bg-[#091B18]  border-[#004337] border p-4">
          <p>TICKETS</p>
          <input
            type="number"
            className="flex w-full bg-transparent text-right outline-none"
            min={1}
            max={10}
            value={quantity}
            //   onChange={(e) => setQuantity(parseInt(e.target.value))}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <div className="space-y-2 mt-5">
          <div className="fees font-extrabold text-sm">
            <p>Total cost of tickets</p>
            <p>
              {ticketPrice &&
                Number(ethers.utils.formatEther(ticketPrice?.toString())) *
                  quantity}{" "}
              {currency}
            </p>
          </div>
          <div className="fees">
            <p>Service fees</p>
            <p>
              {" "}
              {ticketCommission &&
                ethers.utils.formatEther(ticketCommission.toString())}{" "}
              {currency}
            </p>
          </div>
          <div className="fees">
            <p>+ Network Fees</p>
            <p>TBC</p>
          </div>
        </div>
        <button
          onClick={handleClick}
           disabled={countdownEnded || remainingTickets?.toNumber === 0}
          className="mt-5 w-full bg-gradient-to-br from-orange-500 to-emerald-600 px-10 py-5 rounded-md font-semibold text-white shadow-xl disabled:from-gray-600 disabled:to-gray-100 disabled:text-gray-100 disabled:cursor-not-allowed"
        >
          Buy {quantity} tickets for{" "}
          {ticketPrice &&
            Number(ethers.utils.formatEther(ticketPrice.toString())) *
              quantity}{" "}
          {currency}
        </button>
      </div>
    </div>
  );
}

export default TicketPrice;

```

### Building the Ticket Box UI:

#### Update components/TicketPrice.tsx:

```
import React, { useEffect, useRef, useState } from "react";
import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { currency } from "../constants";
import toast from "react-hot-toast";

interface Props {
  countdownEnded: boolean;
}

function TicketPrice({ countdownEnded }: Props) {
  const address = useAddress();
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: ticketPrice } = useContractRead(contract, "ticketPrice");
  const { data: ticketCommission } = useContractRead(
    contract,
    "ticketCommission"
  );
  const { data: remainingTickets } = useContractRead(
    contract,
    "RemainingTickets"
  );
  const { data: tickets } = useContractRead(contract, "getTickets");

  const [userTickets, setUserTickets] = useState(0);
  const [quantity, setQuantity] = useState<number>(1);

  const { mutateAsync: BuyTickets } = useContractWrite(contract, "BuyTickets");

  useEffect(() => {
    if (!tickets) return;
    const totalTickets: string[] = tickets;
    const noOfUserTickets = totalTickets.reduce(
      (total, ticketAddress) => (ticketAddress === address ? total + 1 : total),
      0
    );
    setUserTickets(noOfUserTickets);
  }, [tickets, address]);
  // console.log(userTickets);

  const handleClick = async () => {
    if (!ticketPrice) return;
    const notification = toast.loading("Buying your tickets...");
    try {
      const data = await BuyTickets([
        {
          value: ethers.utils.parseEther(
            (
              Number(ethers.utils.formatEther(ticketPrice)) * quantity
            ).toString()
          ),
        },
      ]);
      toast.success("Tickets purchased successfully!", { id: notification });
      console.log("Contract call success!", data);
      setQuantity(0);
    } catch (err) {
      toast.error("Whoops, something went wrong!", { id: notification });
      console.log("Contract call failure!", err);
    }
  };

  return (
    <div className="stats-container space-y-2">
      <div className="stats-container">
        <div className="flex justify-between items-center text-white pb-2">
          <h2>Price per ticket</h2>
          <p>
            {ticketPrice && ethers.utils.formatEther(ticketPrice.toString())}{" "}
            {currency}
          </p>
        </div>
        <div className="flex text-white items-center space-x-2 bg-[#091B18]  border-[#004337] border p-4">
          <p>TICKETS</p>
          <input
            type="number"
            className="flex w-full bg-transparent text-right outline-none"
            min={1}
            max={10}
            value={quantity}
            //   onChange={(e) => setQuantity(parseInt(e.target.value))}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <div className="space-y-2 mt-5">
          <div className="fees font-extrabold text-sm">
            <p>Total cost of tickets</p>
            <p>
              {ticketPrice &&
                Number(ethers.utils.formatEther(ticketPrice?.toString())) *
                  quantity}{" "}
              {currency}
            </p>
          </div>
          <div className="fees">
            <p>Service fees</p>
            <p>
              {" "}
              {ticketCommission &&
                ethers.utils.formatEther(ticketCommission.toString())}{" "}
              {currency}
            </p>
          </div>
          <div className="fees">
            <p>+ Network Fees</p>
            <p>TBC</p>
          </div>
        </div>
        <button
          onClick={handleClick}
          disabled={countdownEnded || remainingTickets?.toNumber === 0}
          className="mt-5 w-full bg-gradient-to-br from-orange-500 to-emerald-600 px-10 py-5 rounded-md font-semibold text-white shadow-xl disabled:from-gray-600 disabled:to-gray-100 disabled:text-gray-100 disabled:cursor-not-allowed"
        >
          Buy {quantity} tickets for{" "}
          {ticketPrice &&
            Number(ethers.utils.formatEther(ticketPrice.toString())) *
              quantity}{" "}
          {currency}
        </button>
      </div>
      {userTickets > 0 && (
        <div className="stats">
          <p className="text-lg mb-2">
            You have {userTickets} Tickets in this draw
          </p>
          <div className="flex max-w-sm flex-wrap gap-x-2 gap-y-2">
            {Array(userTickets)
              .fill("")
              .map((_, index) => (
                <p
                  key={index}
                  className="text-emerald-300 h-20 w-12 bg-emerald-500/30 rounded-lg flex flex-shrink-0 items-center justify-center text-xs italic"
                >
                  {index + 1}
                </p>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TicketPrice;


```

### Build the Footer:

#### Create components/Footer.tsx:

```
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer className="border-t border-emerald-500/20 flex items-center text-white justify-between p-5">
      <Image
        width={40}
        height={40}
        className="filter hue-rotate-90 opacity-20 rounded-full"
        src="/profile.png"
        alt="Profile Picture"
      />
      <p className="text-xs text-emerald-900 pl-5">
        DISCLAIMER: If you are gambling online utilizing this app, you are doing
        so completely and totally at your own risk. We are not liable for any
        losses that are incurred or problems that arise at online casinos or
        elsewhere.
      </p>
    </footer>
  );
}

export default Footer;

```

#### Update pages/index.tsx:

```
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer, Header, Loading, Login, NextDraw } from "../components";
import { useAddress, useContract } from "@thirdweb-dev/react";

const Home: NextPage = () => {
  const address = useAddress();
  console.log(address);
  const { isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  if (isLoading) return <Loading />;
  if (!address) return <Login />;

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Crypto Lottery</title>
      </Head>
      <div className="flex-1">
        <Header />
        <NextDraw />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;

```

### Implement Winner UI:

#### Create components/Winnings.tsx:

```
import React from "react";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { currency } from "../constants";
import { ethers } from "ethers";
import toast from "react-hot-toast";

interface Props {
  winnings: string;
}
function Winnings({ winnings }: Props) {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { mutateAsync: WithdrawWinnings } = useContractWrite(
    contract,
    "WithdrawWinnings"
  );
  const onWithdrawWinnings = async () => {
    const notification = toast.loading("Withdrawing winnings...");
    try {
      const data = await WithdrawWinnings([{}]);
      toast.success("Winnings withdrawn successfully!", { id: notification });
      console.log("Contract call successful!", data);
    } catch (err) {
      toast.error("Whoops, something went wrong!", { id: notification });
      console.log("Contract call failure!", err);
    }
  };

  return (
    <div className="max-w-md md:max-w-2xl lg:max-w-4xl mx-auto mt-5">
      <button
        onClick={onWithdrawWinnings}
        className="p-5 bg-gradient-to-b from-orange-500 to-emerald-600 animate-pulse text-center rounded-xl w-full"
      >
        <p className="font-bold">Winner Winner Chicken Dinner!</p>
        <p>
          Total Winnings:{ethers.utils.formatEther(winnings.toString())}{" "}
          {currency}
        </p>
        <br />
        <p className="font-bold">Click here to withdraw</p>
      </button>
    </div>
  );
}
export default Winnings;

```

#### Update pages/index.tsx:

```
import type { NextPage } from "next";
import Head from "next/head";
import {
  Footer,
  Header,
  Loading,
  Login,
  NextDraw,
  Winnings,
} from "../components";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";

const Home: NextPage = () => {
  const address = useAddress();
  console.log(address);
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: winnings } = useContractRead(
    contract,
    "getWinningsForAddress",
    address
  );

  if (isLoading) return <Loading />;
  if (!address) return <Login />;

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Crypto Lottery</title>
      </Head>
      <div className="flex-1">
        <Header />
        {winnings > 0 && <Winnings winnings={winnings} />}
        <NextDraw />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

```

Once you click on the But Ticket button, open Thirdweb and choose DrawWinnerTicket function under Write Data. When you refersh your app you should see the Winnings component flash.

### Implementing [React Fast Marquee](https://www.npmjs.com/package/react-fast-marquee):

```
npm install react-fast-marquee --save
```

```
import type { NextPage } from "next";
import Head from "next/head";
import {
  Footer,
  Header,
  Loading,
  Login,
  NextDraw,
  Winnings,
} from "../components";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Marquee from "react-fast-marquee";
import { ethers } from "ethers";
import { currency } from "../constants";

const Home: NextPage = () => {
  const address = useAddress();
  console.log(address);
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: winnings } = useContractRead(
    contract,
    "getWinningsForAddress",
    address
  );

  const { data: lastWinner } = useContractRead(contract, "lastWinner");

  const { data: lastWinnerAmount } = useContractRead(
    contract,
    "lastWinnerAmount"
  );

  if (isLoading) return <Loading />;
  if (!address) return <Login />;

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Crypto Lottery</title>
      </Head>
      <div className="flex-1">
        <Header />
        <Marquee className="bg-[#0A1F1C] p-5 mb-5" gradient={false} speed={100}>
          <div className="flex space-x-2 mx-10">
            <h4 className="text-white font-bold">
              Last Winner: {lastWinner?.toString()}
            </h4>
            <h4 className="text-white font-bold">
              Previous winnings:{" "}
              {lastWinnerAmount &&
                ethers.utils.formatEther(lastWinnerAmount?.toString())}{" "}
              {currency}{" "}
            </h4>
          </div>
        </Marquee>
        {winnings > 0 && <Winnings winnings={winnings} />}
        <NextDraw />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
```

### Implementing Admin Controls:

#### Update styles/globals.css:

```
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .stats {
    @apply bg-[#091F1C] text-white p-4 flex-1 rounded-md border-2 border-[#004337];
  }

  .stats-container {
    @apply bg-[#091F1C] p-5 rounded-lg border-[#004337] border;
  }

  .fees {
    @apply flex items-center justify-between text-emerald-300 text-xs italic;
  }

  .countdown {
    @apply p-8 text-5xl text-center text-white rounded-lg lg:min-w-[150px] bg-[#013F34];
  }
  .countdown-label {
    @apply text-center text-white uppercase text-sm p-4;
  }
  .adminBtn {
    @apply bg-[#091F1C] p-2 flex-1 rounded-md border-[#004337] border-2 hover:bg-emerald-500/50;
  }
}

```

#### Create components/AdminControls:

```
import React from "react";
import {
  StarIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  ArrowUturnDownIcon,
} from "@heroicons/react/24/solid";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { currency } from "../constants";
import toast from "react-hot-toast";

function AdminControls() {
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: totalCommission } = useContractWrite(
    contract,
    "operatorTotalCommission"
  );

  const { mutateAsync: DrawWinnerTicket } = useContractWrite(
    contract,
    "DrawWinnerTicket"
  );
  const { mutateAsync: WithdrawCommission } = useContractWrite(
    contract,
    "WithdrawCommission"
  );
  const { mutateAsync: restartDraw } = useContractWrite(
    contract,
    "restartDraw"
  );
  const { mutateAsync: RefundAll } = useContractWrite(contract, "RefundAll");

  const drawWinner = async () => {
    const notification = toast.loading("Picking a Lucky Winner...");
    try {
      const data = await DrawWinnerTicket([{}]);
      toast.success("A Winner has been selected!", {
        id: notification,
      });
      console.info("Contract call success", data);
    } catch (err) {
      toast.error("Whoops, something went wrong!", {
        id: notification,
      });
      console.error("Contract call error", err);
    }
  };

  const onWithdrawCommission = async () => {
    const notification = toast.loading("Withdrawing Commission...");
    try {
      const data = await WithdrawCommission([{}]);
      toast.success("A Winner has been selected!", {
        id: notification,
      });
      console.info("Contract call success", data);
    } catch (err) {
      toast.error("Whoops, something went wrong!", {
        id: notification,
      });
      console.error("Contract call error", err);
    }
  };

  const onRestartDraw = async () => {
    const notification = toast.loading("Restarting draw...");
    try {
      const data = await restartDraw([{}]);
      toast.success("Draw restarted successfully!", {
        id: notification,
      });
      console.info("Contract call success", data);
    } catch (err) {
      toast.error("Whoops, something went wrong!", {
        id: notification,
      });
      console.error("Contract call error", err);
    }
  };

  const onRefundAll = async () => {
    const notification = toast.loading("Refunding All...");
    try {
      const data = await RefundAll([{}]);
      toast.success("All refunded successfully!", {
        id: notification,
      });
      console.info("Contract call success", data);
    } catch (err) {
      toast.error("Whoops, something went wrong!", {
        id: notification,
      });
      console.error("Contract call error", err);
    }
  };

  return (
    <div className="text-white text-center px-5 py-3 rounded-md border-emerald-300/20 border">
      <h2 className="font-bold">AdminControls</h2>
      <p className="mb-5">
        Total Commission to be withdrawn:{" "}
        {totalCommission &&
          ethers.utils.formatEther(totalCommission?.toString())}{" "}
        {currency}
      </p>
      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <button onClick={drawWinner} className="adminBtn">
          <StarIcon className="h-6 mx-auto mb-2" />
          Draw Winner
        </button>
        <button onClick={onWithdrawCommission} className="adminBtn">
          <CurrencyDollarIcon className="h-6 mx-auto mb-2" />
          Withdraw Commission
        </button>
        <button onClick={onRestartDraw} className="adminBtn">
          <ArrowPathIcon className="h-6 mx-auto mb-2" />
          Restart Draw
        </button>
        <button onClick={onRefundAll} className="adminBtn">
          <ArrowUturnDownIcon className="h-6 mx-auto mb-2" />
          Refund All
        </button>
      </div>
    </div>
  );
}

export default AdminControls;

```

#### Update pages/index.tsx:

```
import type { NextPage } from "next";
import Head from "next/head";
import {
  AdminControls,
  Footer,
  Header,
  Loading,
  Login,
  NextDraw,
  Winnings,
} from "../components";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Marquee from "react-fast-marquee";
import { ethers } from "ethers";
import { currency } from "../constants";

const Home: NextPage = () => {
  const address = useAddress();
  console.log(address);
  const { contract, isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );
  const { data: winnings } = useContractRead(
    contract,
    "getWinningsForAddress",
    address
  );

  const { data: lastWinner } = useContractRead(contract, "lastWinner");

  const { data: lastWinnerAmount } = useContractRead(
    contract,
    "lastWinnerAmount"
  );
  const { data: isLotteryOperator } = useContractRead(
    contract,
    "lotteryOperator"
  );

  if (isLoading) return <Loading />;
  if (!address) return <Login />;

  return (
    <div className="bg-[#091B18] min-h-screen flex flex-col">
      <Head>
        <title>Crypto Lottery</title>
      </Head>
      <div className="flex-1">
        <Header />
        <Marquee className="bg-[#0A1F1C] p-5 mb-5" gradient={false} speed={100}>
          <div className="flex space-x-2 mx-10">
            <h4 className="text-white font-bold">
              Last Winner: {lastWinner?.toString()}
            </h4>
            <h4 className="text-white font-bold">
              Previous winnings:{" "}
              {lastWinnerAmount &&
                ethers.utils.formatEther(lastWinnerAmount?.toString())}{" "}
              {currency}{" "}
            </h4>
          </div>
        </Marquee>
        {isLotteryOperator === address && (
          <div className="flex justify-center">
            <AdminControls/>
          </div>
        )}

        {winnings > 0 && <Winnings winnings={winnings} />}
        <NextDraw />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

```

You can only "RefundAll" once the draw ends.
Restart Draw
WithDraw Commissions
Buy Tickets for admin and non-admin
Draw Winner
Refund All
