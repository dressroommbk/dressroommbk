var baseImgPath = '/images/';
var itemImgPath = '/images/';
var hereItemImgPath = '/images/';
var charImgPath = '/images/';
var clanImgPath = '/images/';
var zodiacImgPath = '/images/';
var brandImgPath = '/images/';
var brand2ImgPath = '/images/';
var trickResourceImgPath = '/images/';
var hpMeterGreenImg = '/images/bk_life_green.gif';
var manaMeterImg = '/images/bk_life_beg_33.gif';
var trickImgPath = '/images/';
var iconImgPath = '/images/icon_';
var infospaceImgPath = '/images/';
var dressImgPath = '/images/';
var blankImgPath = '/images/blank.gif';
var toothImgPath = '/images/';

var charInfoUrlFormat = '/inf.php?login=';

var shortVip = "vip=1";

var maxPersImageNumber = [51, 65];
var excludePersImageNumbers = [[52, 53], [39, 40, 41, 66, 67, 68]];

var uniquePersImageNumbers = [
	['52_orbvsqq', '53_otnmdih','400','500','501','502','503','504','505','506','507','508','509','510','511','512','513','514','515','516','10001','10002','10003','10015','10016','10017','10018','10019','2000_1_kbns5gu', '2000_3_askgl', '2000_2_zk39s', '1092_mfogweobwg', '1144_fzmyvqf','mocker','piper'],
	['66_mmtvgec', '67_esevjzd', '68_sqsbxnc', '500','501','502','10012','10015','10019','2007_1_onsd23', '2003_1_348723483', '2003_2_854736478', '2003_3_777376934', '2001_1_758375928', '2001_2_387429837', '2001_3_458791823', '2002_1_239847283', '2002_2_238947983', '2002_3_857378582', '2006_1_868276432', '2006_2_394356775', '2006_3_100402842', '2004_1_329847534', '2004_2_465762309', '2004_3_636502175', '2005_1_398365734', '2005_2_546276573', '2005_3_573654968', '1089_gr8562789476', '1093_bninwidpqd']
	];

var localizer =
{
	cancel: '������',
	apply: '���������',
	help: '�������',
	helpHint: '������� ������ �������',
	closeMenu: '������� ����',
	dropItem: '����� �������',
	dropAll: '����� ��� ��������',
	clearAllStats: '�������� ����� � ������',
	fitStats: '��������� ����� � ������ ��� ��������',
	itemComsumesGroup: '�����������',
	itemRequiredGroup: '����������',
	itemModifyGroup: '��������� ��',
	itemPropertiesGroup: '�������� ��������',
	itemAddInfoGroup: '�������������� ����������',
	itemAttackGroup: '����������� (�����)',
	itemDefenceGroup: '����������� (������)',
	partOfSet: '����� ���������: <u>{0}</u> <b>({1}/{2})</b>.',
	strikeGroup: '���� � �������',
	fitArmor: '��������� �����',
	unfitArmor: '������ �������� �����',
	fitObject: '��������� ��� ��������',
	unfitObject: '������ �������� ��� ��������',
	sharpening: '�������',
	noSharpening: '��� �������',
	twohandledWeapon: '<font color="brown">��������� ������.</font>',
	secondaryWeapon: '<font color="darkgreen">������ ������.</font>',
	blockZones: '���� ������������',
	aboutSetCount: '� �������� ������ {0} ���������.',
	set: '��������',
	strengthening: '��������',
	fists: '�����',
	dressCombatsSet: '������ �������� ��',
	/* dressFromCombats: '�� ��������� ��',
	dressFromCombatsHint: '��������� ������� �� ��������� ����������� �����', */
	zoneVariable: '����������',
	zonehead: '������',
	zonebody: '������',
	zonewaist: '����',
	zoneleg: '����',
	zoneavg: '�������',
	pleaseWait: '����������, ���������...',
	setEtc: '...',
	armorWasFit: '[��������&nbsp;�����]',
	wasFit: '[���&nbsp;��������]',
	wasUpgrade: '[��������]',
	wasCharmed: '[����������]',
	wasAdded: ' ',
	upgradeObject: '��������',
	noUpgrade: '�� ��������',
	charmObject: '����������',
	addstatsObject: '���������',
	uncharmObject: '����� �����������',
	charmHint: '<img src="{0}DarkClan.gif" width="24" height="15" border="0" align="right" /><b>�����������</b><br />',
	addstatsHint: '<img src="{0}DarkClan.gif" width="24" height="15" border="0" align="right" /><b>������������ �����</b><br />',
	useMagic: '�������� �����',
	hasMagic: '�������� �����',
	saveSet: '��������� ��������',
	loadSet: '��������� ��������',
	saveSetHint: '<img src="{0}DarkClan.gif" width="24" height="15" border="0" align="right" /><b>���������� ���������</b><br />���������� ���� ����� ����� ����� ������ � ��������� ���-������.<br />� ����� ������ �� ������� ��������� ��������, ��������� ���� �������.<br />����� �� ������ ��������� ���� �������� �� �������, ������� ����������� ��������� ��� �� ������ �������� ����.',
	loadSetHint: '<img src="{0}DarkClan.gif" width="24" height="15" border="0" align="right" /><b>�������� ���������</b><br />����������, ���������� ���� ��� �����, ������� �� �������� ��� ���������� ���������, � ����� ������� ������ &quot;���������&quot;.<br />����� �� ������ ��������� ���������, ����� ���� ������ ������ �� �������� , ���������� ��� ������.',
	saveSetOnServer: '��������� �� �������',
	infoPaneHeader: '���������&nbsp;������',
	viewOptionsPaneHeader: '����������',
	petPaneHeader: '�����',
	listPaneHeader: '������',
	damagePaneHeader: '����',
	componentsPaneHeader: '�������',
	optionsMenu: '���������',
	optionsShowImages: '���������� ����������� � ������ ���������',
	optionsHideImages: '�� ���������� ����������� � ������ ���������',
	optionsUseAlphaForMenuAndTip: '�������������� ���� � ���������� ����������',
	optionsDontUseAlphaForMenuAndTip: '������������ ���� � ���������� ����������',
	optionsUseTransitionEffects: '������������ ��������',
	optionsDontUseTransitionEffects: "�� ������������ ��������",
	optionsPreloadImages: '������� ��������� ����������� ������������',
	optionsDontPreloadImages: "�� ��������� ������� ����������� ������������",
	optionsCaptureMouse: '����������� ������� ���� ��� �������� ����',
	optionsDontCaptureMouse: "�� ����������� ������� ���� ��� �������� ����",
	startPreloadImages: '������ �������� ����������� ������������.',
	completePreloadImages: '�������� ����������� ������������ ���������.',
	elixMenu: '��������',
	noElix: '��� ��������� ��������',
	spellMenu: '����������',
	petMenu: '<font color="#660000">�����</font>',
	petMenu2: '�����',
	dropPet: '�������� �����',
	noSpell: '��� ����������� ����������',
	statWeakness: '�������',
	appliedSpell: '����������',
	appliedPetSkill: '�������� �����',
	dropElix: '����� �������',
	dropSpell: '����� ���������� ����������',
	canUpgrade: '<font color="darkgreen">�������� <b>���������</b> (����� ��������).</font>',
	canFit: '<font color="darkgreen">�������� <b>��������</b> (����� ��������).</font>',
	friendLink: '�������� ������ �� ���� �������� �����',
	friendLinkHint: '<img src="{0}DarkClan.gif" width="24" height="15" border="0" align="right" /><b>������ �� ��������</b><br />���������� ��� ������ � ������� �����.<br />�� ���� ������ �� ������ ��������� ���� ��������.',
	evaluatedHint: '��� ����� ��������� ������� ��������: ����� (������ + ������)',
	requiredHint: '����� � ���������� ������� ��������� ���������� ��������� ��������: [���������� (������ + ������)]',
	filter: '<img src="{0}DarkClan.gif" width="24" height="15" border="0" align="right" /><b>������</b>',
	setFilter: '�������� ������...',
	resetFilter: '����� ������',
	fminlevel: '�� ������',
	fmaxlevel: '�� ������',
	fshowold: '����������',
	fshow_com: '������',
	fshow_ru: '����',
	fshow_artefacts: '���������',
	ffiltermf: '���������� ��� ������',
	ffiltermfHint: '������������ ������ �� ��������, � ������� ������ ���������� ������ ����.',
	frewardonly: '������ �����������',
	copyCab: '����������� �������',
	impitem: '[������]',
	fixless: '<font color="red">������� �� �������� ������� � ��������� ����������.</font>',
	charmless: '<font color="red">������� �� �������� �������������.</font>',
	changeName: '�������� ���',
	changeGender: '�������� ���',
	changeSign: '�������� ���� �������',
	changeImage: '�������� �����',
	changeAlign: '�������� ����������',
	changeClan: '�������� �������� �����',
	zodiac0: '���� ������� ����������',
	zodiac1: '<b>����</b> (������ ����, 21.03-20.04)',
	zodiac2: '<b>�����</b> (������ �����, 21.04-20.05)',
	zodiac3: '<b>��������</b> (������ �������, 21.05-21.06)',
	zodiac4: '<b>���</b> (������ ����, 22.06-22.07)',
	zodiac5: '<b>���</b> (������ ����, 23.07-23.08)',
	zodiac6: '<b>����</b> (������ �����, 24.08-23.09)',
	zodiac7: '<b>����</b> (������ �������, 24.09-23.10)',
	zodiac8: '<b>��������</b> (������ ����, 24.10-22.11)',
	zodiac9: '<b>�������</b> (������ ����, 23.11-21.12)',
	zodiac10: '<b>�������</b> (������ �����, 22.12-20.01)',
	zodiac11: '<b>�������</b> (������ �������, 21.01-20.02)',
	zodiac12: '<b>����</b> (������ ����, 21.02-20.03)',
	attacktfire: '�������� �����',
	attacktair: '������������� �����',
	attacktwater: '������� �����',
	attacktearth: '�������� �����',
	attacktlight: '����� �����',
	attacktdark: '����� ����',
	attacktthrust: '������� �����',
	attacktsabre: '������� �����',
	attacktcrush: '�������� �����',
	attacktcut: '������� �����',
	attackqnone: '���',                             //     ���� ������.
//	attackqpermanent: '����������',                 //     �� 1 ������ ��������� ?
	attackqalways: '������',                        //
	attackqroutinely: '���������',                  //
//	attackqregular: '���������',                    //     � 5-6 ������
	attackqoften: '�����',                          //
//	attackqfrequent: '�����',                       //     � 4� ������ �� 1 �����
	attackqsometimes: '���������',                  //
	attackqsmall: '����',                           //
//	attackqfew: '����',                             //     � 9-10 ������
	attackqrare: '�����',                           //
//	attackqseldom: '�����',                         //
	attackqinsignificant: '�������� �����',         //
	defencetthrust: '������ �� �������� �����',
	defencetsabre: '������ �� �������� �����',
	defencetcrush: '������ �� ��������� �����',
	defencetcut: '������ �� �������� �����',
	defenceqnone: '���',
	defenceqnormal: '����������',
	defenceqfair: '����������',
	defenceqgood: '�������',
	defenceqweak: '������',
	defenceqmagnificent: '������������',
	defenceqexcellent: '������������',
	defenceqmediocre: '��������������',
	informAboutCharLoading: '<p>�������� ���������� � ��������� ����������, ������ ���� ������ �� �� ������������ ������ DarkClan �� ������ ���������� � ���������� (��� ������������ ���������� ��������� ��������� �����).</p><p>����������� ������������� ���������� ������� ����� ��������� � ����������� ���������.</p>',
	armor: '�����',
	badPetLevel: '�� [{0}] ������ �� �� ������� ��������� ������ ����� �� <font color="red"><b>[{1}]</b></font> �������. ����������, ��������� ������� ������ �����.',
	badSkillCount: '�� [{0}] ������ {1} ��� �������� <b>{2}</b> ������ ��������, � � ����� ��������� ������������ <font color="red"><b>{3}</b></font> ������ ��������. ����������, ��������� ���� ������ ��������.',
	badSkillRewardedCount: '� ������ {0} ��������� �������� ',
	badRewardedSkillCount: '��� �������� 7 �������� �� �������, � � ����� ��������� ������������ <font color="red"><b>{0}</b></font> �������� �� �������. ����������, ��������� ���� �������� �� �������.',
	badRewardedStatCount: '��� �������� 35 ������ �� �������, � � ����� ��������� ������������ <font color="red"><b>{0}</b></font> ������ �� �������. ����������, ��������� ���� ����� �� �������.',
	nativeStatsCount: '�� {1} ��� [{0}] ������ {2}��� �������� <b>{3}</b> ������ ������. ',
	rewardedStatsCount: '� ������ {0} ��������� ������ ',
	neqStatsCount: '� ����� ��������� ������������ <b>{0}</b> ������ ������.',
	gtStatsCount: ' �������� {0} ��������� ������.',
	ltStatsCount: ' �� ������� {0} ������.',
	eqStatsCount: '��������� ������ ���.',
	upperCab: '�������',
	newCab: '�����&nbsp;�������',
	closeCab: '������� �������',
	close: '�������',
	describeNativeStats: '����� + ������ + ���� ',
	describeSetStats: ' �� ���������',
	FCPlayerNick: '��� ���������',
	FCPlayerLoadIn: '��������� �� ��',
	expTableDesc: '������� ����� ��������� ��� ���������� ��������� ���������� ���������� ��� ������������� � ������� �����������.',
	dressSameItem: '������',
	summaryTableCab: '�������&nbsp;�������',
	summaryTableHint: '������� ������� �������� �������� �������������� ���������� ���� �������� ������� ����� �����',
	summaryTableDesc: '������� ������� ��������� �������� �������������� ���������� ���� �������� ������� ����� �����',
	newCabHint: '������� ����� ������� ��� ������������� ������ � ����������� ����������� � ��� ����������� �� ��������� � ������� ������� �������',
	expTableCab: '�������&nbsp;�����',
	expTableHint: '�������&nbsp;�����',
	summaryTableCab: '�������&nbsp;�������',
	healerCab: '�������&nbsp;�������',
	battlesCab: '��������',
	designerCab: '�����������',
	expIncrement: '����������',
	expTotal: '��������',
	expStats: '������',
	expSkills: '������',
	expEndurance: '������������',
	expCredits: '��������',
	expExperience: '�����',
	expBaseExperience: '������� ����',
	expBody: '����',
	expDescription: '��������',
	expNoInformation: '��� ����������',
	probabilityNever: '<font color="red">���</font>',
	probabilityReal: '�������',
	trick: '����',
	attackZone: [
		'� ������',
		'� ������',
		'� �����',
		'� ����',
		'� ����'
		],
	goStrike: '�����!',
	averageDamage: '���������� �� ����',
	showDetails: '���������...',
	sameWeapon: '<font color="#336699">���� ������ ����� ��������� ����� ������ �����.</font>',
	filterGeneralTab: '��������',
	filterMfTab: '��&nbsp;����������',
	filterSortTab: '����������',
	noFilterMf: '�� �����������',
	naturalStats: '������ �����',
	resultStats: '�������� �����',
	wearedItems: '������ ������ ���������<br /><small>ٸ������ �� �������� � ������, ����� �������� �������� ���������� online.</small>',
	tip: '�����',
	charHint: '������� �����, ����� �������� ���, ���� ������� � ���� �������� ���������.',
	adjustHint: '������� {0}, ����� ��������� ����� � ������ ��� ������ ��������.',
	here: '�����',
	badGender: '��������� ������ ���.',
	reqInfo: '��������� {0} {1} , �� ��� ������ {2}',
	indicesPaneHeader: '<b>������ ������������ �����������</b><br /><small>��������� ��������� �� ������ ������������� �����, ��������� ������, ������� ������� � ���������� ����������, ������ ���� ������� �����������, ������������� ��� �������� ���������� �������.</small><br />',
	appearances: '������',
	alignments: '����������',
	noTrick: '��� �����',
	noTrickHint: '<b>������ ����: ����</b><br /><i>�������������� ����������</i><br />������� �����, ����� ������� ���� �� ����������� ������.',
	tricks: '�����',
	dropTrick: '����� ����',
	badHeavyArmor: '<tr><td colspan="2" class="hintview">������ ����� ���������� ������������ � ������ �����. ������� {0}, ����� ����� ������ �����.</td></tr>',
	badGloves: '<tr><td colspan="2" class="hintview">������ ����� ���������� ������������ � ��������� �� ��� ����. ������� {0}, ����� ����� ��������.</td></tr>',
	charmChooseMf: '�������� ���������� ����������',
	charmEnterV: '������� ��������, �� ������� �������� ����������',
	charmReplace: '�������� ���������� ����',
	showObjectData: '������� ��������� ��������',
	waddMenu: '��������',
	waddInfo: '�������/�������',
	noWAdd: '��� ���������/��������',
	ownedBy: '�����������: ',
	doClean: '�������� ��',
	doCleanHint: '������� ��� ���������� ��������� � �������. �������, ���� ����������� �� �����-�� �������� ��������� � ��� ��������.',
	HideAllTricks: '����� ��� ������',
	dropAllSpells: '����� ��� ������',
	optionsColorizedDummyOff: '���������� �� �������� ��������� ��������',
	optionsColorizedDummyOn: '�������� �������� ��������� ��������',
	setVariantsAvailable: '����� �������� ������ �������� �������� ���������:',
	bop: '���� ������� ����� ������ ����� ������� � ������, ��� ������� ���. ����� ������ �� ������ ��� ������������.',
	boe: '���� ������� ����� ������ ����� ������� � ������, ��� ������ ���. ����� ������ �� ������ ��� ������������.',
	sentinel: '',
	rune: '������ �����',
	addStats: '���������� �����',
	unaddStats: '����� �����',
	opt_choices: '�������� ��������',
	unRune: '����� ����',
	wasRuned: '�������� ����'
};

// taken from analyzer3.js script.
var twoBlockZones = [
	{ name: '������ � �����', zones: 0x03 },
	{ name: '����� � �����', zones: 0x06 },
	{ name: '����� � ����', zones: 0x0C },
	{ name: '���� � ����', zones: 0x18 },
	{ name: '������ � ����', zones: 0x11 }
	];

var threeBlockZones = [
	{ name: '������, ����� � �����', zones: 0x07 },
	{ name: '�����, ����� � ����', zones: 0x0E },
	{ name: '�����, ���� � ����', zones: 0x1C },
	{ name: '������, ���� � ����', zones: 0x19 },
	{ name: '������, ����� � ����', zones: 0x13 }
	];

var attackFreq = {
	falways: 100,
//	fpermanent: 100,
	foften: 90,
//	ffrequent: 85,
	froutinely: 80,
//	fregular: 80,
	fsometimes: 60,
	fsmall: 20,
//	ffew: 25,
	frare: 10,
//	fseldom: 20,
	finsignificant: 5,

	fnone: 0
};

/* Character slots definition */
var slot_w1 = { // earings
	id: 'w1',
	zone: 'all',
	index: 1,
	canCharm: true,
	width: 60,
	height: 20
	};

var slot_w2 = { // amulet
	id: 'w2',
	zone: 'all',
	index: 2,
	canCharm: true,
	width: 60,
	height: 20
	};

var slot_w3 = { // weapon
	id: 'w3',
	zone: 'all',
	index: 3,
	canCharm: true,
	width: 60,
	height: 60
	};

var slot_w4 = { // armor
	id: 'w4',
	zone: 'body',
	index: 4,
	canCharm: true,
	width: 60,
	height: 80
	};

var slot_w5 = { // belt
	id: 'w5',
	zone: 'waist',
	index: 5,
	canCharm: true,
	width: 60,
	height: 40
	};

var slot_w6 = { // ring 1
	id: 'w6',
	zone: 'all',
	index: 6,
	canCharm: true,
	width: 20,
	height: 20
	};

var slot_w7 = { // ring 2
	id: 'w7',
	zone: 'all',
	index: 7,
	canCharm: true,
	width: 20,
	height: 20
	};

var slot_w8 = { // ring 3
	id: 'w8',
	zone: 'all',
	index: 8,
	canCharm: true,
	width: 20,
	height: 20
	};

var slot_w9 = { // helmet
	id: 'w9',
	zone: 'head',
	index: 9,
	canCharm: true,
	width: 60,
	height: 60
	};

var slot_w10 = { // shield
	id: 'w10',
	zone: 'all',
	index: 10,
	canCharm: true,
	width: 60,
	height: 60
	};

var slot_w11 = { // gloves
	id: 'w11',
	zone: 'all',
	index: 11,
	canCharm: true,
	width: 60,
	height: 40
	};

var slot_w12 = { // boots
	id: 'w12',
	zone: 'leg',
	index: 12,
	canCharm: true,
	width: 60,
	height: 40
	};

var slot_w13 = { // braslet
	id: 'w13',
	zone: 'all',
	index: 13,
	canCharm: true,
	width: 60,
	height: 40
	};

var slot_w14 = { // carman 1
	id: 'w14',
	zone: 'all',
	index: 14,
	width: 40,
	height: 20
	};

var slot_w15 = { // carman 2
	id: 'w15',
	zone: 'all',
	index: 15,
	width: 40,
	height: 20
	};

var slot_w16 = { // carman 3
	id: 'w16',
	zone: 'all',
	index: 16,
	width: 40,
	height: 20
	};

var slot_w0 = { // shirt
	id: 'wshirt',
	zone: 'body',
	index: 0,
	width: 60,
	height: 80,
	emptyImageHere: true
	};

var slot_w17 = { // cape
	id: 'wcape',
	zone: 'all',
	index: 17,
	width: 60,
	height: 80,
	emptyImageHere: true
	};

var slot_w18 = { // wreath
	id: 'wwreath',
	zone: 'all',
	index: 18,
	width: 60,
	height: 60,
	emptyImageHere: true
	};

var slot_w19 = { // pants
	id: 'w19',
	zone: 'pants',
	index: -1,
	canCharm: true,
	width: 60,
	height: 80
	};

var slot_wbook = { // book
	id: 'wbook',
	zone: 'all',
	index: -1,
	width: 40,
	height: 25,
	emptyImageHere: true
	};

var slot_wadd = { // adds
	id: 'wadd',
	zone: 'all',
	index: -1,
	width: 1,
	height: 1,
	emptyImageHere: true
	};

var slots = new Array(
	slot_w1, slot_w2, slot_w3, slot_w4, slot_w5, slot_w6, slot_w7, slot_w8, slot_w9, slot_w10, slot_w11, slot_w12, slot_w13, slot_w14, slot_w15, slot_w16, slot_w0, slot_w17, slot_w18
	);

function createSpellSlots()
{
	for (var i = 100; i <= 109; i++)
	{
		var spellSlot = { // spell
			id: ('w' + i),
			zone: 'all',
			index: slots.length,
			width: 40,
			height: 25
			};
		slots.push(spellSlot);
	}
}

createSpellSlots();

slot_wbook.index = slots.length;
slots.push(slot_wbook);
slot_wadd.index = slots.length;
slots.push(slot_wadd);
slot_w19.index = slots.length;
slots.push(slot_w19);

var aligns = new Array(
	{caption: '������'},
	{id: '0', caption: '��� ����������'},
	{id: '7', caption: '����������� ��������'},
	{id: '9', caption: '�����'},
	{id: '10', caption: '���������'},
	{id: '23', caption: '����������'},
	{id: '50', caption: '�������'},
	{id: '100', caption: '�����'},
	{caption: '������ ��������'},
	{id: '3', caption: '������'},
	{id: '3.01', caption: '������-���������'},
	{id: '3.05', caption: '������-�����������'},
	{id: '3.06', caption: '��������'},
	{id: '3.07', caption: '������-������'},
	{id: '3.075', caption: '13-� �������'},
	{id: '3.09', caption: '������-�����'},
	{id: '3.091', caption: '������-�������'},
	{id: '3.092', caption: '������-������� �� ������'},
	{id: '3.99', caption: '��������� ������'},
	{id: '3.001', caption: '������� ���������'},
	{caption: '����� ��������'},
	{id: '1', caption: '�������'},
	{id: '1.1', caption: '������� ����������'},
	{id: '1.4', caption: '���������� �������'},
	{id: '1.5', caption: '������� ��������� ������'},
	{id: '1.6', caption: '����������'},
	{id: '1.7', caption: '������� �������� ����'},
	{id: '1.75', caption: '��������� ������'},
	{id: '1.9', caption: '������� ���� �����'},
	{id: '1.91', caption: '������� ������� ����'},
	{id: '1.92', caption: '������� ������ �����'},
	{id: '1.99', caption: '����� ������'},
	{id: '1.01', caption: '������� �����������'},
	{caption: '������� �����'},
	{id: '2', caption: '����'},
	{id: '2.5', caption: '��������� �����'},
	{id: '2.9', caption: '������� ��������� �����'},
	{id: '2.99', caption: '���� �����'}
	);

var relativeSpiritConsumers = new Array(
	{id: 'cureHP15', hp: 15},
	{id: 'cureHP30', hp: 30},
	{id: 'cureHP45', hp: 45},
	{id: 'cureHP60', hp: 60},
	{id: 'cureHP120', hp: 120},
	{id: 'cureHP600', hp: 600},
	{id: 'cureHP900', hp: 900},
 {id: 'cureHP1200', hp: 1200},
 {id: 'cureHP1500', hp: 1500}
	);

var absoluteSpiritConsumers = [
	{id: 'preservation', spirit: 10},
	{id: 'preservationD', spirit: 10},
	{id: 'reanimationL', spirit: 10},
	{id: 'reanimation', spirit: 10},
	{id: 'reanimation_olditem', spirit: 30},	
	{id: 'elementalcrit', spirit: 10}
	];

var alignImages = {
	dark: '<img src="{0}align3.gif" width="12" height="15" border="0" alt="������ ����������"/>',
	light: '<img src="{0}align1.gif" width="12" height="15" border="0" alt="������� ����������"/>',
	neutral: '<img src="{0}align7.gif" width="12" height="15" border="0" alt="����������� ����������"/>',
	haos: '<img src="{0}align2.gif" width="12" height="15" border="0" alt="���������� �����"/>',
	greydark: '<img src="{0}align23.gif" width="12" height="15" border="0" alt="���������� ����������"/>',

	sentinel: ''
	};


var knownStats = [
	'strength',
	'dexterity',
	'intuition',
	'endurance',
	'intellect',
	'wisdom',
	'spirituality'
	];


var battleTurnParams = [
	'hitpoints',
	'mana',
	'spiritlevel',
	'parry',
	'shieldblock',
	'counterstroke',
	'absolutecriticalhit',
	'absolutejumpaway',
	'firemagicdefence',
	'airmagicdefence',
	'watermagicdefence',
	'earthmagicdefence',
	'lightmagicdefence',
	'darkmagicdefence',
	'greymagicdefence',
	'firemagicpower',
	'airmagicpower',
	'watermagicpower',
	'earthmagicpower',
	'lightmagicpower',
	'darkmagicpower',
	'magicdefencereduce',
	'firemagicdefencereduce',
	'airmagicdefencereduce',
	'watermagicdefencereduce',
	'earthmagicdefencereduce',
	'lightmagicdefencereduce',
	'darkmagicdefencereduce',
	'greymagicdefencereduce',
	'attackcount',
	'blockcount',
	'criticalpower',
	'power',
	'thrustpower',
	'sabrepower',
	'crushpower',
	'cutpower',
	'criticalhit',
	'anticriticalhit',
	'jumpaway',
	'antijumpaway',
	'piercearmor',
	'absolutecriticalhit',
	'absolutejumpaway'
	];

var knownStatLimits = {
	strength: 3,
	dexterity: 3,
	intuition: 3,
	endurance: 3
	};

var knownCleanModifiers = [
	'level',
	'-',
	'strength',
	'dexterity',
	'intuition',
	'endurance',
	'intellect',
	'wisdom',
	'spirituality',
	'totalstats',
	'-',
	'hitpoints',
	'mana',
	'spiritlevel',
	'-',
	'hpspeed',
	'manaspeed',
	'manaconsumption',
	'-',
	'weaponskill',
	'knifeskill',
	'axeskill',
	'clubskill',
	'swordskill',
	'staffskill',
	'-',
	'magicskill',
	'firemagicskill',
	'airmagicskill',
	'watermagicskill',
	'earthmagicskill',
	'lightmagicskill',
	'darkmagicskill',
	'greymagicskill',
	'-',
	'parry',
	'shieldblock',
	'counterstroke',
	'absolutejumpaway',
	'absolutecriticalhit',
	'-',
	'magicdefence',
	'firemagicdefence',
	'airmagicdefence',
	'watermagicdefence',
	'earthmagicdefence',
	'lightmagicdefence',
	'darkmagicdefence',
	'greymagicdefence',
	'-',
	'magicpower',
	'firemagicpower',
	'airmagicpower',
	'watermagicpower',
	'earthmagicpower',
	'lightmagicpower',
	'darkmagicpower',
	'-',
	'magicdefencereduce',
	'firemagicdefencereduce',
	'airmagicdefencereduce',
	'watermagicdefencereduce',
	'earthmagicdefencereduce',
	'lightmagicdefencereduce',
	'darkmagicdefencereduce',
	'greymagicdefencereduce',
	'-',
	'attackcount',
	'blockcount',
	'-',
	'knapsack',
	'-',
	'totalprice',
	'totaleprice',
	'totalemprice',
	'totalweight',
	'consumed_reward',
	'-',
	'spell_powerup10_self',
	'spell_powerup10_other',
	'spell_protect10_self',
	'spell_protect10_other',
	'-',
	'spell_powerup1_self',
	'spell_powerup1_other',
	'spell_powerup3_self',
	'spell_powerup3_other',
	'spell_powerup2_self',
	'spell_powerup2_other',
	'spell_powerup4_self',
	'spell_powerup4_other',
	'spell_protect1_self',
	'spell_protect1_other',
	'spell_protect3_self',
	'spell_protect3_other',
	'spell_protect2_self',
	'spell_protect2_other',
	'spell_protect4_self',
	'spell_protect4_other'
	];

var knownWeaponModifiers = [
	'criticalpower',
	'power',
	'thrustpower',
	'sabrepower',
	'crushpower',
	'cutpower',
	'-',
	'criticalhit',
	'anticriticalhit',
	'jumpaway',
	'antijumpaway',
	'-',
	'piercearmor'
	];

var knownWeaponModifiersHash = {};
for (var wi = 0; wi < knownWeaponModifiers.length; wi++)
{
	if (knownWeaponModifiers[wi] == '-') continue;
	knownWeaponModifiersHash[knownWeaponModifiers[wi]] = true;
}

var knownAdvWeaponModifiers = {
	damage: 0,
	mfdamage: 0,
	mfcdamage: 0,
	postdamage: 0
	};

var knownWeaponPowerModifiers = {
	// value 'all' - always acts on minimal damage too.
	power: 'all',
	thrustpower: 'attack',
	sabrepower: 'attack',
	crushpower: 'attack',
	cutpower: 'attack',
	magicpower: 'allmagic',
	firemagicpower: 'magic',
	airmagicpower: 'magic',
	watermagicpower: 'magic',
	earthmagicpower: 'magic',
	lightmagicpower: 'xmagic',
	darkmagicpower: 'xmagic'
	};

var knownZoneModifiers = {
	defence: 0,
	thrustdefence: 0,
	sabredefence: 0,
	crushdefence: 0,
	cutdefence: 0
	};

var knownArmorModifiers = {
	headarmor: 0,
	bodyarmor: 0,
	waistarmor: 0,
	legarmor: 0,
	avgarmor: 0
	};

var naturalElements = [
	'fire',
	'earth',
	'air',
	'water'
	];

var allElements = [
	'fire',
	'earth',
	'air',
	'water',
	'light',
	'dark',
	'grey'
	];

var common_props = {
	emprice: {lbl: '���� (���.)', fmt: '<font color="purple">{0}&nbsp;���.</font>', view: true},
	eprice: {lbl: '���� (���.)', fmt: '<font color="brown">{0}&nbsp;���.</font>', view: true},
	price: {lbl: '����', fmt: '{0}&nbsp;��.', view: true},
	weight: {lbl: '���', view: true},
	durability: {lbl: '�������������', fmt: '0/{0}', view: true}
	};

var item_props = {
	sex: {lbl: '���', view: true, nocharm: true},
	allstats:{lbl: '��� �����',view:true,nocharm:true},
	stats:{lbl: '���������� ����������', view: true},
	level: {lbl: '�������', required: true, view: true, nocharm: true},
	levelup: {lbl: '��', view: true, nocharm: true},
	pstat: {lbl: '������ �� �������', view: true, nocharm: true},
	pskil: {lbl: '������ �� �������', view: true, nocharm: true},
	strength: {lbl: '����', required: true, view: true, inmfg: true},
	dexterity: {lbl: '��������', required: true, view: true, inmfg: true},
	intuition: {lbl: '��������', required: true, view: true, inmfg: true},
	endurance: {lbl: '������������', required: true, view: true, nocharm: true},
	intellect: {lbl: '���������', required: true, view: true, inmfg: true},
	wisdom: {lbl: '��������', required: true, view: true, nocharm: true},
	spirituality: {lbl: '����������', required: true, view: true, nocharm: true},
	totalstats: {lbl: '����� ������', view: true, nocharm: true},
	spiritlevel: {lbl: '������� ����', view: true, nocharm: true},
	totalprice: {lbl: '��������� ���������', fmt: '{0}&nbsp;��.', view: true, nocharm: true},
	totaleprice: {lbl: '��������� ��������� (���.)', fmt: '{0}&nbsp;���.', view: true, nocharm: true},
	totalemprice: {lbl: '��������� ��������� (���.)', fmt: '{0}&nbsp;���.', view: true, nocharm: true},
	totalweight: {lbl: '��� ���������', view: true, nocharm: true},
	mana: {lbl: '������� ����', required: true, view: true, inmfg: true},
	weaponskill: {lbl: '�������� �������', view: true, inmfg: true, inprpg: true},
	knifeskill: {lbl: '�������� ������ � ���������', required: true, view: true, inmfg: true, inprpg: true},
	axeskill: {lbl: '�������� �������� � ��������', required: true, view: true, inmfg: true, inprpg: true},
	clubskill: {lbl: '�������� �������� � ��������', required: true, view: true, inmfg: true, inprpg: true},
	swordskill: {lbl: '�������� ������', required: true, view: true, inmfg: true, inprpg: true},
	staffskill: {lbl: '�������� ��������', required: true, view: true, inmfg: true, inprpg: true},
	magicskill: {lbl: '�������� ������ ������', view: true, inmfg: true},
	firemagicskill: {lbl: '�������� ������ ����', required: true, view: true, inmfg: true},
	airmagicskill: {lbl: '�������� ������ �������', required: true, view: true, inmfg: true},
	watermagicskill: {lbl: '�������� ������ ����', required: true, view: true, inmfg: true},
	earthmagicskill: {lbl: '�������� ������ �����', required: true, view: true, inmfg: true},
	lightmagicskill: {lbl: '�������� ������ �����', required: true, view: true, inmfg: true},
	darkmagicskill: {lbl: '�������� ������ ����', required: true, view: true, inmfg: true},
	greymagicskill: {lbl: '�������� ����� ������', required: true, view: true, inmfg: true},
	mindamage: {lbl: '����������� ����', view: true, inmfg: true, inprpg: true},
	maxdamage: {lbl: '������������ ����', view: true, inmfg: true, inprpg: true},
	damage: {lbl: '����', view: false, nocharm: true},
	mfdamage: {lbl: '���� � ������ ��.', view: true, nocharm: true},
	nextdamage: {lbl: '���������� ����', view: true, nocharm: true},
	nextturns: {lbl: '������������ ����������� �����', fmt: '{0} �����', view: true, nocharm: true},
	minhitpoints: {lbl: '����������� ������� �����', view: true, nocharm: true},
	maxhitpoints: {lbl: '������������ ������� �����', view: true, nocharm: true},
	nexthitpoints: {lbl: '���������� ������� �����', view: true, nocharm: true},
	mfdamage: {lbl: '���� � ������ ��.', view: true, nocharm: true},
	mfcdamage: {lbl: '����������� ���� � ������ ��.', view: true, nocharm: true},
	postdamage: {lbl: '�������������� ����', view: true, nocharm: true},
	hitpoints: {lbl: '������� �����', view: true, inmfg: true},
	hpspeed: {lbl: '�������� �������������� �����', fmt: '{0}%', view: true, inmfg: true},
	manaspeed: {lbl: '�������� �������������� ����', fmt: '{0}%', view: true, inmfg: true},
	manaconsumption: {lbl: '���������� ������� ����', fmt: '{0}%', maxvalue: 99, view: true, inmfg: true},
	criticalpower: {lbl: '��. �������� ������������ �����', fmt: '{0}%', view: true, inmfg: true, inprpg: true},
	absolutecriticalhit: {lbl: '���. ��. �����', view: true, inmfg: true, inprpg: true},
	criticalhit: {lbl: '��. ������������ �����', fmt: '{0}%', view: true, inmfg: true, inprpg: true},
	anticriticalhit: {lbl: '��. ������ ������������ �����', fmt: '{0}%', view: true, inmfg: true},
	absolutejumpaway: {lbl: '���. ��. �������', view: true, inmfg: true, inprpg: true},
	jumpaway: {lbl: '��. ����������', fmt: '{0}%', view: true, inmfg: true, inprpg: true},
	antijumpaway: {lbl: '��. ������ ����������', fmt: '{0}%', view: true, inmfg: true},
	piercearmor: {lbl: '��. ������ �����', fmt: '{0}%', maxvalue: 100, view: true, inmfg: true, inprpg: true},
	parry: {lbl: '��. �����������', fmt: '{0}%', maxvalue: 1000, view: true, inmfg: true},
	counterstroke: {lbl: '��. ����������', fmt: '{0}%', maxvalue: 1000, view: true, inmfg: true},
	shieldblock: {lbl: '��. ����� �����', fmt: '{0}%', maxvalue: 80, view: true, inmfg: true, inprpg: true},
	power: {lbl: '��. �������� �����', fmt: '{0}%', view: true, inmfg: true, inprpg: true},
	thrustpower: {lbl: '��. �������� �������� �����', fmt: '{0}%', view: true, inmfg: true, inprpg: true},
	sabrepower: {lbl: '��. �������� �������� �����', fmt: '{0}%', view: true, inmfg: true, inprpg: true},
	crushpower: {lbl: '��. �������� ��������� �����', fmt: '{0}%', view: true, inmfg: true, inprpg: true},
	cutpower: {lbl: '��. �������� �������� �����', fmt: '{0}%', view: true, inmfg: true, inprpg: true},
	defence: {lbl: '������ �� �����', maxvalue: 1000, view: true, inmfg: true, inprpg: true},
	edefence: {lbl: '������ �� ��������, ��������, ��������� � �������� �����', maxvalue: 1000, view: true, nocharm: true},
	thrustdefence: {lbl: '������ �� �������� �����', maxvalue: 1000, view: true, inmfg: true, inprpg: true},
	sabredefence: {lbl: '������ �� �������� �����', maxvalue: 1000, view: true, inmfg: true, inprpg: true},
	crushdefence: {lbl: '������ �� ��������� �����', maxvalue: 1000, view: true, inmfg: true, inprpg: true},
	cutdefence: {lbl: '������ �� �������� �����', maxvalue: 1000, view: true, inmfg: true, inprpg: true},
	magicdefence: {lbl: '������ �� �����', maxvalue: 1800, view: true, inmfg: true},
	emagicdefence: {lbl: '������ �� ����� ����, �������, ���� � �����', maxvalue: 800, view: true, nocharm: true},
	firemagicdefence: {lbl: '������ �� ����� ����', maxvalue: 800, view: true, inmfg: true},
	airmagicdefence: {lbl: '������ �� ����� �������', maxvalue: 800, view: true, inmfg: true},
	watermagicdefence: {lbl: '������ �� ����� ����', maxvalue: 800, view: true, inmfg: true},
	earthmagicdefence: {lbl: '������ �� ����� �����', maxvalue: 800, view: true, inmfg: true},
	lightmagicdefence: {lbl: '������ �� ����� �����', maxvalue: 800, view: true, inmfg: true},
	darkmagicdefence: {lbl: '������ �� ����� ����', maxvalue: 800, view: true, inmfg: true},
	greymagicdefence: {lbl: '������ �� ����� �����', maxvalue: 800, view: true, inmfg: true},
	magicpower: {lbl: '��. �������� ����� ������', fmt: '{0}%', view: true, inmfg: true},
	firemagicpower: {lbl: '��. �������� ����� ����', fmt: '{0}%', view: true, inmfg: true},
	airmagicpower: {lbl: '��. �������� ����� �������', fmt: '{0}%', view: true, inmfg: true},
	watermagicpower: {lbl: '��. �������� ����� ����', fmt: '{0}%', view: true, inmfg: true},
	earthmagicpower: {lbl: '��. �������� ����� �����', fmt: '{0}%', view: true, inmfg: true},
	lightmagicpower: {lbl: '��. �������� ����� �����', fmt: '{0}%', view: true, inmfg: true},
	darkmagicpower: {lbl: '��. �������� ����� ����', fmt: '{0}%', view: true, inmfg: true},
	magicdefencereduce: {lbl: '��������� ������ �� �����', fmt: '{0}%', maxvalue: 99, view: true, inmfg: true},
	firemagicdefencereduce: {lbl: '��������� ������ �� ����� ����', fmt: '{0}%', maxvalue: 99, view: true, inmfg: true},
	airmagicdefencereduce: {lbl: '��������� ������ �� ����� �������', fmt: '{0}%', maxvalue: 99, view: true, inmfg: true},
	watermagicdefencereduce: {lbl: '��������� ������ �� ����� ����', fmt: '{0}%', maxvalue: 99, view: true, inmfg: true},
	earthmagicdefencereduce: {lbl: '��������� ������ �� ����� �����', fmt: '{0}%', maxvalue: 99, view: true, inmfg: true},
	lightmagicdefencereduce: {lbl: '��������� ������ �� ����� �����', fmt: '{0}%', maxvalue: 99, view: true, inmfg: true},
	darkmagicdefencereduce: {lbl: '��������� ������ �� ����� ����', fmt: '{0}%', maxvalue: 99, view: true, inmfg: true},
	greymagicdefencereduce: {lbl: '��������� ������ �� ����� �����', fmt: '{0}%', maxvalue: 99, view: true, inmfg: true},
	attackcount: {lbl: '����� ����� �� ���', view: true, nocharm: true},
	blockcount: {lbl: '��� ����� �� ���', view: true, nocharm: true},
	knapsack: {lbl: '������� �������', view: true, nocharm: true},
	headarmor: {lbl: '����� ������', view: true, nocharm: true},
	bodyarmor: {lbl: '����� �������', view: true, nocharm: true},
	waistarmor: {lbl: '����� �����', view: true, nocharm: true},
	legarmor: {lbl: '����� ���', view: true, nocharm: true},
	avgarmor: {lbl: '����� � �������', view: true, nocharm: true},
	probability: {lbl: '����������� ������������', fmt: '{0}%', maxvalue: 99, view: true, nocharm: true, inprpg: true},
	spell_powerup10_self: {lbl:'���������� �� ����', fmt:'{0} ��.', view: true, nocharm: true},
	spell_powerup10_other: {lbl:'���������� �� ������', fmt:'{0} ��.', view: true, nocharm: true},
	spell_powerup1_self: {lbl:'�������� �������� �� ����', fmt:'{0} ��.', view: true, nocharm: true},
	spell_powerup1_other: {lbl:'�������� �������� �� ������', fmt:'{0} ��.', view: true, nocharm: true},
	spell_powerup3_self: {lbl:'��������� �������� �� ����', fmt:'{0} ��.', view: true, nocharm: true},
	spell_powerup3_other: {lbl:'��������� �������� �� ������', fmt:'{0} ��.', view: true, nocharm: true},
	spell_powerup2_self: {lbl:'������ �������� �� ����', fmt:'{0} ��.', view: true, nocharm: true},
	spell_powerup2_other: {lbl:'������ �������� �� ������', fmt:'{0} ��.', view: true, nocharm: true},
	spell_powerup4_self: {lbl:'������ �������� �� ����', fmt:'{0} ��.', view: true, nocharm: true},
	spell_powerup4_other: {lbl:'������ �������� �� ������', fmt:'{0} ��.', view: true, nocharm: true},
	spell_protect10_self: {lbl:'������ �� ������ �� ����', fmt:'{0} ��.', view: true, nocharm: true},
	spell_protect10_other: {lbl:'������ �� ������ �� ������', fmt:'{0} ��.', view: true, nocharm: true},
	spell_protect1_self: {lbl:'������ �� ���� �� ����', fmt:'{0} ��.', view: true, nocharm: true},
	spell_protect1_other: {lbl:'������ �� ���� �� ������', fmt:'{0} ��.', view: true, nocharm: true},
	spell_protect3_self: {lbl:'������ �� ������� �� ����', fmt:'{0} ��.', view: true, nocharm: true},
	spell_protect3_other: {lbl:'������ �� ������� �� ������', fmt:'{0} ��.', view: true, nocharm: true},
	spell_protect2_self: {lbl:'������ �� ���� �� ����', fmt:'{0} ��.', view: true, nocharm: true},
	spell_protect2_other: {lbl:'������ �� ���� �� ������', fmt:'{0} ��.', view: true, nocharm: true},
	spell_protect4_self: {lbl:'������ �� ����� �� ����', fmt:'{0} ��.', view: true, nocharm: true},
	spell_protect4_other: {lbl:'������ �� ����� �� ������', fmt:'{0} ��.', view: true, nocharm: true},
	magic_damage: {lbl:'���������� ����', view: true, nocharm: true},
	magic_cdamage: {lbl:'���������� ����������� ����', view: true, nocharm: true},
	consumed_reward: {lbl:'��������� �������', view: true, nocharm: true},
	_power_v: {lbl:'����� ��. �������� �����', fmt: '{0}%', view: true, nocharm: true}
	};

var knownWeaponSkills = [
	'knifeskill',
	'axeskill',
	'clubskill',
	'swordskill',
	'staffskill'
	];

var shortInfoMap = {
	level: 'level',
	str: 'strength',
	dex: 'dexterity',
	inst: 'intuition',
	power: 'endurance',
	intel: 'intellect',
	wis: 'wisdom',
	spirit: 'spirituality'
	};

var shortInfoMap2 = {
	_str: 'strength',
	_dex: 'dexterity',
	_inst: 'intuition',
	_power: 'endurance',
	_intel: 'intellect'
	};

var knownPredefinedCharms = [
	{id: 'enhp_3_manabuff1', caption: '���������� ���� 1', v: 'mana#20', categories: ['staffs']},
	{id: 'enhp_3_manabuff2', caption: '���������� ���� 2', v: 'mana#40', categories: ['staffs']},
	{id: 'enhp_3_manabuff3', caption: '���������� ���� 3', v: 'mana#60', categories: ['staffs']},

//	{id: 'enhp_3_moder_4', caption: '���������� ������: �����', categories: ['knives','axes','clubs','swords']},
//	{id: 'enhp_3_moder_5', caption: '���������� ������: ˸�', categories: ['knives','axes','clubs','swords']},

	{id: 'enhp_6_bloodlinew1', caption: '�������� ����', v: 'power#1#hitpoints#6', categories: ['rings']},
	{id: 'enhp_6_bloodlinem1', caption: '�������� ����', v: 'magicpower#1#hitpoints#6', categories: ['rings']},
	{id: 'enhp_6_bloodlinew2', caption: '�������� ���� [2]', v: 'power#2#hitpoints#12', categories: ['rings']},
	{id: 'enhp_6_bloodlinem2', caption: '�������� ���� [2]', v: 'magicpower#2#hitpoints#12', categories: ['rings']},
	{id: 'enhp_2_maxHP10', caption: '���������� ������: �������� +100', v: 'hitpoints#100', categories: ['necklaces']},
	{id: 'enhp_13_pm_revard', caption: '���������� ������: �������� +12', v: 'hitpoints#12', categories: ['bracelets']},
	{id: 'enhp_3_moder_6_1', caption: '���������� �����: ����', v: 'magicpower#4', categories: ['staffs']},
	{id: 'enhp_4_moder_2_1', caption: '���������� �����: �����', v: 'hitpoints#33', categories: ['heavyarmors', 'lightarmors']},
	{id: 'enhp_4_4', caption: '���������� �����: ���������', v: 'antijumpaway#10#stats#2', categories: ['heavyarmors', 'lightarmors']},
	{id: 'enhp_2_4', caption: '���������� ������: ���������', v: 'magicdefence#5#stats#2', categories: ['necklaces']},
	{id: 'enhp_9_5', caption: '���������� ����: ���������', v: 'defence#5#stats#2', categories: ['helmets']},
	{id: 'enhp_12_4', caption: '���������� ������: ���������', v: 'anticriticalhit#10#stats#2', categories: ['boots']},
	{id: 'enhp_19_1', caption: '���������� ������: ������ �� �����', v: 'defence#20', categories: ['pants']},
	{id: 'enhp_19_2', caption: '���������� ������: ���������', v: 'hitpoints#40', categories: ['pants']},
	{id: 'enhp_19_3', caption: '���������� ������: ������ �� �����', v: 'magicdefence#20', categories: ['pants']},
	{id: 'enhp_19_4', caption: '���������� ������: ���������', v: 'stats#3', categories: ['pants']},
	{id: 'enhp_9_moder_1_1', caption: '���������� ����: �������������� �����', v: 'dexterity#1#intuition#1#intellect#1#strength#1#hitpoints#6', categories: ['helmets']},
	{id: 'enhp_11_moder_3', caption: '���������� ��������: ����', v: 'power#2#magicpower#2', categories: ['gauntlets']},
	{id: 'enhp_2_tournir1chka_7_1', caption: '���������� ������: �������������� +1', v: 'dexterity#1#intuition#1#strength#1#hitpoints#6', categories: ['necklaces']},
	{id: 'enhp_2_tournir1chka_7_2', caption: '���������� ������: �������������� +2', v: 'dexterity#2#intuition#2#strength#2#hitpoints#12', categories: ['necklaces']},
	{id: 'enhp_2_tournir1chka_7_3', caption: '���������� ������: �������������� +3', v: 'dexterity#3#intuition#3#strength#3#hitpoints#18', categories: ['necklaces']}
	];

var knownNaturalEditors = new Array(
	'level',
	'levelup',
	'-',
	'strength',
	'dexterity',
	'intuition',
	'endurance',
	'intellect',
	'wisdom',
	'spirituality',
	'-',
	'knifeskill',
	'axeskill',
	'clubskill',
	'swordskill',
	'staffskill',
	'-',
	'firemagicskill',
	'airmagicskill',
	'watermagicskill',
	'earthmagicskill',
	'-',
	'lightmagicskill',
	'darkmagicskill',
	'greymagicskill',
	'-',
	'pstat',
	'pskil'
	);

var knownElix = {
	strength: { id: 'pot_base_50_str', caption: '����� ����������', makeUp: 'strength', values: new Array(0, 10, 11, 12, 13, 14, 15) },
	dexterity: { id: 'pot_base_50_dex', caption: '����� ���������������', makeUp: 'dexterity', values: new Array(0, 10, 11, 12, 13, 14, 15) },
	intuition: { id: 'pot_base_50_inst', caption: '����� ���������', makeUp: 'intuition', values: new Array(0, 10, 11, 12, 13, 14, 15) },
	intellect: { id: 'pot_base_50_intel', caption: '����� ������', makeUp: 'intellect', values: new Array(0, 10, 11, 12, 13, 14, 15) },	
	separator0: null,
	strength2: { id: 'pot_base_200_bot3', caption: '�������� ��������', makeUp: 'strength', values: new Array(0, 15, 16, 17, 18, 19, 20, 21, 22) },
	dexterity2: { id: 'pot_base_200_bot2', caption: '�������� ����', makeUp: 'dexterity', values: new Array(0, 15, 16, 17, 18, 19, 20, 21, 22) },
	intuition2: { id: 'pot_base_200_bot1', caption: '�������� ������������', makeUp: 'intuition', values: new Array(0, 15, 16, 17, 18, 19, 20, 21, 22) },
	intellect1: { id: 'pot_base_200_bot4', caption: '�������� ������', makeUp: 'intellect', values: new Array(0, 15, 16, 17, 18, 19, 20, 21, 22) },	
	separator2: null,
	strength3: { id: 'pot_base_300_str', caption: '������� �������� ����������', makeUp: 'strength', values: new Array(0, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30), makeUp2: 'anticriticalhit', values2: [50] },
	dexterity3: { id: 'pot_base_300_dex', caption: '������� �������� ������', makeUp: 'dexterity', values: new Array(0, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30), makeUp2: 'jumpaway', values2: [50] },
	intuition3: { id: 'pot_base_300_inst', caption: '������� �������� �������������', makeUp: 'intuition', values: new Array(0, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30), makeUp2: 'criticalhit', values2: [50] },
	intellect3: { id: 'pot_base_300_intel', caption: '������� �������� ������������', makeUp: 'intellect', values: new Array(0, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30), makeUp2:'magicpower', values2: [5] }
	/*intellect2: { id: 'pot_base_50_intel2', caption: '������ ������', makeUp: 'intellect', values: new Array(0, 15, 16, 17, 18, 19, 20, 21, 22) },
	separator0: null,
	strength4: { id: 'pot_base_200_bot_pm1', caption: '������� ���� �������', makeUp: 'strength', values: new Array(20, 37) },
	strength6: { id: 'pot_base_1000_str', caption: '������� ��� �������', makeUp: 'strength', values: new Array(0, 12, 18) },
	dexterity3: { id: 'pot_base_1000_dex', caption: '������ ��� �������', makeUp: 'dexterity', values: new Array(0, 12, 18) },
	intuition3: { id: 'pot_base_1000_inst', caption: '���������� ��� �������', makeUp: 'intuition', values: new Array(0, 12, 18) }*/
	};

var knownAdds = {
	};

var knownDamageElix = {
	pot_base_100_master: {id: 'pot_base_100_master', caption: '�������� ������� ��������', modify: {power: 33, damage1: 25, damage2: 50, magicpower:50, magicdefencereduce:10}},
/*	pot_base_0_strup: {id: 'pot_base_0_strup', caption: '���������� �������', modify: {power: 33, damage1: 25, damage2: 50}},
	pot_base_0_strup_1: {id: 'pot_base_0_strup', caption: '���������� �������', modify: {magicpower: 50, magicdefencereduce: 10}},
	pot_base_0_ny3: {id: 'pot_base_0_ny3', caption: '�������� ��������', modify: {hitpoints: 300}},
	pot_base_0_ny1: {id: 'pot_base_0_ny1', caption: '�������� -��������-', modify: {power: 15,hitpoints: 60}}*/
	};

var knownDefElix = {
	/*pot_base_50_kolproof: { places: new Array('eweapon'), id: 'pot_base_50_kolproof', caption: '����� ���������� ���', makeUp: 'thrustdefence', values: new Array(0, 50, 62) },
	pot_base_50_rubproof: { places: new Array('eweapon'), id: 'pot_base_50_rubproof', caption: '����� ��������� �����', makeUp: 'sabredefence', values: new Array(0, 50, 62) },
	pot_base_50_drobproof: { places: new Array('eweapon'), id: 'pot_base_50_drobproof', caption: '����� ������� �������', makeUp: 'crushdefence', values: new Array(0, 50, 62) },
	pot_base_50_rezproof: { places: new Array('eweapon'), id: 'pot_base_50_rezproof', caption: '����� ���������� ������', makeUp: 'cutdefence', values: new Array(0, 50, 62) },
	pot_base_50_damageproof: { places: new Array('eweapon'), id: 'pot_base_50_damageproof', caption: '������� ������������', makeUp: 'defence', values: new Array(0, 50, 62) },
	pot_base_200_alldmg2: { places: new Array('eweapon'), id: 'pot_base_200_alldmg2', caption: '������� ����� ���������', makeUp: 'defence', values: new Array(0, 75, 93) },*/
	pot_base_200_alldmg3: { places: new Array('eweapon'), id: 'pot_base_200_alldmg3', caption: '������ ������������', makeUp: 'defence', values: new Array(0, 100, 125) },
	pot_base_200_alldmg2_p1k: { places: new Array('eweapon'), id: 'pot_base_200_alldmg2_p1k', caption: '����� �������� ���������', makeUp: 'defence', values: new Array(0, 120, 150) },
	pot_base_300_alldmg: { places: new Array('eweapon'), id: 'pot_base_300_alldmg', caption: '������� �������� �����������', makeUp: 'defence', values: new Array(0, 170, 212) },
	separator0: null,
	/*pot_base_50_fireproof: { places: new Array('emagic'), id: 'pot_base_50_fireproof', caption: '������� �������', makeUp: 'firemagicdefence', values: new Array(0, 50, 62) },
	pot_base_50_airproof: { places: new Array('emagic'), id: 'pot_base_50_airproof', caption: '������� �����', makeUp: 'airmagicdefence', values: new Array(0, 50, 62) },
	pot_base_50_waterproof: { places: new Array('emagic'), id: 'pot_base_50_waterproof', caption: '������� �����', makeUp: 'watermagicdefence', values: new Array(0, 50, 62) },
	pot_base_50_earthproof: { places: new Array('emagic'), id: 'pot_base_50_earthproof', caption: '������� ������', makeUp: 'earthmagicdefence', values: new Array(0, 50, 62) },
	pot_base_50_magicproof: { places: new Array('emagic'), id: 'pot_base_50_magicproof', caption: '������� ������', makeUp: 'magicdefence', values: new Array(0, 50, 62) },
	pot_base_100_allmag1: { places: new Array('emagic'), id: 'pot_base_100_allmag1', caption: '����� ����� ���������', makeUp: 'magicdefence', values: new Array(0, 33, 41) },*/
	//separator3: null,
	/*pot_base_150_fireproof: { places: new Array('emagic'), id: 'pot_base_150_fireproof', caption: '������� ������', makeUp: 'firemagicdefence', values: new Array(0, 75, 93) },
	pot_base_150_airproof: { places: new Array('emagic'), id: 'pot_base_150_airproof', caption: '������� �������', makeUp: 'airmagicdefence', values: new Array(0, 75, 93) },
	pot_base_150_waterproof: { places: new Array('emagic'), id: 'pot_base_150_waterproof', caption: '������� �������', makeUp: 'watermagicdefence', values: new Array(0, 75, 93) },
	pot_base_150_earthproof: { places: new Array('emagic'), id: 'pot_base_150_earthproof', caption: '������� ����', makeUp: 'earthmagicdefence', values: new Array(0, 75, 93) },
	pot_base_200_allmag2: { places: new Array('emagic'), id: 'pot_base_200_allmag2', caption: '������� ����� ���������', makeUp: 'magicdefence', values: new Array(0, 75, 93) },*/
	pot_base_200_allmag3: { places: new Array('emagic'), id: 'pot_base_200_allmag3', caption: '������ ���������', makeUp: 'magicdefence', values: new Array(0, 100, 125) },
	pot_base_200_allmag2_p1k: { places: new Array('emagic'), id: 'pot_base_200_allmag2_p1k', caption: '����� ������ �����', makeUp: 'magicdefence', values: new Array(0, 120, 150) },
	pot_base_300_allmag: { places: new Array('emagic'), id: 'pot_base_300_allmag', caption: '������� �������� ���������', makeUp: 'magicdefence', values: new Array(0, 170, 212) }
	};

var knownApplicableSpells = {
	spellIntel: { id: 'spell_stat_intel', caption: '�������� �����', makeUp: 'intellect', values: new Array(0, 10), isSpell: true,check:0 },
	separator2: null,
	spellHitpointsUp: { id: 'spell_powerHPup{0}', caption: '����� �����', makeUp: 'hitpoints', values: new Array(0, 1, 2, 3, 4 , 5, 6), isSpell: true,check:0 },
	/*spellHitpointsDown: { id: 'spell_powerHPdn{0}', caption: '���������', makeUp: 'hitpoints', values: new Array(0, -1, -2, -3, -4 , -5), isSpell: true,check:0 },*/
	spellBD: { id: 'wis_fire_sign',pic:'wis_fire_sign', caption: '������������� �����', makeUp: 'allstats', values: new Array(0,1,2,3,4,5,6,7,8,9,10,11), isSpell: true, check:1}

	};

var knownPowerUps = {
	spell_powerup10: {id:'spell_powerup10:',lbl:'����������', skill: 'greymagicskill', found: false, damageup: true,value:25},
	spell_powerup1: {id:'spell_powerup1',lbl:'�������� ��������',skill: 'firemagicskill', found: false, damageup: true, element: 'fire',value:25,check:true},
	spell_powerup2: {id:'spell_powerup2',lbl:'������ ��������',skill: 'watermagicskill', found: false, damageup: true, element: 'water',value:25,check:true},
	spell_powerup3: {id:'spell_powerup3',lbl:'��������� ��������',skill: 'airmagicskill', found: false, damageup: true, element: 'air',value:25,check:true},
	spell_powerup4: {id:'spell_powerup4',lbl:'������ ��������',skill: 'earthmagicskill', found: false, damageup: true, element: 'earth',value:25,check:true},
	spell_protect10: {id:'spell_protect10',lbl:'������ �� ������',skill: 'greymagicskill', found: false, damageup: false,value:100},
	spell_protect1: {id:'spell_protect1',lbl:'������ �� ����',skill: 'firemagicskill', found: false, damageup: false, element: 'fire',value:100},
	spell_protect2: {id:'spell_protect2',lbl:'������ �� ����',skill: 'watermagicskill', found: false, damageup: false, element: 'water',value:100},
	spell_protect3: {id:'spell_protect3',lbl:'������ �� �������',skill: 'airmagicskill', found: false, damageup: false, element: 'air',value:100},
	spell_protect4: {id:'spell_protect4',lbl:'������ �� �����',skill: 'earthmagicskill', found: false, damageup: false, element: 'earth',value:100}
	};


var knownECRPowerUps = {
	/*spell_godstat_str: {modify: 'strength', v: 100},
	spell_godstat_dex: {modify: 'dexterity', v: 100},
	spell_godstat_inst: {modify: 'intuition', v: 100},
	spell_godprotect10: {modify: 'defence', v: 300},
	spell_godprotect: {modify: 'magicdefence', v: 300},
	invoke_spell_godintel100: {modify: 'intellect', v: 100},
	invoke_spell_godmana100: {modify: 'mana', v: 2000},
 spell_startenacity: {modify: 'hitpoints', v: 300},
spell_starshine: {modify: 'strength', v: 10, 'dexterity', v: 10, 'intuition', v: 10},
spell_starenergy: {modify: 'magicpower', v: 20, 'mana', v: 150}*/

//	separator2: null,   // ����� �� ����:
	invoke_plain_1s_str10: {modify: 'strength', v: 10}, //������ ��� ������
	invoke_plain_1s_dex10: {modify: 'dexterity', v: 10}, //Ƹ���� ��� ������
	invoke_plain_1s_inst10: {modify: 'intuition', v: 10}, //������� ��� ������
	invoke_plain_1s_intel10: {modify: 'intellect', v: 10}, //����� ��� ������
	invoke_plain_1s_all5: {v:'5+5+5+5', modifyExt: {strength: 5, dexterity:5, intuition: 5, intellect: 5}}, //����� ��� ������
	invoke_plain_1s_spirit10: {modify: 'spirituality', v: 10}, // ������ ��� ������	
	club_defender: {modify: 'hitpoints', v: 120}, 
	/*quenching: {modify: 'hitpoints', v:120},
	bulls_breath_warrior: {modify: 'hitpoints', v:500},
	bulls_breath_mage: {modify: 'hitpoints', v:200},*/
	catbaff_strength: {modify: 'strength', v : 5},
	catbaff_dexterity: {modify: 'dexterity', v: 5},
	catbaff_intuition: {modify: 'intuition', v: 5},
	catbaff_regen: {modify: 'hpspeed', v: 30},//???
	catbaff_life: {modify: 'hitpoints', v: 30},
	catbaff_damage: {modify: 'maxdamage', v: 25},
	mrbaff_makropus: {modify: 'hitpoints', v: 250},
	mrbaff_gribnica: {v:'5+5+5+5', modifyExt: {strength: 5, dexterity:5, intuition: 5, intellect: 5}},
	glbaff_ghost_1: {v: '175+175', modifyExt: {jumpaway: 175, anticriticalhit: 175}},
	//glbaff_ghost_1: {v: '175+175', modifyExt: {strength: 175, intuition: 175}},
	glbaff_ghost_2: {v: '175+175', modifyExt: {criticalhit: 175, antijumpaway: 175}},
	glbaff_skeleton_1: {modify: 'power', v: 10},
	glbaff_skeleton_2: {modify: 'magicdefencereduce', v:2}
	
};

var reSharpness = /\+(\d{1,2})$/;
var reDamage = /^����: ([0-9]*) - ([0-9]*)$/;
var reHeadArmor = /^����� ������: ([0-9]*)-([0-9]*) \([0-9]*\+d[0-9]*\)$/;
var reBodyArmor = /^����� �������: ([0-9]*)-([0-9]*) \([0-9]*\+d[0-9]*\)$/;
var reWaistArmor = /^����� �����: ([0-9]*)-([0-9]*) \([0-9]*\+d[0-9]*\)$/;
var reLegArmor = /^����� ���: ([0-9]*)-([0-9]*) \([0-9]*\+d[0-9]*\)$/;
var reHitPoints = /^������� �����: \+([0-9]+)$/

var combatSpells = {
	fireball: { id: 'fireball', magic: 'fire', critMultiplier: 3, elemental: true, minzero: false },
	lighting_bolt: { id: 'lighting_bolt', magic: 'air', critMultiplier: 1, elemental: true, minzero: true },
	showstorm: { id: 'showstorm', magic: 'water', critMultiplier: 1, elemental: true, minzero: false },
	stonerain: { id: 'stonerain', magic: 'earth', critMultiplier: 3, elemental: true, minzero: false },
	darkbolt: { id: 'darkbolt', magic: 'dark', critMultiplier: 3, elemental: false, minzero: false }
	};

var trickCategories = [
	{id: 'novice', caption: '�����&nbsp;��������' },
	{id: 'fight', caption: '�����&nbsp;������' },
	{id: 'fire', caption: '������&nbsp;����' },
	{id: 'air', caption: '������&nbsp;�������' },
	{id: 'water', caption: '������&nbsp;����' },
	{id: 'earth', caption: '������&nbsp;�����' },
	{id: 'light', caption: '�����&nbsp;�����' },
	{id: 'dark', caption: '�����&nbsp;����' },
	{id: 'grey', caption: '�����&nbsp;�����' }
	];

var helpChapterHtml = ''
	+ '<h4>��� ������������</h4>'
	+ '<p>���� ����������� ����� ������� ���������.</p>'
	+ '<p>��� ������� (������� ����) �� ����� ���� �������� ���������� ����, ��������� �������� �� ������ ������ �������.</p>'
	+ '<p>����� ����, ��� �� ����� �������, � ������� ����� ���� �� ������ ���� ������� ��������, �������� �� ������������ ������, ��������� ��� �������� ��, '
	+ '����� ��� ��������� ����� ��� ������ ���������.</p>'
	+ '<p>��������, � ������� ����� ���� �� ������ ������ ��� �������, ����� �������� ��� �� 9 ������, ��������� ��� �������� �������� ����, � ����� �������� �� +10.</p>'
	+ '<p>������ ���� �������� �� ������ ������ ��������� ��� ��������� � ���� ������. ��� ����, ����� �������� ������������ ������� �����, '
	+ '���������� �������� ��� �����, ������� �� �������, ������ ������� &quot;�������� ������ �� ���� �������� �����&quot;. '
	+ '������, ��� �������� ��������� ������ ������ ����� ������� ��������� ������ �� ��������.</p>'
	+ '<p>����� �� ������ ������ ������ ���� �� ��������������� ���������� ���� &quot;���������� ����&quot;, ������ ����� &quot;������ �������� ��&quot;, ������������� ���� �������� ���������.</p>'
	+ '<p>� ����������� ������������� ����������� ��������� ��������� ������� � ������� �������� &quot;����� �������&quot;, ����� �� ����� ������� � ���������� ��������� �������� ����������.</p>'
	+ '<p>����� �� ������ ���������� ��������� ��������� ������ �� ������ ��������� � �������, ������ �������� &quot;������� �������&quot;.</p>'
	+ '<p>���������� ������� ����� �������� �� �������� &quot;������� �����&quot;.</p>'
	+ '<h4>������ �����������</h4>'
	+ '<p>��� ��������� ���������� ����������� ���������� �� ������ ����� ������� ��������� ��, �� � ����������� ������ ������ ���������� ���������.</p>'
	+ '<p>����������� ���� ������ �����������, ������ �� ������ ������������, � ����� �������� ������������ ���� ���������� ����� ������ ������� ������� '
	+ '&quot;������&quot; �����������, � ����� ������� �������� � ���� ������������.</p>'
	+ '<p>�����������, ���������� ����� ���� �� ������ �������, � ���� �� ���������� ��������� ��, ��� ��� �� ��������� ����������.</p>'
	+ '<p>�������� �������������� ���������� ���������� �� ���� �������� �������� �����, ������ �������� &quot;������� �������&quot;.</p>'
	+ '<p>� ������� �� ���������� ������ ��������� ��, ��������� ������ ����� ����������� ������������ ������� ���������� �����������, ������� �������.</p>'
	+ '<p>������� ���������� ������ ����� ����������� �� ��������� ������� ����������� ��������� �����������:</p>'
	+ '<ul><li>�� ������������ �������� �������� �����������, � �� ������ �� ���������;</li>'
	+ '<li>�� ��������� ������� ���������� �� ����� &quot;������&quot;, &quot;������&quot;, &quot;����&quot;, &quot;����&quot;;</li>'
	+ '<li>�� ������������ �������� ����������, ������ �� �����, ���������� �������� � ������ �� ������ (���� ������ ��������������� ������);</li>'
	+ '<li>�� ������������ �������� ����� �� ������ �����, ����������� ���� (���� ������ ��������������� ������).</li></ul>'
	+ '<p>� �������� ���������� ��������� � �������: ������� �������� (����������� ��������� ���������� �����������: ������ �������� + �������� �� ���������) [��������� ��������]. '
	+ '���� �����-���� �������� �������� ����������� ��������� � ��, �� ��� ��������� ������ �������.</p>'
	+ '<p>���� ������� �������� ����� ������������� ��� �������, ��� ��������� ������ ������, ����� ���������� ������. ���� ������� �������� ������ ����������, �� ��������� �������� ���������� ������� ������.</p>'
	+ '<p><a href="#" class="TLink" onclick="hideMenu(); hideHelp(); return false">������ �������</a>.</p>'
	;

var dressHints = new Array(
	'�� ����� ������ ������ ��������� ��������� ������ ��� �������� �� ������ ��������� � �������, ������ �������� &quot;������� �������&quot;.',
	'���� �� ������� �� ������� ������ ���������� ��� ����� ���������� ��������, �� ����� ����� ���������� �������� �������������� ����� ����������.',
	'���� �� ������� �� ������� ������ ������ �����, ��������� ����, �� ����� ����� ��������� ���� ������� ���������� (��� ���� � ������� ������� �� �����).',
	'��� ����, ����� ������ ��������, �����������, �������� ������, ������ ������� ��������, � ����� ������� �� ������ ��������, � �������� � ���� ����� &quot;��������&quot;.',
	'��� ����, ����� ��������� �����, ������� �� ������ �����, � �������� � ���� ����� &quot;��������� �����&quot;.',
	'��� ����, ����� ��������� ������� ��� �������� ��, ������� �� ������ �������, � �������� � ���� ����� &quot;��������� ��� ��������&quot;.',
	'����������� ����� ��������? ��������� ��������� Internet Explorer: ������ | �������� ������������, �������������, ��������� HTTP 1.1 - ������� ������ ���� ����������� ��� ����� ����������.',
	'��� ����, ����� �������� ������, ������� �� ������ ������, � �������� � ���� ����� &quot;������� �� +X&quot;.',
	'�� ��������� ���������� �������� ���� ���� �������� ���������� � ���� ������ ��������. �� �� ������ ������ ������� �� ����������, ��������� &quot;������&quot;.',
	'���� �� ������ ��������� ���������� �������, �����, ��� ����������������, �������� ��� ����������� ��������� � �������, ���������� ������� &quot;���������&quot;.',
	'������ �������� ����� ������, ���� �� ������ ������� ������������� ��������� ��, ����� ��� ���: &quot;�� ��������� ��&quot;.',
	'���� �� ������ ��������� ���� �� ���������� ��, ������ ������� �������� ������� �� ���� &quot;������ �������� ��&quot;.',
	'����� ������� �������� ��������� ������, ���������� ����� ������� � ����������� ������ ����� � ������ ���������.',
	'�� ������ ������������ �������� � ����������� ���������� ����������, ��������� ������������ ���������� �������, ����� �� �������� &quot;����� �������&quot;.',
	'�� ������ ����� �������� ������ �������� ���������� � �������� ��������, ������ �������� &quot;������� �������&quot;.'
	);

function setItemPropLabel(propName, newLabel)
{
	item_props[propName].lbl = newLabel;
}

function getItemPropLabel(propName)
{
	return item_props[propName].lbl;
}

function getItemPropFormattedValue(propName, value, maxvalue)
{
	var itemProp = item_props[propName];
	var actualValue = value;
	if (('maxvalue' in itemProp) && (value >= itemProp.maxvalue))
	{
		actualValue = itemProp.maxvalue.toString().bold();
	}
	var fmt = ('fmt' in itemProp) ? itemProp.fmt : '{0}';
	r = format(fmt, actualValue);
	if (maxvalue == null)
	{
		return r;
	}
	if (value !== maxvalue && value < maxvalue)
	{
		return r.fontcolor("brown");
	}
	return r.fontcolor("darkgreen");
}


function testStateProp(state, propName, value)
{
	var v = parseInt(value);
	var r = true
		&& (state != null)
		&& !isNaN(v)
		;
	if (r && (propName in state.results))
	{
		var sv = state.results[propName];
		if (propName in state.battlemf)
		{
			sv -= state.battlemf[propName];
		}
		r = (sv < v);
	}
	return r;
}

function getHtmlOfProp(state, obj, propDesc, propName, extension)
{
	if (obj == null || propDesc == null || !(propName in obj))
	{
		return '';
	}
	var fmt = ('fmt' in propDesc) ? propDesc.fmt : '{0}';
	var v = format(fmt, obj[propName]);
	var red = false;
	if (state != null)
	{
		red |= testStateProp(state, propName, obj[propName]);
	}
	if (red)
	{
		v = format('<font color="red">{0}</font>', v);
	}
	var r = propDesc.lbl + ': ' + v;
	if (extension  != null)
	{
		r += extension;
	}
	return r + '<br />';
}

function getHtmlOfSignedProp(obj, propDesc, propName, charm, rune, runeOpt)
{
	if (obj == null || propDesc == null || !(propName in obj))
	{
		return '';
	}
	var runeMods=null;
	if ((rune != null) && (runeOpt != null))
		{
		var appRune = getObjectById(rune);
		if ('modify' in appRune)
			{
			if ('opts' in appRune.modify)
				{
				if (appRune.modify.opts[runeOpt] != null)
					{
					runeMods=appRune.modify.opts[runeOpt];
					}
				}

			}
		}
	var fmt = ('fmt' in propDesc) ? propDesc.fmt : '{0}';
	var v = parseInt(obj[propName]);
	if (isNaN(v))
	{
		v = obj[propName];
	}
	else
	{
		var hasCharm = false;
		if ((charm != null) && (propName in charm))
		{
			v -= charm[propName];
			hasCharm = true;
		}

		var hasRune = false;
		if ((runeMods != null) && (propName in runeMods))
		{
			v -= runeMods[propName];
			hasRune = true;
		}
		if (v > 0)
		{
			v = '+' + v;
		}
		if (hasCharm)
		{
			v = '' + v + '<b>';
			if (charm[propName] > 0)
			{
				v += '+';
			}
			v += '' + charm[propName] + '</b>';
		}

		if (hasRune)
		{
			v = '' + v + '<i>';
			if (runeMods[propName] > 0)
			{
				v += '+';
			}
			v += '' + runeMods[propName] + '</i>';
		}
	}
	return propDesc.lbl + ': ' + format(fmt, v) + '<br />';
}

function getHtmlOfArmorProp(obj, basePropName, caption)
{
	var amin = null;
	var amax = null;
	if (obj == null)
	{
		return '';
	}
	if (basePropName in obj)
	{
		amax = amin = obj[basePropName];
	}
	else if ((basePropName + '1') in obj)
	{
		amin = obj[basePropName + '1'];
		amax = obj[basePropName + '2'];
	}
	if (amin == null)
	{
		return '';
	}
	return format('{0}: {1}-{2}<br />', caption, amin, amax);
}

function getDefAttackFreqFor(atype)
{
	return {id: atype, ideal: 25, real: 25, freal: 25, elemental: false};
}

function getAttackFreq(obj)
{
	if (obj == null || !('attacks' in obj))
	{
		return {
			thrust: getDefAttackFreqFor('thrust'),
			sabre: getDefAttackFreqFor('sabre'),
			crush: getDefAttackFreqFor('crush'),
			cut: getDefAttackFreqFor('cut')
		};
	}
	var totalv = 0;
	var r = new Object();
	for (var attackn in obj.attacks)
	{
		var iv = attackFreq['f' + obj.attacks[attackn]];
		var elemental = false;
		for (var nei = 0; nei < naturalElements.length; nei++)
		{
			if (naturalElements[nei] == attackn)
			{
				elemental = true;
				break;
			}
		}
		r[attackn] = {id:attackn, ideal: iv, elemental: elemental};
		totalv += iv;
	}
	for (var rn in r)
	{
		r[rn].real = (r[rn].ideal * 100.0) / totalv;
		r[rn].freal = Math.floor(r[rn].real * 100.0 + 0.5) / 100.0;
	}
	return r;
}

function areNotMagicGloves(o)
{
	return ((o != null) && (o.slot == 'w11') && (!('required' in o) || !('wisdom' in o.required) || (o.required.wisdom == 0)));
}

function isHeavyArmor(o)
{
	return ((o != null) && (o.slot == 'w4') && (o.category == 'heavyarmors'));
}

function isSecondaryWeapon(o)
{
	return ((o != null) && ('properties' in o) && ('secondweapon' in o.properties) && (o.properties.secondweapon == 'yes'));
}

function isTwohandledWeapon(o)
{
	return ((o != null) && ('properties' in o) && ('twohandled' in o.properties) && (o.properties.twohandled == 'yes'));
}

function getJSName(id)
{
	if (id == null)
	{
		return null;
	}
	if (id.length > 0)
	{
		if (id.charAt(0) >= '0' && id.charAt(0) <= '9')
		{
			id = '_' + id;
		}
	}
	return replacestr(replacestr(id, '.', '_'), '-', '_');
}

function getObjectById(objid)
{
	if (objid == null)
	{
		return null;
	}
	return dressItems[getJSName(objid)];
}

function getSetById(setid)
{
	return dressSets[getJSName(setid)];
}

function getSetAndCountById(setCountId)
{
	for (var setn in dressSets)
	{
		var set = dressSets[setn];
		if (!('details' in set))
		{
			continue;
		}
		for (var scn in set.details)
		{
			if (scn == setCountId)
			{
				return {set: set, count: set.details[scn]};
			}
		}
	}
	return {set: null, count: null};
}

function getSetCountById(setCountId)
{
	var r = getSetAndCountById(setCountId);
	return r.count;
}

function getCountForSet(state, setid)
{
	if (state == null)
	{
		return 0;
	}
	var countFound = 0;
	var set = getSetById(setid);
	for (var sloti = 0; sloti < slots.length; sloti++)
	{
		var slot = slots[sloti];
		var o = getObjectByStateSlot(state, slot);
		if (o == null || !('setlink' in o) || (o.setlink.name != set.id))
		{
			continue;
		}
		countFound++;

		if (isTwohandledWeapon(o))
		{
			countFound++;
		}
	}
	return countFound;
}

function getStrengtheningById(strengtheningid)
{
	return dressStrengthenings[strengtheningid];
}

function getObjectDescHtml(state, obj)
{
	var i;
	var html = '';
	var addinfo = '';
	var level = 0;
	if (('required' in obj) && ('level' in obj.required))
	{
		level = obj.required.level;
	}
	var artefact = (('artefact' in obj) && obj.artefact);
	var old = (('old' in obj) && obj.old);
	var imp1 = (('imp1' in obj) && obj.imp1);
	//var showTeeth = (level < 8) && !artefact && !old && !imp1;
	var showTeeth = false;
	html += obj.caption.bold();
	if (('showlevel' in obj) && obj.showlevel && ('level' in obj))
	{
		html += '&nbsp;<b>[' + obj.level + ']</b>';
	}
	if (artefact)
	{
		html += format('&nbsp;<img src="{0}artefact.gif" width="18" height="16" border="0" alt="Artefact" />', baseImgPath);
	}
	if ('alignment' in obj)
	{
		html += format('&nbsp;' + alignImages[obj.alignment], baseImgPath);
	}
	if ('binding' in obj)
	{
		switch (obj.binding)
		{
		case 'bop':
			html += '&nbsp;<img src="' + baseImgPath + 'destiny.gif" style="filter: invert()" border="0" width="16" height="18" alt="' + localizer.bop + '" />';
			break;
		case 'boe':
			html += '&nbsp;<img src="' + baseImgPath + 'destiny.gif" style="filter: gray()" border="0" width="16" height="18" alt="' + localizer.boe + '" />';
			break;
		}
	}
	else if ('destiny' in obj)
	{
		html += '&nbsp;<img src="' + baseImgPath + 'destiny.gif" border="0" width="16" height="18" alt="' + obj.destiny + '" />';
	}
	if (('wasFit' in obj) && obj.wasFit)
	{
		html += '&nbsp;' + localizer.wasFit;
	}
	if (('wasUpgrade' in obj) && obj.wasUpgrade)
	{
		html += '&nbsp;' + localizer.wasUpgrade;
	}
	if (old)
	{
		html += '&nbsp;[old]';
	}
	if (imp1)
	{
		html += '&nbsp;' + localizer.impitem;
	}
	if (('wasCharmed' in obj) && obj.wasCharmed)
	{
		html += '&nbsp;' + localizer.wasCharmed;
	}
	if (('wasAdded' in obj) && obj.wasAdded)
	{
		html += '&nbsp;' + localizer.wasAdded;
	}
	html += '<br />';

	if (('wasRuned' in obj) && ('rune' in obj))
	{
		var appRune = getObjectById(obj.rune);
		if ('caption' in appRune)
			{
			html += '<i>'+localizer.wasRuned + ':&nbsp;' + appRune.caption.bold() + '</i><br />';
			}
	}
	if ('owner' in obj)
	{
		html += localizer.ownedBy + '<b>' + obj.owner + '</b><br />';
	}
	if ('clan' in obj)
	{
		html += localizer.ownedBy + '<img src="' + clanImgPath + obj.clan + '.gif" width="24" height="15" border="0" /><b>' + obj.clan + '</b><br />';
	}
	if (('resources' in obj) || (('consumes' in obj) && ('spiritlevel' in obj.consumes)))
	{
		var rhtml = '';
		if ('resources' in obj)
		{
			for (var rn in obj.resources)
			{
				rhtml += '<img src="' + trickResourceImgPath + rn + '.gif" width="8" height="8" border="0" />';
				rhtml += ' ' + obj.resources[rn] + ' ';
			}
		}
		if (('consumes' in obj) && ('spiritlevel' in obj.consumes))
		{
			rhtml += '<img src="' + trickResourceImgPath + 'spirit.gif" width="8" height="8" border="0" />';
			rhtml += ' ' + obj.consumes.spiritlevel + ' ';
		}
		if (rhtml != '')
		{
			html += '<span style="font-size: 10px; font-family: Verdana, Arial, Helvetica;">';
			html += rhtml;
			html += '</span><br />';
		}
	}
	if ('count' in obj)
	{
		html += format(localizer.aboutSetCount, obj.count) + '<br />';
	}
	if ('upgrade' in obj)
	{
		html += localizer.canUpgrade + '<br />';
	}
	if (/*(('artefact' in obj) && obj.artefact) || */(('adjustment' in obj) && obj.adjustment))
	{
		html += localizer.canFit + '<br />';
	}
	if ('common' in obj)
	{
		for (var mfname in common_props)
		{
			if (!common_props[mfname].view)
			{
				continue;
			}
			var extension = '';
			if (mfname == 'price' && showTeeth && ('price' in obj.common))
			{
				extension += ' (';
				var price = obj.common.price;
				if (price >= 100)
				{
					extension += Math.floor(price / 100);
					price = price % 100;
					extension += '<img width="7" height="7" border="0" alt="" src="' + toothImgPath + 'zub_low1.gif" title="������ ���" />';
				}
				if (price >= 10)
				{
					extension += Math.floor(price / 10);
					price = price % 10;
					extension += '<img width="7" height="7" border="0" alt="" src="' + toothImgPath + 'zub_low3.gif" title="���������� ���" />';
				}
				if (price > 0)
				{
					extension += price;
					extension += '<img width="7" height="7" border="0" alt="" src="' + toothImgPath + 'zub_low4.gif" title="������ ���" />';
				}
				extension += ')';
			}
			html += getHtmlOfProp(null, obj.common, common_props[mfname], mfname, extension);

		}
		if (('probability' in obj.common) && item_props.probability.view)
		{
			html += item_props.probability.lbl + ': ';
			var probability = obj.common.probability;
			html += getItemPropFormattedValue('probability', probability);
			if (state != null)
			{
				var ointellect = 0;
				if (('required' in obj) && ('intellect' in obj.required))
				{
					ointellect = obj.required.intellect;
				}
				if (('results' in state) && ('intellect' in state.results))
				{
					html += ' ('+ localizer.probabilityReal + ' ';
					if (state.results.intellect < ointellect)
					{
						html += localizer.probabilityNever;
					}
					else
					{
					    var realprobability = (probability * (1 + (state.results.intellect - ointellect) * 0.03));
					    realprobability = Math.floor(realprobability * 100.0 + 0.5) / 100.0;
					    if (realprobability > 99.0)
					    {
						    realprobability = 99.0;
					    }
    					html += getItemPropFormattedValue('probability', realprobability);
					}
					html += ')';
				}
			}
			html += '<br />';
		}
	}
	var comsumationHtml = '';
	var absConsumeMultiplier = 1;
	if (state != null && state.natural.spirituality >= 75)
	{
		absConsumeMultiplier = 0.5;
	}
	for (var acn in absoluteSpiritConsumers)
	{
		var ac = absoluteSpiritConsumers[acn];
		if (ac.id == obj.id)
		{
			comsumationHtml += getItemPropLabel('spiritlevel');
			comsumationHtml += ': ';
			comsumationHtml += ac.spirit * absConsumeMultiplier;
			comsumationHtml += '<br />';
			break;
		}
	}
	for (var rcn in relativeSpiritConsumers)
	{
		var rc = relativeSpiritConsumers[rcn];
		if (rc.id == obj.id)
		{
			comsumationHtml += getItemPropLabel('spiritlevel');
			comsumationHtml += ': ';
			var sl = Math.floor((rc.hp * 1000.0) / state.results.hitpoints) / 100;
			comsumationHtml += sl;
			comsumationHtml += '<br />';
	    		break;
		}
	}
	if (comsumationHtml != '')
	{
		html += localizer.itemComsumesGroup.bold() + '<br />';
		html += comsumationHtml;
	}
	if ('required' in obj)
	{
		html += localizer.itemRequiredGroup.bold() + '<br />';
		if ('sex' in obj.required)
		{
   			var statesex = state.sex ? 'female' : 'male';
			var itemProp = item_props['sex'];
			if (itemProp.view)
			{
				html += getItemPropLabel('sex');
				html += ': ';
				if (statesex != obj.required.sex)
				{
					html += '<font color="red">';
				}
				html += (obj.required.sex == 'male') ? '�������': '�������';
				if (statesex != obj.required.sex)
				{
					html += '</font>';
				}
				html += '<br />';
			}
		}

		for (var mfname in item_props)
		{
			var itemProp = item_props[mfname];
			if (!itemProp.view)
			{
				continue;
			}
			if (('required' in itemProp) && itemProp.required)
			{
				html += getHtmlOfProp(state, obj.required, itemProp, mfname);
			}
		}
		if (isTwohandledWeapon(obj))
		{
			html += localizer.twohandledWeapon + '<br />';
		}
		if ('zodiacs' in obj)
		{
			html += '���� �������: ';
			var firstz = true;
			for (var zn in obj.zodiacs)
			{
				var z = obj.zodiacs[zn];
				if (firstz)
				{
					firstz = false;
				}
				else
				{
					html += ', ';
				}
				html += z.caption;
			}
			html += '<br />';
		}
		if ('capitalreputation' in obj.required)
		{
			html += '��������� � Capital city: ' + obj.required.capitalreputation;
			if (obj.required.capitalreputation >= 10000)
			{
				html += '<img src="' + brandImgPath + '1.gif" width="34" height="19" border="0" />';
			}
			html += '<br />';
		}
		if ('angelsreputation' in obj.required)
		{
			html += '��������� � Angels city: ' + obj.required.angelsreputation;
			if (obj.required.angelsreputation >= 10000)
			{
				html += '<img src="' + brandImgPath + '2.gif" width="34" height="19" border="0" />';
			}
			html += '<br />';
		}
		if ('sandreputation' in obj.required)
		{
			html += '��������� � Sand city: ' + obj.required.sandreputation;
			if (obj.required.sandreputation >= 10000)
			{
				html += '<img src="' + brandImgPath + '7.gif" width="34" height="19" border="0" />';
			}
			html += '<br />';
		}
		if ('demonsreputation' in obj.required)
		{
			html += '��������� � Demons city: ' + obj.required.demonsreputation;
			if (obj.required.demonsreputation >= 10000)
			{
				html += '<img src="' + brandImgPath + '3.gif" width="34" height="19" border="0" />';
			}
			html += '<br />';
		}
		if ('baltarreputation' in obj.required)
		{
			html += '������������ ������� �� ������ �����: ' + obj.required.baltarreputation;
			if (obj.required.baltarreputation >= 100)
			{
			html += '<img src="' + brand2ImgPath + 'znbl_1.gif" width="35" height="24" border="0" />';
			}
			html += '<br />';
		}
	}
	if ('modify' in obj)
	{
		html += localizer.itemModifyGroup.bold() + '<br />';

		//"Variable actions for different runes
		if ('opts' in obj.modify)
			{
			if (obj.modify.opts.length >= 1)
				{
				html += localizer.opt_choices + ':<br />';
				for (var a=0; a<= obj.modify.opts.length-1; a++)
					{
					for (var imod in obj.modify.opts[a])
						{
						if (!item_props[imod])
							{ continue; }
						html += '<li> '+getHtmlOfSignedProp(obj.modify.opts[a], item_props[imod], imod, null, null, null)+'</li>';
						}
					}
				html += '<br>';
				}
			}

		for (var mfname in item_props)
		{
			if (!item_props[mfname].view)
			{
				continue;
			}
			html += getHtmlOfSignedProp(obj.modify, item_props[mfname], mfname, obj.charms, obj.rune, obj.runeOpt);
		}
		for (var armorn in knownArmorModifiers)
		{
			if (!item_props[armorn].view)
			{
				continue;
			}
			html += getHtmlOfArmorProp(obj.modify, armorn, getItemPropLabel(armorn));
		}



	}
	if ('properties' in obj)
	{
		html += localizer.itemPropertiesGroup.bold() + '<br />';
		for (var mfname in item_props)
		{
			if (!item_props[mfname].view)
			{
				continue;
			}
			html += getHtmlOfSignedProp(obj.properties, item_props[mfname], mfname);
		}
		if (isTwohandledWeapon(obj))
		{
			addinfo += localizer.twohandledWeapon + '<br />';
		}
		if (isSecondaryWeapon(obj))
		{
			addinfo += localizer.secondaryWeapon + '<br />';
		}
		if ('blockzones' in obj.properties)
		{
			addinfo += localizer.blockZones + ': <b>' + obj.properties.blockzones + '</b><br />';
		}
	}
	if ('magic1' in obj)
	{
		addinfo += localizer.useMagic;
		addinfo += ' ';
		addinfo += obj.magic1;
		addinfo += '<br />';
	}
	if ('magic' in obj)
	{
		addinfo += localizer.hasMagic;
		addinfo += ' ';
		if ('name' in obj.magic)
		{
			var alt = '';
			if ('caption' in obj.magic)
			{
				alt = format(' alt="{0}"', obj.magic.caption);
			}
			addinfo += format('<img src="{2}{0}.gif" width="40" height="25" border="0"{1} />', obj.magic.name, alt, itemImgPath);
			addinfo += ' ';
		}
		if ('description' in obj.magic)
		{
			addinfo += obj.magic.description;
		}
		addinfo += '<br />';
	}
	if ('setlink' in obj)
	{
		var set = getSetById(obj.setlink.name);
		addinfo += format(localizer.partOfSet, set.caption, getCountForSet(state, set.id), set.count);
		addinfo += '<br />';
	}
	if (('fixless' in obj) && obj.fixless)
	{
		addinfo += localizer.fixless;
		addinfo += '<br />';
	}
	if (('artefact' in obj) && obj.artefact)
	{
		addinfo += localizer.fixless;
		addinfo += '<br />';
		addinfo += localizer.charmless;
		addinfo += '<br />';
	}
	if ('description' in obj)
	{
		addinfo += obj.description;
		addinfo += '<br />';
	}

	if (addinfo != '')
	{
		html += localizer.itemAddInfoGroup.italics() + '<br />';
		html += addinfo;
	}
	if ('attacks' in obj)
	{
		var af = getAttackFreq(obj);
		html += localizer.itemAttackGroup.italics() + '<br />';

		for (var attackn in obj.attacks)
		{
			var attackt = 'attackt' + attackn;
			if (attackt in localizer)
			{
				attackt = localizer[attackt];
			}
			else
			{
				attackt = attackn;
			}
			var attackq = 'attackq' + obj.attacks[attackn];
			if (attackq in localizer)
			{
				attackq = localizer[attackq];
			}
			else
			{
				attackq = obj.attacks[attackn];
			}
			var attackf = af[attackn].freal;
			html += attackt + ': ' + attackq + ' (' + attackf + '%)<br />';
		}
	}
	if ('defences' in obj)
	{
		html += localizer.itemDefenceGroup.italics() + '<br />';
		for (var defencen in obj.defences)
		{
			var defencet = 'defencet' + defencen;
			if (defencet in localizer)
			{
				defencet = localizer[defencet];
			}
			else
			{
				defencet = defencen;
			}
			var defenceq = 'defenceq' + obj.defences[defencen];
			if (defenceq in localizer)
			{
				defenceq = localizer[defenceq];
			}
			else
			{
				defenceq = obj.defences[defencen];
			}
			html += defencet + ': ' + defenceq + '<br />';
		}
	}
	return html;
}

// serialization

function serializeValue(v)
{
	var r = '';
	if (v == null)
	{
		r += '0//';
	}
	else
	{
		if (typeof (v) == 'string')
		{
			r += "s/'";
			r += escape(v);
			r += "'/";
		}
		else if (typeof (v) == 'boolean')
		{
			r += 'b/';
			r += v ? 'Y' : 'N';
			r += '/';
		}
		else if (typeof (v) == 'number')
		{
			r += 'n/';
			r += v.toString();
			r += '/';
		}
		else if (typeof (v) == 'object')
		{
			if (v instanceof Array)
			{
				r += 'a/';
				r += serializeArray(v);
				r += '/';
			}
			else
			{
				r += 'o/';
				r += serializeObject(v);
				r += '/';
			}
		}
	}
	return r;
}

function serializeArray(a)
{
	var r = '';
	for (var i = 0; i < a.length; i++)
	{
		if (r != '')
		{
			r += ',';
		}
		r += serializeValue(a[i]);
	}
	r = '(' + r + ')';
	return r;
}

function serializeObject(obj)
{
	var r = '';
	for (var propName in obj)
	{
		if (r != '')
		{
			r += ',';
		}
		var v = obj[propName];
		r += propName;
		r += '/';
		r += serializeValue(v);
	}
	r = '{' + r + '}';
	return r;
}

function reqContextChar(context)
{
	var found = false;
	var c = context.s.charAt(context.index);
	var msg = '';
	for (var i = 1; i < reqContextChar.arguments.length; i++)
	{
		if (c == reqContextChar.arguments[i])
		{
			found = true;
			break;
		}
		if (msg != '')
		{
			msg += ' or ';
		}
		msg += '"' + reqContextChar.arguments[i] + '"';
	}
	if (!found)
	{
		context.errorMessage = 'cannot deserialize value. we expect ' + msg + ' character at index ' + context.index + '.';
		context.errorFound = true;
	}
	return found;
}

function readSerializedValue(context)
{
	var c;
	var vt = context.s.charAt(context.index);
	context.index++;
	switch (vt)
	{
		case '0':
			reqContextChar(context, ':', '/');
			context.index++;
			reqContextChar(context, ':', '/');
			context.index++;
			context.valueRead = null;
			break;
		case 's':
			reqContextChar(context, ':', '/');
			context.index++;
			reqContextChar(context, "'");
			context.index++;
			var nextAposIndex = context.s.indexOf("'", context.index);
			if (nextAposIndex < 0)
			{
				context.errorMessage = 'cannot deserialize string value. we expect end &apos; character after index ' + context.index + '.';
				context.errorFound = true;
				return;
			}
			context.valueRead = unescape(context.s.substring(context.index, nextAposIndex));
			context.index = nextAposIndex + 1;
			reqContextChar(context, ':', '/');
			context.index++;
			break;
		case 'b':
			reqContextChar(context, ':', '/');
			context.index++;
			reqContextChar(context, 'Y', 'N');
			c = context.s.charAt(context.index);
			context.valueRead = (c == 'Y');
			context.index++;
			reqContextChar(context, ':', '/');
			context.index++;
			break;
		case 'n':
			reqContextChar(context, ':', '/');
			context.index++;
			var nextTwoDotIndex = context.s.indexOf(":", context.index);
			var nextSlashIndex = context.s.indexOf("/", context.index);
			if (nextTwoDotIndex < 0 || (nextSlashIndex >= 0 && nextTwoDotIndex > nextSlashIndex))
			{
				nextTwoDotIndex = nextSlashIndex;
			}
			if (nextTwoDotIndex < 0)
			{
				context.errorMessage = 'cannot deserialize number value. we expect end ":" or "/" character after index ' + context.index + '.';
				context.errorFound = true;
				return;
			}
			var v = context.s.substring(context.index, nextTwoDotIndex);
			context.valueRead = (v.indexOf('.') >= 0) ? parseFloat(v) : parseInt(v);
			context.index = nextTwoDotIndex + 1;
			break;
		case 'a':
			reqContextChar(context, ':', '/');
			context.index++;
			readSerializedArray(context);
			if (context.errorFound)
			{
				return;
			}
			reqContextChar(context, ':', '/');
			context.index++;
			break;
		case 'o':
			reqContextChar(context, ':', '/');
			context.index++;
			readSerializedObject(context);
			if (context.errorFound)
			{
				return;
			}
			reqContextChar(context, ':', '/');
			context.index++;
			break;
		default:
			context.errorMessage = 'cannot deserialize unknown value. unexpected type prefix ' + vt;
			context.errorFound = true;
			break;
	}
}

function readSerializedArray(context)
{
	var valueRead = new Array();
	var c;
	reqContextChar(context, '(');
	context.index++;
	c = context.s.charAt(context.index);
	if (c == ")")
	{
		context.index++;
		context.valueRead = valueRead;
		return;
	}
	for (;!context.errorFound; context.index++)
	{
		readSerializedValue(context);
		if (context.errorFound)
		{
			return;
		}
		var v = context.valueRead;
		valueRead.push(v);
		c = context.s.charAt(context.index);
		if (c == ")")
		{
			context.index++;
			context.valueRead = valueRead;
			return;
		}
		if (c != ",")
		{
			context.errorMessage = 'cannot deserialize array value. we expect "," or ")" character at index ' + context.index + '.';
			context.errorFound = true;
			return;
		}
	}
}

function readSerializedObject(context)
{
	var valueRead = new Object();
	var c;
	reqContextChar(context, '{');
	context.index++;
	c = context.s.charAt(context.index);
	if (c == "}")
	{
		context.index++;
		context.valueRead = valueRead;
		return;
	}
	for (;!context.errorFound; context.index++)
	{
		var nextTwoDotIndex = context.s.indexOf(":", context.index);
		var nextSlashIndex = context.s.indexOf("/", context.index);
		if (nextTwoDotIndex < 0 || (nextSlashIndex >= 0 && nextTwoDotIndex > nextSlashIndex))
		{
			nextTwoDotIndex = nextSlashIndex;
		}
		if (nextTwoDotIndex <= 0)
		{
			context.errorMessage = 'cannot deserialize object property name. we expect ":" or "/" character after index ' + context.index + '.';
			context.errorFound = true;
			return;
		}
		var propName = context.s.substring(context.index, nextTwoDotIndex);
		context.index = nextTwoDotIndex + 1;
		readSerializedValue(context);
		if (context.errorFound)
		{
			return;
		}
		var v = context.valueRead;
		valueRead[propName] = v;
		c = context.s.charAt(context.index);
		if (c == "}")
		{
			context.index++;
			context.valueRead = valueRead;
			return;
		}
		if (c != ",")
		{
			context.errorMessage = 'cannot deserialize object value. we expect "," or "}" character at index ' + context.index + '.';
			context.errorFound = true;
			return;
		}
	}
}

function deserializeObject(s)
{
	// drop CR/LF and spaces if any was entered by user.
	s = replacestr(replacestr(replacestr(s, "\n", ''), "\r", ''), ' ', '');
	var context = { s: s, index: 0, errorFound: false, errorMessage: '', valueRead: null };
	readSerializedObject(context);
	if (context.errorFound)
	{
		alert(context.errorMessage);
		return null;
	}
	return context.valueRead;
}

function deserializeArray(s)
{
	// drop CR/LF if any was entered by user.
	s = replacestr(replacestr(s, "\n", ''), "\r", '');
	var context = { s: s, index: 0, errorFound: false, errorMessage: '', valueRead: null };
	readSerializedArray(context);
	if (context.errorFound)
	{
		alert(context.errorMessage);
		return null;
	}
	return context.valueRead;
}

function createVirtualSet(name, caption, count, sitems)
{
	var level = 0;
	var items = sitems.split('/');
	for (var i in items)
	{
		var item = getObjectById(items[i]);
		if (item == null) continue;
		item.setlink = { name: name };
		if (!('baseitem' in item) && ('required' in item) && ('level' in item.required) && (item.required.level > level))
		{
			level = item.required.level;
		}
	}
	var details = {};
//	details[name + count] = { id: name + count, required: { itemscount: count }};
	var o = {id: name, virtual: true, caption: caption, count: count, required: { level: level }, details: details };
	dressSets[name] = o;
}

function createVirtualSets()
{
	createVirtualSet('newbie', '�������� �������', 12, 'clip86/amulet90/staff1/roba17/belt40/ring123/whelmet4/gloves1/boots210/braslet26');
	createVirtualSet('green', '������ ��������', 12, 'clip87/amulet91/staff2/roba18/belt41/ring124/whelmet5/gloves2/boots211/braslet28');
	createVirtualSet('seeker', '�������� �������', 12, 'clip88/amulet92/staff3/roba19/belt42/ring125/whelmet6/gloves3/boots212/braslet29');

}

var catRunes={
earrings: {
   lv4: ['rune_0_0_1', 'rune_0_1_1', 'rune_0_2_1', 'rune_0_3_1'
], lv7: ['rune_1_0_1', 'rune_1_1_1', 'rune_1_2_1', 'rune_1_3_1'
], lv9: ['rune_2_0_1', 'rune_2_1_10', 'rune_2_2_1', 'rune_2_3_1'] },
necklaces: {
   lv4: ['rune_0_0_2', 'rune_0_1_2', 'rune_0_2_2', 'rune_0_3_2'
], lv7: ['rune_1_0_2', 'rune_1_1_2', 'rune_1_2_2', 'rune_1_3_2'
], lv9: ['rune_2_0_2', 'rune_2_1_1', 'rune_2_2_2', 'rune_2_3_2'] },
rings: {
   lv4: ['rune_0_0_3', 'rune_0_1_3', 'rune_0_2_3', 'rune_0_3_3'
], lv7: ['rune_1_0_3', 'rune_1_1_3', 'rune_1_2_3', 'rune_1_3_3'
], lv9: ['rune_2_0_3', 'rune_2_1_2', 'rune_2_2_3', 'rune_2_3_3'] },
gauntlets: {
   lv4: ['rune_0_0_4', 'rune_0_1_4', 'rune_0_2_4', 'rune_0_3_4'
], lv7: ['rune_1_0_4', 'rune_1_1_4', 'rune_1_2_4', 'rune_1_3_4'
], lv9: ['rune_2_0_4', 'rune_2_1_3', 'rune_2_2_4', 'rune_2_3_4'] },
pants: {
   lv4: ['rune_0_0_5', 'rune_0_1_5', 'rune_0_2_5', 'rune_0_3_5'
], lv7: ['rune_1_0_5', 'rune_1_1_5', 'rune_1_2_5', 'rune_1_3_5'
], lv9: ['rune_2_0_5', 'rune_2_1_4', 'rune_2_2_5', 'rune_2_3_5'] },
boots: {
   lv4: ['rune_0_0_6', 'rune_0_1_6', 'rune_0_2_6', 'rune_0_3_6'
], lv7: ['rune_1_0_6', 'rune_1_1_6', 'rune_1_2_6', 'rune_1_3_6'
], lv9: ['rune_2_0_6', 'rune_2_1_5', 'rune_2_2_6', 'rune_2_3_6'] },
helmets: {
   lv4: ['rune_0_0_7', 'rune_0_1_7', 'rune_0_2_7', 'rune_0_3_7'
], lv7: ['rune_1_0_7', 'rune_1_1_7', 'rune_1_2_7', 'rune_1_3_7'
], lv9: ['rune_2_0_7', 'rune_2_1_6', 'rune_2_2_7', 'rune_2_3_7'] },
bracelets: {
   lv4: ['rune_0_0_8', 'rune_0_1_8', 'rune_0_2_8', 'rune_0_3_8'
], lv7: ['rune_1_0_8', 'rune_1_1_8', 'rune_1_2_8', 'rune_1_3_8'
], lv9: ['rune_2_0_8', 'rune_2_1_7', 'rune_2_2_8', 'rune_2_3_8'] },
heavyarmors: {
   lv4: ['rune_0_0_9', 'rune_0_1_9', 'rune_0_2_9', 'rune_0_3_9'
], lv7: ['rune_1_0_9', 'rune_1_1_9', 'rune_1_2_9', 'rune_1_3_9'
], lv9: ['rune_2_0_9', 'rune_2_1_8', 'rune_2_2_9', 'rune_2_3_9'] },
lightarmors: {
   lv4: ['rune_0_0_9', 'rune_0_1_9', 'rune_0_2_9', 'rune_0_3_9'
], lv7: ['rune_1_0_9', 'rune_1_1_9', 'rune_1_2_9', 'rune_1_3_9'
], lv9: ['rune_2_0_9', 'rune_2_1_8', 'rune_2_2_9', 'rune_2_3_9'] },
belts: {
   lv4: ['rune_0_0_10', 'rune_0_1_10', 'rune_0_2_10', 'rune_0_3_10'
], lv7: ['rune_1_0_10', 'rune_1_1_10', 'rune_1_2_10', 'rune_1_3_10'
], lv9: ['rune_2_0_10', 'rune_2_1_9', 'rune_2_2_10', 'rune_2_3_10']}};

var superRunes=['rune_super_1', 'rune_super_2', 'rune_super_3', 'rune_super_4', 'rune_super_5', 'rune_super_6', 'rune_super_7', 'rune_super_8', 'rune_super_9', 'rune_super_10'];
