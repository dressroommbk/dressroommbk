var tricks = {
	novice_def: {name: 'novice_def', caption: '����������', description: '��������� ���� �� ��� ������� �� 3 ��. ������ �����.', school: 'novice'
	},
	novice_hit: {name: 'novice_hit', caption: '�������', description: '��������� ���� ������� �� 4 ��. ������ �����.', school: 'novice'
	},
	novice_hp: {name: 'novice_hp', caption: '������� ����', description: '�� ���������������� �� 2-5 ��.', school: 'novice',
	},
	block_absolute: {name: 'block_absolute', caption: '���������� ������', description: '�� ������ ���������� ������� �������, ��� ����������� �� ������ ��� ����� �� ��� �������� � 1.', school: 'fight',
		required: {level:7},
		resources: {block:7}
	},
	block_fullshield: {name: 'block_fullshield', caption: '������ ������', description: '��������� ���� ��� �������� ������� ��� �� ����� 1 �����������.', school: 'fight',
		required: {level:5},
		resources: {block:5}
	},
	block_activeshield: {name: 'block_activeshield', caption: '�������� ������', description: '��������� ���� ��� �������� ������� ��� ���� �������� �����������.', school: 'fight',
		required: {level:2},
		resources: {block:3}
	},
	block_addchange: {name: 'block_addchange', caption: '����� ����������', description: '�������������� ����� ����������.', school: 'fight',
		required: {level:2},
		resources: {block:1}
	},
	block_target: {name: 'block_target', caption: '��������', description: '��������� ���� �� ���������� ���� �������� �� ���.', school: 'fight',
		required: {level:8,endurance:35},
		resources: {block:2}
	},
	block_aftershock: {name: 'block_aftershock', caption: '��������', description: '�������� ���������� ������ ����, ������ �������-�������*2 �����, ����� ��� ����������� ������������ ��������� ���������� �� ���� �� ��� ����.<br>������� ��� ������������� ������� ����.', school: 'fight',
		required: {level:5},
		resources: {block:2}
	},
	block_restore: {name: 'block_restore', caption: '������ ������', description: '�� ���������������� 15%HP �� 6 �����, ���� �� ��� ������ �� 25%.<br>������� ��� ������������� ������� ����.', school: 'fight',
		required: {level:6,strength:30,endurance:30},
		resources: {block:10}
	},
	/*block_target_shield: {name: 'block_target_shield', caption: '����� ���', description: '���������� ���� � �������� ������ ���� �� ���� ���. ���� ���-�� ���������� �� ��� ����� ����� ���, �� ������� ���� �� ���������� ������ ���.', school: 'fight',
		required: {level:8,endurance:30},
		resources: {block:1}
	},*/
	block_magicshield: {name: 'block_magicshield', caption: '���������� ������', description: '��������� �������� ������� ��� �� ����� 1 �����������, ������ ��������� �� ����� ���� �����.', school: 'fight',
		required: {level:7},
		resources: {block:3}
	},
	block_revenge: {name: 'block_revenge', caption: '���������', description: '�������� ��� ���� ������� 6*(��� �������) ��. �����.', school: 'fight',
		required: {level:7},
		resources: {block:5}
	},
	block_path: {name: 'block_path', caption: '���� ����', description: '����������� ��� ��. ������ ������������ ����� �� 50 � ������� ���� ���������� ���� �� 5%. ����� ��������� ������.<br>������� ��� ������������� ������� ����.', school: 'fight',
		required: {level:7},
		resources: {block:5}
	},
	spirit_11_prot_100: {name: 'spirit_11_prot_100', caption: '���������� ������', description: '��������� ������� ���� � ��� ���� �� 3 ����.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:5}
	},
	spirit_12_prot_100: {name: 'spirit_12_prot_100', caption: '���������� �����', description: '��������� ������� ���� � ��� ���� �� 3 ����.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:5}
	},
	spirit_13_prot_100: {name: 'spirit_13_prot_100', caption: '���������� ����', description: '��������� �������� ���� � ��� ���� �� 3 ����.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:5}
	},
	spirit_14_prot_100: {name: 'spirit_14_prot_100', caption: '���������� ������', description: '��������� ������� ���� � ��� ���� �� 3 ����.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:5}
	},
	spirit_1_protfire100: {name: 'spirit_1_protfire100', caption: '���������� �����', description: '��������� ���� �� ����� ���� � ��� ���� �� 3 ����.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:5}
	},
	spirit_2_protwater100: {name: 'spirit_2_protwater100', caption: '���������� ����', description: '��������� ���� �� ����� ���� � ��� ���� �� 3 ����.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:5}
	},
	spirit_3_protair100: {name: 'spirit_3_protair100', caption: '���������� ������', description: '��������� ���� �� ����� ������� � ��� ���� �� 3 ����.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:5}
	},
	spirit_4_protearth100: {name: 'spirit_4_protearth100', caption: '���������� �����', description: '��������� ���� �� ����� ����� � ��� ���� �� 3 ����.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:5}
	},
	spirit_block25: {name: 'spirit_block25', caption: '���������� ������', description: '�� ������ ���������� ������� �������, �� ��������� ���� �������� ����������� �� ������ ��� �����.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:10}
	},
	spirit_survive: {name: 'spirit_survive', caption: '������', description: '�������� ���, ��������� ��� ��������� ���� �������. ���� ���� �� ������� �� ��������.', school: 'fight',
		required: {level:7,endurance:30},
		resources: {},
		consumes: {spiritlevel:10}
	},
	hit_strong: {name: 'hit_strong', caption: '������� ����', description: '��������� ���� ������� �� 3*(��� �������) ��. ����� ������.', school: 'fight',
		required: {level:2},
		resources: {hit:3}
	},
	hit_luck: {name: 'hit_luck', caption: '������� ����', description: '��������� ���� ������� �� 6*(��� �������) ��. ����� ������.', school: 'fight',
		required: {level:4},
		resources: {hit:5}
	},
	hit_overhit: {name: 'hit_overhit', caption: '������ ����', description: '��������� ������� ���������� 5*(�������) ��. �����.', school: 'fight',
		required: {level:4},
		resources: {hit:7},
		consumes: {spiritlevel:1}
	},
	hit_restrike: {name: 'hit_restrike', caption: '������', description: '��������� ������� ���������� ����� ����� �������.', school: 'fight',
		required: {level:8,strength:45},
		resources: {hit:9},
		consumes: {spiritlevel:1}
	},
	hit_resolve: {name: 'hit_resolve', caption: '�������� ����', description: '�������� ��������� ���������� ������� ����������, ���� ����� ��������� ��� ��� �������� � ������.', school: 'fight',
		required: {level:5},
		resources: {hit:2}
	},
	hit_shock: {name: 'hit_shock', caption: '���������', description: '���� ��������� ��������� ���������� ���������� ������ ��� ���� ����� �� ���� ���.', school: 'fight',
		required: {level:7},
		resources: {hit:3}
	},
	/*hit_target_sword: {name: 'hit_target_sword', caption: '����� ���', description: '������� ���� ������ �������� ��������� ����� ����� �����. ��������� ���� � ������� ����� ���.', school: 'fight',
		required: {level:8,strength:50},
		resources: {hit:3}
	},*/
	blood_gainattack: {name: 'blood_gainattack', caption: '�����', description: '�������� ���� ������, �� ������������ � ���������� � ��������� <img src="hit.gif" width=8 height=8> 3', school: 'fight',
		required: {level:7,strength:25,endurance:25}
	},
	hit_willpower: {name: 'hit_willpower', caption: '���� � ������', description: '�� ���������������� 5*(�������)+7 HP, ������ �������� �� 25%, ���� ���� HP ���� 33%', school: 'fight',
		required: {level:3},
		resources: {hit:5},
		consumes: {spiritlevel:1}
	},
	hit_empower: {name: 'hit_empower', caption: '��������� �����', description: '��� ����� � ��������� ������� ������� �� 5*(�������) ��. ����� ������.', school: 'fight',
		required: {level:7},
		resources: {hit:3}
	},
	krit_wildluck: {name: 'krit_wildluck', caption: '����� �����', description: '��������� ����������� ���� ������� ������������ �����������.', school: 'fight',
		required: {level:3},
		resources: {krit:3}
	},
	krit_blindluck: {name: 'krit_blindluck', caption: '������ �����', description: '��������� ���� ����� �����������.�� �� �������� <IMG width=7 height=8 src="krit.gif"> � ����� �����.', school: 'fight',
		required: {level:5},
		resources: {krit:5}
	},
	krit_crush: {name: 'krit_crush', caption: '����������� ����', description: '��� ��������� ���� ������� ������� ����.', school: 'fight',
		required: {level:7},
		resources: {krit:7}
	},
	krit_blooddrink: {name: 'krit_blooddrink', caption: '�������� �����', description: '��� ��������� ����������� ���� � ��� ����� �� ��� ����� ��� ������ ���������� �����, �� �� ����� ��� 154 �� � ���������� 10 ������. ������� ��o�� ������� ��� ����.', school: 'fight',
		required: {level:6},
		resources: {krit:7,block:3},
		consumes: {spiritlevel:2}
	},
	krit_bloodlust: {name: 'krit_bloodlust', caption: '����� �����', description: '����������� ��� ��. ������������ ����� �� 50 �� ����� ��� � ����������� ���������� ���� �� 5%. ����� ��������� ������.', school: 'fight',
		required: {level:7},
		resources: {hit:2,krit:3}
	},
	counter_winddance: {name: 'counter_winddance', caption: '����� �����', description: '�� ���������� �� ���������� ������������� � ��� �����.�� �� �������� <IMG width=8 height=8 src="counter.gif"> �� ��������� � ����� �������.', school: 'fight',
		required: {level:3},
		resources: {counter:3}
	},
	counter_bladedance: {name: 'counter_bladedance', caption: '����� ������', description: '�� ���������� �� ���������� ������������� � ��� ����� � �������� ���������.�� �� �������� <IMG width=8 height=8 src="counter.gif"> �� ��������� � ����� �������.', school: 'fight',
		required: {level:5},
		resources: {counter:5}
	},
	counter_ward: {name: 'counter_ward', caption: '������������', description: '��������� ���� �� ����� ������ ����� �� ��� ����.', school: 'fight',
		required: {level:7},
		resources: {counter:2}
	},
	counter_deathwalk: {name: 'counter_deathwalk', caption: '������� ������', description: '����������� ������������ ���� ������� �� 1*(�������). ������ �������� ���� ����������� ����. ���� ��� �� 1*(�������) ��., �� 10*(�������) � ��������� ����� �������. ������ ������ ���� ���.', school: 'fight',
		required: {level:7},
		resources: {counter:5}
	},
	parry_prediction: {name: 'parry_prediction', caption: '�����������', description: '��������� ���� ���������� ����������.�� �� �������� <img width=8 height=8 src="parry.gif"> �� ��� �����������.', school: 'fight',
		required: {level:3},
		resources: {parry:3}
	},
	parry_secondlife: {name: 'parry_secondlife', caption: '������ �������', description: '��������� ���� ���������� - ����������, �� ������ ������� ����������, ��� ���� �� ����������, �� ��������� 5 ��.�� �� �������� <img width=8 height=8 src="parry.gif"> �� ��� �����������.', school: 'fight',
		required: {level:5},
		resources: {parry:5},
		consumes: {spiritlevel:2}
	},
	parry_supreme: {name: 'parry_supreme', caption: '�������������', description: '����������� ��� ��. ������ ������������ ����� � ��. ������ ����������� �� 25 �� ����� ���. ������� ���� �� ����� �� 5%. ����� ��������� ������.', school: 'fight',
		required: {level:7},
		resources: {block:1,parry:3}
	},
	multi_hitshock: {name: 'multi_hitshock', caption: '���������� ����', description: '���� ��������� ��������� �������� ����������, ����� ��� ����������� ������������ ������ � �������� ���� ������� �� ��� ����.', school: 'fight',
		required: {level:7},
		resources: {hit:3,counter:1}
	},
	multi_agressiveshield: {name: 'multi_agressiveshield', caption: '����������� ������', description: '��������� ���� ��� �������� ���������� ������� �� ����� 1 �����������, ��������� �������� 3*(�������) ��. �����.<br>�������� �� ������� <b>��������� �������</b> � <b>������ �� ����������</b>', school: 'fight',
		required: {level:5},
		resources: {hit:2,block:5}
	},
	multi_blockchanges: {name: 'multi_blockchanges', caption: '���������� ������', description: '���������� ���� ���������� � ���������� ��������������� �� 0.', school: 'fight',
		required: {level:5},
		resources: {hit:1,block:2}
	},
	multi_cowardshift: {name: 'multi_cowardshift', caption: '�������� ����', description: '��������� ���� ���������� ��������� �� ����, ������ ���.', school: 'fight',
		required: {level:7},
		resources: {counter:5,block:2}
	},
	multi_doom: {name: 'multi_doom', caption: '������������', description: '���� ���������� �� ������ �����, ���������� ��� ������ ��� ����� ������ �� 25% �� 3 ����', school: 'fight',
		required: {level:5},
		resources: {hit:2,block:3}
	},
	multi_followme: {name: 'multi_followme', caption: '�������������', description: '����� ���������� ����������� ��. ���� �� � ����� ������ ����������, �� ��� ���, ���� �� ����������� ������ � ����.', school: 'fight',
		required: {level:5},
		resources: {hit:3,block:2}
	},
	multi_hiddendodge: {name: 'multi_hiddendodge', caption: '������� ��������', description: '�� �������������� �� ���������� ����� �� ��� � �������� ���������.', school: 'fight',
		required: {level:6},
		resources: {krit:3,block:2}
	},
	multi_hiddenpower: {name: 'multi_hiddenpower', caption: '������� ����', description: '��������� ��� ���� - �����������.', school: 'fight',
		required: {level:6},
		resources: {hit:3,counter:4}
	},
	multi_resolvetactic: {name: 'multi_resolvetactic', caption: '��������� �������', description: '�������� ��� ������ �� ���������� ��� ������� �������.', school: 'fight',
		required: {level:5},
		resources: {hit:1,block:2}
	},
	multi_skiparmor: {name: 'multi_skiparmor', caption: '������ ����', description: '��������� ��� ���� ���������� ����� ���������� � ������� ������������� ����� �� 250��., �� �� ���� 0.', school: 'fight',
		required: {level:5},
		resources: {hit:5,counter:1,parry:2}
	},
	multi_speedup: {name: 'multi_speedup', caption: '������ �� ����������', description: '��� ������� �������, �� �������� ��� �������� ������ �� ����������.', school: 'fight',
		required: {level:7},
		resources: {hit:3,counter:3}
	},
	multi_rollback: {name: 'multi_rollback', caption: '��������', description: '�������� ��������� ���������� ����������� ��� �������. �������� 3 ���� �� ���.', school: 'fight',
		required: {level:7,strength:25,endurance:25},
		resources: {hit:2,block:2}
	},
	hp_circleshield: {name: 'hp_circleshield', caption: '�������� ������', description: '���������� ����, ��������� ����� �������, �������� �� 1 �� ����� ���.', school: 'fight',
		required: {level:4,endurance:10},
		resources: {hp:10}
	},
	hp_natisk: {name: 'hp_natisk', caption: '������', description: '���������� ����, ��������� ����� ��������, �������� �� 1 �� ����� ���.', school: 'fight',
		required: {level:4,endurance:10},
		resources: {hp:10}
	},
	hp_cleance: {name: 'hp_cleance', caption: '���������� ������', description: '������� ���� ���������� ������ �� �����, ������� ��� ����������', school: 'fight',
		required: {level:7},
		resources: {hp:1}
	},
	hp_defence: {name: 'hp_defence', caption: '���������', description: '����������� ���� ������ �� ����� �� ����� ���. ����� ��������� ������.', school: 'fight',
		required: {level:4},
		resources: {hp:5}
	},
	hp_enrage: {name: 'hp_enrage', caption: '������', description: '����������� ��� ���� �� ����� ���. ����� ��������� ������.', school: 'fight',
		required: {level:4},
		resources: {hp:5}
	},
	hp_laststrike: {name: 'hp_laststrike', caption: '��������� ����', description: '����� ���� ���� ���� ����������� ���� �� ���� ����. ������ ����� ���������� ����, �� ���������.', school: 'fight',
		required: {level:4},
		resources: {hp:3},
		consumes: {spiritlevel:'100%'}
	},
	hp_regen: {name: 'hp_regen', caption: '������� ���', description: '�� ���������������� 2*��� ������� �P. ���� ���� �� ��������.', school: 'fight',
		required: {level:2},
		resources: {hp:5}
	},
	hp_travma: {name: 'hp_travma', caption: '����������', description: '�� ��������� ���, ��������� ����� �������� ������ ��� ���������. �� �������� �� ��������.', school: 'fight',
		required: {level:5},
		resources: {hp:10}
	},
	/*hp_trade: {name: 'hp_trade', caption: '��������� �����', description: '���� �������� <img width=8 height=8 src="hp.gif">1', school: 'fight',
		required: {level:7},
		resources: {hp:3}
	},*/
	wis_air_chaincure05: {name: 'wis_air_chaincure05', caption: '���� ��������� [5]', description: '��������������� 1-3 ����� ������� ����� ������ �������', iname: 'wis_air_chaincure08', school: 'air',
		required: {level:5,intellect:20,airmagicskill:5},
		resources: {hp:1},
		consumes: {mana:46},
		healing: {mincount:1,maxcount:3,minhitpoints:1,maxhitpoints:95}
	},
	wis_air_chaincure06: {name: 'wis_air_chaincure06', caption: '���� ��������� [6]', description: '��������������� 1-3 ����� ������� ����� ������ �������', iname: 'wis_air_chaincure08', school: 'air',
		required: {level:6,intellect:30,airmagicskill:6},
		resources: {hp:1},
		consumes: {mana:69},
		healing: {mincount:1,maxcount:3,minhitpoints:1,maxhitpoints:115}
	},
	wis_air_chaincure07: {name: 'wis_air_chaincure07', caption: '���� ��������� [7]', description: '��������������� 1-3 ����� ������� ����� ������ �������', iname: 'wis_air_chaincure08', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		resources: {hp:1},
		consumes: {mana:104},
		healing: {mincount:1,maxcount:3,minhitpoints:1,maxhitpoints:138}
	},
	wis_air_chaincure08: {name: 'wis_air_chaincure08', caption: '���� ��������� [8]', description: '��������������� 1-3 ����� ������� ����� ������ �������', school: 'air',
		required: {level:8,intellect:50,airmagicskill:8},
		resources: {hp:1},
		consumes: {mana:108},
		healing: {mincount:1,maxcount:3,minhitpoints:1,maxhitpoints:165}
	},
	wis_air_chaincure09: {name: 'wis_air_chaincure09', caption: '���� ��������� [9]', description: '��������������� 1-3 ����� ������� ����� ������ �������', iname: 'wis_air_chaincure08', school: 'air',
		required: {level:9,intellect:60,airmagicskill:9},
		resources: {hp:1},
		consumes: {mana:126},
		healing: {mincount:1,maxcount:3,minhitpoints:1,maxhitpoints:198}
	},
	wis_air_chaincure10: {name: 'wis_air_chaincure10', caption: '���� ��������� [10]', description: '��������������� 1-3 ����� ������� ����� ������ �������', iname: 'wis_air_chaincure08', school: 'air',
		required: {level:10,intellect:75,airmagicskill:10},
		resources: {hp:1},
		consumes: {mana:152},
		healing: {mincount:1,maxcount:3,minhitpoints:1,maxhitpoints:238}
	},
	wis_air_chaincure11: {name: 'wis_air_chaincure11', caption: '���� ��������� [11]', description: '��������������� 1-3 ����� ������� ����� ������ �������', iname: 'wis_air_chaincure08', school: 'air',
		required: {level:11,intellect:100,airmagicskill:11},
		resources: {hp:1},
		consumes: {mana:215},
		healing: {mincount:1,maxcount:3,minhitpoints:1,maxhitpoints:286}
	},
	wis_air_chainlight06: {name: 'wis_air_chainlight06', caption: '���� ������ [6]', description: '������� 2-5 ����� ���� ��������������', iname: 'wis_air_chainlight08', school: 'air',
		required: {level:6,intellect:30,airmagicskill:6},
		consumes: {mana:71},
		attack: {mincount:2,maxcount:5,mindamage:1,maxdamage:35}
	},
	wis_air_chainlight07: {name: 'wis_air_chainlight07', caption: '���� ������ [7]', description: '������� 2-5 ����� ���� ��������������', iname: 'wis_air_chainlight08', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		consumes: {mana:107},
		attack: {mincount:2,maxcount:5,mindamage:1,maxdamage:42}
	},
	wis_air_chainlight08: {name: 'wis_air_chainlight08', caption: '���� ������ [8]', description: '������� 2-5 ����� ���� ��������������', school: 'air',
		required: {level:8,intellect:50,airmagicskill:8},
		consumes: {mana:128},
		attack: {mincount:2,maxcount:5,mindamage:1,maxdamage:51}
	},
	wis_air_chainlight09: {name: 'wis_air_chainlight09', caption: '���� ������ [9]', description: '������� 2-5 ����� ���� ��������������', iname: 'wis_air_chainlight08', school: 'air',
		required: {level:9,intellect:60,airmagicskill:9},
		consumes: {mana:154},
		attack: {mincount:2,maxcount:5,mindamage:1,maxdamage:61}
	},
	wis_air_chainlight10: {name: 'wis_air_chainlight10', caption: '���� ������ [10]', description: '������� 2-5 ����� ���� ��������������', iname: 'wis_air_chainlight08', school: 'air',
		required: {level:10,intellect:75,airmagicskill:10},
		consumes: {mana:185},
		attack: {mincount:2,maxcount:5,mindamage:1,maxdamage:73}
	},
	wis_air_chainlight11: {name: 'wis_air_chainlight11', caption: '���� ������ [11]', description: '������� 2-5 ����� ���� ��������������', iname: 'wis_air_chainlight08', school: 'air',
		required: {level:11,intellect:100,airmagicskill:11},
		consumes: {mana:222},
		attack: {mincount:2,maxcount:5,mindamage:1,maxdamage:88}
	},
	wis_air_shaft04: {name: 'wis_air_shaft04', caption: '������ [4]', description: '������� ���� ���� ��������������', iname: 'wis_air_shaft08', school: 'air',
		required: {level:4,intellect:15,airmagicskill:4},
		consumes: {mana:15},
		attack: {mindamage:1,maxdamage:42}
	},
	wis_air_shaft05: {name: 'wis_air_shaft05', caption: '������ [5]', description: '������� ���� ���� ��������������', iname: 'wis_air_shaft08', school: 'air',
		required: {level:5,intellect:20,airmagicskill:5},
		consumes: {mana:23},
		attack: {mindamage:1,maxdamage:50}
	},
	wis_air_shaft06: {name: 'wis_air_shaft06', caption: '������ [6]', description: '������� ���� ���� ��������������', iname: 'wis_air_shaft08', school: 'air',
		required: {level:6,intellect:30,airmagicskill:6},
		consumes: {mana:34},
		attack: {mindamage:1,maxdamage:60}
	},
	wis_air_shaft07: {name: 'wis_air_shaft07', caption: '������ [7]', description: '������� ���� ���� ��������������', iname: 'wis_air_shaft08', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		consumes: {mana:52},
		attack: {mindamage:1,maxdamage:73}
	},
	wis_air_shaft08: {name: 'wis_air_shaft08', caption: '������ [8]', description: '������� ���� ���� ��������������', school: 'air',
		required: {level:8,intellect:50,airmagicskill:8},
		consumes: {mana:62},
		attack: {mindamage:1,maxdamage:87}
	},
	wis_air_shaft09: {name: 'wis_air_shaft09', caption: '������ [9]', description: '������� ���� ���� ��������������', iname: 'wis_air_shaft08', school: 'air',
		required: {level:9,intellect:60,airmagicskill:9},
		consumes: {mana:74},
		attack: {mindamage:1,maxdamage:105}
	},
	wis_air_shaft10: {name: 'wis_air_shaft10', caption: '������ [10]', description: '������� ���� ���� ��������������', iname: 'wis_air_shaft08', school: 'air',
		required: {level:10,intellect:75,airmagicskill:10},
		consumes: {mana:89},
		attack: {mindamage:1,maxdamage:126}
	},
	wis_air_shaft11: {name: 'wis_air_shaft11', caption: '������ [11]', description: '������� ���� ���� ��������������', iname: 'wis_air_shaft08', school: 'air',
		required: {level:11,intellect:100,airmagicskill:11},
		consumes: {mana:107},
		attack: {mindamage:1,maxdamage:151}
	},
	wis_air_sparks08: {name: 'wis_air_sparks08', caption: '����� [8]', description: '������� 1-7 ����� ���� ��������������', school: 'air',
		required: {level:8,intellect:50,airmagicskill:8},
		consumes: {mana:117},
		attack: {mincount:1,maxcount:7,mindamage:1,maxdamage:41}
	},
	wis_air_sparks09: {name: 'wis_air_sparks09', caption: '����� [9]', description: '������� 1-7 ����� ���� ��������������', iname: 'wis_air_sparks08', school: 'air',
		required: {level:9,intellect:60,airmagicskill:9},
		consumes: {mana:140},
		attack: {mincount:1,maxcount:7,mindamage:1,maxdamage:50}
	},
	wis_air_sparks10: {name: 'wis_air_sparks10', caption: '����� [10]', description: '������� 1-7 ����� ���� ��������������', iname: 'wis_air_sparks08', school: 'air',
		required: {level:10,intellect:75,airmagicskill:10},
		consumes: {mana:142},
		attack: {mincount:1,maxcount:7,mindamage:1,maxdamage:60}
	},
	wis_air_sparks11: {name: 'wis_air_sparks11', caption: '����� [11]', description: '������� 1-7 ����� ���� ��������������', iname: 'wis_air_sparks08', school: 'air',
		required: {level:11,intellect:100,airmagicskill:11},
		consumes: {mana:202},
		attack: {mincount:1,maxcount:7,mindamage:1,maxdamage:72}
	},
	wis_air_mark: {name: 'wis_air_mark', caption: '���� �������', description: '��������� ���������������� ����������� ����� �������. ����� ��������� �� ���� ���� �� 5 ���.', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		resources: {},
		consumes: {mana:20,spiritlevel:0.5}
	},
	wis_air_sign: {name: 'wis_air_sign', caption: '���� �������', description: '��� �������� 10 ���� ������ ���. ��������� ���� ���������� ������� �� 3%', school: 'air',
		required: {level:4,intellect:25,airmagicskill:2},
		resources: {},
		consumes: {mana:10,spiritlevel:1}
	},
	wis_air_shield07: {name: 'wis_air_shield07', caption: '�������� ����� [7]', description: '��� ����� �� ��� � ��������� ������� ����� �������� � ���������� �������� (� ��� ����� � � ���).<br>����� �� ��������� �������� ����.', iname: 'wis_air_shield08', school: 'air',
		required: {level:7,intellect:20,airmagicskill:7},
		resources: {hp:1},
		consumes: {mana:80}
	},
	wis_air_shield08: {name: 'wis_air_shield08', caption: '�������� ����� [8]', description: '��������� ����� �� ��� ����� �������� � ���������� ���������� ��� ��������.<br>����� �� ��������� �������� ����.', school: 'air',
		required: {level:8,intellect:40,airmagicskill:8},
		resources: {hp:1},
		consumes: {mana:160}
	},
	wis_air_shield09: {name: 'wis_air_shield09', caption: '�������� ����� [9]', description: '��������� ����� �� ��� ����� �������� � ���������� ����������.<br>����� �� ��������� �������� ����.', iname: 'wis_air_shield08', school: 'air',
		required: {level:9,intellect:60,airmagicskill:9},
		resources: {hp:1},
		consumes: {mana:240}
	},
	wis_air_shield10: {name: 'wis_air_shield10', caption: '�������� ����� [10]', description: '��������� ����� �� ��� ����� �������� ������� � ����������.<br>����� �� ��������� �������� ����.', iname: 'wis_air_shield08', school: 'air',
		required: {level:10,intellect:80,airmagicskill:10},
		resources: {hp:1},
		consumes: {mana:240}
	},
	wis_earth_gravity07: {name: 'wis_earth_gravity07', caption: '���������� [7]', description: '������� ���� 10% ����� ������ ����� �� �� �������� ������ �����. ���������� �� ����� ������� ����� 170 ��. �����. �����.', iname: 'wis_earth_gravity08', school: 'earth',
		required: {level:7,intellect:40,earthmagicskill:7},
		consumes: {mana:65}
	},
	wis_earth_gravity08: {name: 'wis_earth_gravity08', caption: '���������� [8]', description: '������� ���� 10% ����� �� � �������� ������ �����. ���������� �� ����� ������� ����� 204 ��. �����.', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		consumes: {mana:78}
	},
	wis_earth_gravity09: {name: 'wis_earth_gravity09', caption: '���������� [9]', description: '������� ���� 10% ����� �� � �������� ������ �����. ���������� �� ����� ������� ����� 244 ��. �����.', iname: 'wis_earth_gravity08', school: 'earth',
		required: {level:9,intellect:60,earthmagicskill:9},
		consumes: {mana:93}
	},
	wis_earth_gravity10: {name: 'wis_earth_gravity10', caption: '���������� [10]', description: '������� ���� 10% ����� �� � �������� ������ �����. ���������� �� ����� ������� ����� 293 ��. �����.', iname: 'wis_earth_gravity08', school: 'earth',
		required: {level:10,intellect:75,earthmagicskill:10},
		consumes: {mana:112}
	},
	wis_earth_gravity11: {name: 'wis_earth_gravity11', caption: '���������� [11]', description: '������� ���� 10% ����� �� � �������� ������ �����. ���������� �� ����� ������� ����� 352 ��. �����.', iname: 'wis_earth_gravity08', school: 'earth',
		required: {level:11,intellect:100,earthmagicskill:11},
		consumes: {mana:134}
	},
	wis_earth_heal05: {name: 'wis_earth_heal05', caption: '��� ������� [5]', description: '��������������� 5 ����� ������� ����� ������ �����', iname: 'wis_earth_heal08', school: 'earth',
		required: {level:5,intellect:20,earthmagicskill:5},
		resources: {hp:1},
		consumes: {mana:23},
		healing: {count:5,hitpoints:11,selfhitpoints:23}
	},
	wis_earth_heal06: {name: 'wis_earth_heal06', caption: '��� ������� [6]', description: '��������������� 5 ����� ������� ����� ������ �����', iname: 'wis_earth_heal08', school: 'earth',
		required: {level:6,intellect:30,earthmagicskill:6},
		resources: {hp:1},
		consumes: {mana:34},
		healing: {count:5,hitpoints:13,selfhitpoints:27}
	},
	wis_earth_heal07: {name: 'wis_earth_heal07', caption: '��� ������� [7]', description: '��������������� 5 ����� ������� ����� ������ �����', iname: 'wis_earth_heal08', school: 'earth',
		required: {level:7,intellect:40,earthmagicskill:7},
		resources: {hp:1},
		consumes: {mana:52},
		healing: {count:5,hitpoints:16,selfhitpoints:33}
	},
	wis_earth_heal08: {name: 'wis_earth_heal08', caption: '��� ������� [8]', description: '��������������� 5 ����� ������� ����� ������ �����', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {hp:1},
		consumes: {mana:78},
		healing: {count:5,hitpoints:19,selfhitpoints:39}
	},
	wis_earth_heal09: {name: 'wis_earth_heal09', caption: '��� ������� [9]', description: '��������������� 5 ����� ������� ����� ������ �����', iname: 'wis_earth_heal08', school: 'earth',
		required: {level:9,intellect:60,earthmagicskill:9},
		resources: {hp:1},
		consumes: {mana:93},
		healing: {count:5,hitpoints:23,selfhitpoints:47}
	},
	wis_earth_heal10: {name: 'wis_earth_heal10', caption: '��� ������� [10]', description: '��������������� 5 ����� ������� ����� ������ �����', iname: 'wis_earth_heal08', school: 'earth',
		required: {level:10,intellect:75,earthmagicskill:10},
		resources: {hp:1},
		consumes: {mana:112},
		healing: {count:5,hitpoints:28,selfhitpoints:57}
	},
	wis_earth_heal11: {name: 'wis_earth_heal11', caption: '��� ������� [11]', description: '��������������� 5 ����� ������� ����� ������ �����', iname: 'wis_earth_heal08', school: 'earth',
		required: {level:11,intellect:100,earthmagicskill:11},
		resources: {hp:1},
		consumes: {mana:134},
		healing: {count:5,hitpoints:34,selfhitpoints:68}
	},
	wis_earth_meteor06: {name: 'wis_earth_meteor06', caption: '�������� [6]', description: '������� ���� ���� ����� ��� ����', iname: 'wis_earth_meteor08', school: 'earth',
		required: {level:6,intellect:30,earthmagicskill:6},
		consumes: {mana:17},
		attack: {mindamage:46,maxdamage:49}
	},
	wis_earth_meteor07: {name: 'wis_earth_meteor07', caption: '�������� [7]', description: '������� ���� ���� ����� ��� ����', iname: 'wis_earth_meteor08', school: 'earth',
		required: {level:7,intellect:40,earthmagicskill:7},
		consumes: {mana:26},
		attack: {mindamage:55,maxdamage:59}
	},
	wis_earth_meteor08: {name: 'wis_earth_meteor08', caption: '�������� [8]', description: '������� ���� ���� ����� ��� ����', iname: 'wis_earth_meteor08', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		consumes: {mana:31},
		attack: {mindamage:66,maxdamage:71}
	},
	wis_earth_meteor09: {name: 'wis_earth_meteor09', caption: '�������� [9]', description: '������� ���� ���� ����� ��� ����', iname: 'wis_earth_meteor08', school: 'earth',
		required: {level:9,intellect:60,earthmagicskill:9},
		consumes: {mana:37},
		attack: {mindamage:79,maxdamage:86}
	},
	wis_earth_meteor10: {name: 'wis_earth_meteor10', caption: '�������� [10]', description: '������� ���� ���� ����� ��� ����', iname: 'wis_earth_meteor08', school: 'earth',
		required: {level:10,intellect:75,earthmagicskill:10},
		consumes: {mana:44},
		attack: {mindamage:95,maxdamage:103}
	},
	wis_earth_meteor11: {name: 'wis_earth_meteor11', caption: '�������� [11]', description: '������� ���� ���� ����� ��� ����', iname: 'wis_earth_meteor08', school: 'earth',
		required: {level:11,intellect:100,earthmagicskill:11},
		consumes: {mana:53},
		attack: {mindamage:114,maxdamage:124}
	},
	wis_earth_rain05: {name: 'wis_earth_rain05', caption: '�������� ����� [5]', description: '������� 8 ����� ���� ������ �����', iname: 'wis_earth_rain08', school: 'earth',
		required: {level:5,intellect:20,earthmagicskill:5},
		consumes: {mana:52},
		attack: {count:8,damage:7}
	},
	wis_earth_rain06: {name: 'wis_earth_rain06', caption: '�������� ����� [6]', description: '������� 8 ����� ���� ������ �����', iname: 'wis_earth_rain08', school: 'earth',
		required: {level:6,intellect:30,earthmagicskill:6},
		consumes: {mana:78},
		attack: {count:8,damage:9}
	},
	wis_earth_rain07: {name: 'wis_earth_rain07', caption: '�������� ����� [7]', description: '������� 8 ����� ���� ������ �����', iname: 'wis_earth_rain08', school: 'earth',
		required: {level:7,intellect:40,earthmagicskill:7},
		consumes: {mana:99},
		attack: {count:8,damage:11}
	},
	wis_earth_rain08: {name: 'wis_earth_rain08', caption: '�������� ����� [8]', description: '������� 8 ����� ���� ������ �����', iname: 'wis_earth_rain08', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		consumes: {mana:140},
		attack: {count:8,damage:13}
	},
	wis_earth_rain09: {name: 'wis_earth_rain09', caption: '�������� ����� [9]', description: '������� 8 ����� ���� ������ �����', iname: 'wis_earth_rain08', school: 'earth',
		required: {level:9,intellect:60,earthmagicskill:9},
		consumes: {mana:168},
		attack: {count:8,damage:16}
	},
	wis_earth_rain10: {name: 'wis_earth_rain10', caption: '�������� ����� [10]', description: '������� 8 ����� ���� ������ �����', iname: 'wis_earth_rain08', school: 'earth',
		required: {level:10,intellect:75,earthmagicskill:10},
		consumes: {mana:202},
		attack: {count:8,damage:19}
	},
	wis_earth_rain11: {name: 'wis_earth_rain11', caption: '�������� ����� [11]', description: '������� 8 ����� ���� ������ �����', iname: 'wis_earth_rain08', school: 'earth',
		required: {level:11,intellect:100,earthmagicskill:11},
		consumes: {mana:242},
		attack: {count:8,damage:23}
	},
	wis_earth_mark: {name: 'wis_earth_mark', caption: '���� �����', description: '��������� ���������������� ����������� ����� �����. ����� ��������� �� ���� ���� �� 5 ���.', school: 'earth',
		required: {level:7,intellect:40,earthmagicskill:7},
		resources: {},
		consumes: {mana:20,spiritlevel:0.5}
	},
	wis_earth_sign: {name: 'wis_earth_sign', caption: '���� �����', description: '���� �������� +0 �����. ���������� ������� 10 ���� ������ ���.', school: 'earth',
		required: {level:4,intellect:25,earthmagicskill:1},
		resources: {},
		consumes: {mana:100,spiritlevel:1}
	},
	wis_earth_strike07: {name: 'wis_earth_strike07', caption: '�������� ���� [7]', description: '������� ����� ���� �������� ����.', iname: 'wis_earth_strike', school: 'earth',
		required: {level:7,intellect:40,earthmagicskill:7},
		resources: {},
		consumes: {mana:75},
		attack: {damage:187}
	},
	wis_earth_strike08: {name: 'wis_earth_strike08', caption: '�������� ���� [8]', description: '������� ����� ���� �������� ����.', iname: 'wis_earth_strike', school: 'earth',
		required: {level:7,intellect:60,earthmagicskill:7},
		resources: {},
		consumes: {mana:90},
		attack: {damage:224}
	},
	wis_earth_cleance: {name: 'wis_earth_cleance', caption: '��������� �����', description: '������� ���� ���������� ������ �� ����� ��� ������� � ��������������� 3% ����.', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {},
		consumes: {mana:50}
	},
	wis_earth_dmg04: {name: 'wis_earth_dmg04', caption: '�������� [4]', description: '������� ���� ���� ������ �����.', iname: 'wis_earth_dmg08', school: 'earth',
		required: {level:4,intellect:15,earthmagicskill:4},
		resources: {},
		consumes: {mana:11},
		attack: {mindamage:17,maxdamage:19}
	},
	wis_earth_dmg05: {name: 'wis_earth_dmg05', caption: '�������� [5]', description: '������� ���� ���� ������ �����.', iname: 'wis_earth_dmg08', school: 'earth',
		required: {level:5,intellect:20,earthmagicskill:5},
		resources: {},
		consumes: {mana:17},
		attack: {mindamage:20,maxdamage:23}
	},
	wis_earth_dmg06: {name: 'wis_earth_dmg06', caption: '�������� [6]', description: '������� ���� ���� ������ �����.', iname: 'wis_earth_dmg08', school: 'earth',
		required: {level:6,intellect:30,earthmagicskill:6},
		resources: {},
		consumes: {mana:26},
		attack: {mindamage:24,maxdamage:28}
	},
	wis_earth_dmg07: {name: 'wis_earth_dmg07', caption: '�������� [7]', description: '������� ���� ���� ������ �����.', iname: 'wis_earth_dmg08', school: 'earth',
		required: {level:7,intellect:40,earthmagicskill:7},
		resources: {},
		consumes: {mana:39},
		attack: {mindamage:29,maxdamage:34}
	},
	wis_earth_dmg08: {name: 'wis_earth_dmg08', caption: '�������� [8]', description: '������� ���� ���� ������ �����.', iname: 'wis_earth_dmg08', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {},
		consumes: {mana:46},
		attack: {mindamage:35,maxdamage:41}
	},
	wis_earth_dmg09: {name: 'wis_earth_dmg09', caption: '�������� [9]', description: '������� ���� ���� ������ �����.', iname: 'wis_earth_dmg08', school: 'earth',
		required: {level:9,intellect:60,earthmagicskill:9},
		resources: {},
		consumes: {mana:56},
		attack: {mindamage:43,maxdamage:49}
	},
	wis_earth_dmg10: {name: 'wis_earth_dmg10', caption: '�������� [10]', description: '������� ���� ���� ������ �����.', iname: 'wis_earth_dmg08', school: 'earth',
		required: {level:10,intellect:75,earthmagicskill:10},
		resources: {},
		consumes: {mana:67},
		attack: {mindamage:51,maxdamage:59}
	},
	wis_earth_dmg11: {name: 'wis_earth_dmg11', caption: '�������� [11]', description: '������� ���� ���� ������ �����.', iname: 'wis_earth_dmg08', school: 'earth',
		required: {level:11,intellect:100,earthmagicskill:11},
		resources: {},
		consumes: {mana:80},
		attack: {mindamage:62,maxdamage:71}
	},
	wis_earth_flower8: {name: 'wis_earth_flower8', caption: '�������� ������ [8]', description: '���� �������� ���� ������ ����� � �������� ����������� ������������ ������ 1 ���.<br>��� 3 ���� �������� ����� ����� ������ �����', iname: 'wis_earth_flower', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {hp:1},
		consumes: {mana:128},
		attack: {count:3,damage:44}
	},
	wis_earth_flower9: {name: 'wis_earth_flower9', caption: '�������� ������ [9]', description: '���� �������� ���� ������ ����� � �������� ����������� ������������ ������ 1 ���. <br>��� 3 ���� �������� ����� ����� ������ �����', iname: 'wis_earth_flower', school: 'earth',
		required: {level:9,intellect:60,earthmagicskill:9},
		resources: {hp:1},
		consumes: {mana:154},
		attack: {count:3,damage:52}
	},
	wis_earth_flower10: {name: 'wis_earth_flower10', caption: '�������� ������ [10]', description: '���� �������� ���� ������ ����� � �������� ����������� ������������ ������ 1 ���.<br> ��� 3 ���� �������� ����� ����� ������ �����', iname: 'wis_earth_flower', school: 'earth',
		required: {level:10,intellect:75,earthmagicskill:10},
		resources: {hp:1},
		consumes: {mana:185},
		attack: {count:3,damage:63}
	},
	wis_earth_flower11: {name: 'wis_earth_flower11', caption: '�������� ������ [11]', description: '���� �������� ���� ������ ����� � �������� ����������� ������������ ������ 1 ���.<br> ��� 3 ���� �������� ����� ����� ������ �����', iname: 'wis_earth_flower', school: 'earth',
		required: {level:11,intellect:100,earthmagicskill:11},
		resources: {hp:1},
		consumes: {mana:222},
		attack: {count:3,damage:76}
	},
	wis_earth_link_minus: {name: 'wis_earth_link_minus', caption: '����������: �����', description: '���� ������ 79 ���� �� 10 �����. ������ ���� ���������� �������� ���� �����. <br>��� � ��������� ������������ ���� ���� ����������. ������� 1 ���� ������ ���. <br>����������� �� 5 ���.����� �� ��������� �������� ����.', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {},
		consumes: {mana:16}
	},
	wis_earth_link_plus: {name: 'wis_earth_link_plus', caption: '����������: ����', description: '�������� ���� �� 39HP �� 10 ����� �� ���� ����� ����. ������ ���� ���������� �������� ���� �����. <br>��� � ��������� ������������ ���� ���� ����������. ������� 1 ���� ������ ���. <br>����������� �� 5 ���.����� �� ��������� �������� ����.', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {},
		consumes: {mana:16}
	},
	wis_earth_link_zero: {name: 'wis_earth_link_zero', caption: '����������: ����', description: '����������� ���� ���� �� ���� �� 3% � ��������� �������� ������� �� 7%. ������ ���� ���������� �������� ���� �����. <br>��� � ��������� ������������ ���� ���� ����������. ������� 1 ���� ������ ���. <br>����������� �� 5 ���.����� �� ��������� �������� ����.', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {},
		consumes: {mana:16}
	},
	wis_earth_sacrifice: {name: 'wis_earth_sacrifice', caption: '������ �����', description: '�� ���������������� 5%HP � 5%����.', school: 'earth',
		required: {level:7,intellect:40,earthmagicskill:7},
		resources: {hp:5},
		consumes: {mana:5}
	},
	wis_earth_shield: {name: 'wis_earth_shield', caption: '�������� ���', description: '�� ��������� �� 95% ������ ����� � ���� ������.<br>����� �� ��������� �������� ����.', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {},
		consumes: {mana:150}
	},
	wis_earth_shield2: {name: 'wis_earth_shield2', caption: '�������� ���', description: '�� ��������� �� 30% ������ ����� �� ����� � ������� 5 �����.<br>����� �� ��������� �������� ����.', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {},
		consumes: {mana:150}
	},
	wis_earth_summon: {name: 'wis_earth_summon', caption: '�������� ��������� ������', description: '��������� � ��� ��������� ������ ��� ������ ����. ����� ��������� � 10 ���� ������ ���.', school: 'earth',
		required: {level:8,earthmagicskill:12},
		resources: {},
		consumes: {mana:200}
	},
	wis_fire_burst08: {name: 'wis_fire_burst08', caption: '������� [8]', description: '��������� ������� ���� ���� �����. ���� �������� �� 5% �� ������ ���� ���� �������������� �� ������.', school: 'fire',
		required: {level:8,intellect:50,firemagicskill:8},
		consumes: {mana:70},
		attack: {damage:33}
	},
	wis_fire_burst09: {name: 'wis_fire_burst09', caption: '������� [9]', description: '��������� ������� ���� ���� �����. ���� �������� �� 5% �� ������ ���� ���� �������������� �� ������.', iname: 'wis_fire_burst08', school: 'fire',
		required: {level:9,intellect:60,firemagicskill:9},
		consumes: {mana:84},
		attack: {damage:39}
	},
	wis_fire_burst10: {name: 'wis_fire_burst10', caption: '������� [10]', description: '��������� ������� ���� ���� �����. ���� �������� �� 5% �� ������ ���� ���� �������������� �� ������.', iname: 'wis_fire_burst08', school: 'fire',
		required: {level:10,intellect:75,firemagicskill:10},
		consumes: {mana:101},
		attack: {damage:47}
	},
	wis_fire_burst11: {name: 'wis_fire_burst11', caption: '������� [11]', description: '��������� ������� ���� ���� �����. ���� �������� �� 5% �� ������ ���� ���� �������������� �� ������.', iname: 'wis_fire_burst08', school: 'fire',
		required: {level:11,intellect:100,firemagicskill:11},
		consumes: {mana:121},
		attack: {damage:57}
	},
	wis_fire_heal05: {name: 'wis_fire_heal05', caption: '����� ����� [5]', description: '�������� ���� ������ ����. ������ ���� ��� ���������� �� ����.', iname: 'wis_fire_heal08', school: 'fire',
		required: {level:5,intellect:20,firemagicskill:5},
		resources: {hp:1},
		consumes: {mana:40},
		healing: {minhitpoints:37,maxhitpoints:42}
	},
	wis_fire_heal06: {name: 'wis_fire_heal06', caption: '����� ����� [6]', description: '�������� ���� ������ ����. ������ ���� ��� ���������� �� ����.', iname: 'wis_fire_heal08', school: 'fire',
		required: {level:6,intellect:30,firemagicskill:6},
		resources: {hp:1},
		consumes: {mana:60},
		healing: {minhitpoints:44,maxhitpoints:51}
	},
	wis_fire_heal07: {name: 'wis_fire_heal07', caption: '����� ����� [7]', description: '�������� ���� ������ ����. ������ ���� ��� ���������� �� ����.', iname: 'wis_fire_heal08', school: 'fire',
		required: {level:7,intellect:40,firemagicskill:7},
		resources: {hp:1},
		consumes: {mana:91},
		healing: {minhitpoints:53,maxhitpoints:61}
	},
	wis_fire_heal08: {name: 'wis_fire_heal08', caption: '����� ����� [8]', description: '�������� ���� ������ ����. ������ ���� ��� ���������� �� ����.', iname: 'wis_fire_heal08', school: 'fire',
		required: {level:8,intellect:50,firemagicskill:8},
		resources: {hp:1},
		consumes: {mana:109},
		healing: {minhitpoints:64,maxhitpoints:73}
	},
	wis_fire_heal09: {name: 'wis_fire_heal09', caption: '����� ����� [9]', description: '�������� ���� ������ ����. ������ ���� ��� ���������� �� ����.', iname: 'wis_fire_heal08', school: 'fire',
		required: {level:9,intellect:60,firemagicskill:9},
		resources: {hp:1},
		consumes: {mana:131},
		healing: {minhitpoints:77,maxhitpoints:88}
	},
	wis_fire_heal10: {name: 'wis_fire_heal10', caption: '����� ����� [10]', description: '�������� ���� ������ ����. ������ ���� ��� ���������� �� ����.', iname: 'wis_fire_heal08', school: 'fire',
		required: {level:10,intellect:75,firemagicskill:10},
		resources: {hp:1},
		consumes: {mana:157},
		healing: {minhitpoints:92,maxhitpoints:105}
	},
	wis_fire_heal11: {name: 'wis_fire_heal11', caption: '����� ����� [11]', description: '�������� ���� ������ ����. ������ ���� ��� ���������� �� ����.', iname: 'wis_fire_heal08', school: 'fire',
		required: {level:11,intellect:100,firemagicskill:11},
		resources: {hp:1},
		consumes: {mana:188},
		healing: {minhitpoints:111,maxhitpoints:127}
	},
	wis_fire_flamming06: {name: 'wis_fire_flamming06', caption: '���������� ����� [6]', description: '������� ���� ���� ����� �� ���� �����', iname: 'wis_fire_flamming08', school: 'fire',
		required: {level:6,intellect:30,firemagicskill:6},
		consumes: {mana:38},
		attack: {damage:40,nextturns:5}
	},
	wis_fire_flamming07: {name: 'wis_fire_flamming07', caption: '���������� ����� [7]', description: '������� ���� ���� ����� �� ���� �����', iname: 'wis_fire_flamming08', school: 'fire',
		required: {level:7,intellect:40,firemagicskill:7},
		consumes: {mana:57},
		attack: {damage:48,nextturns:5}
	},
	wis_fire_flamming08: {name: 'wis_fire_flamming08', caption: '���������� ����� [8]', description: '������� ���� ���� ����� �� ���� �����', iname: 'wis_fire_flamming08', school: 'fire',
		required: {level:8,intellect:50,firemagicskill:8},
		consumes: {mana:68},
		attack: {damage:58,nextturns:5}
	},
	wis_fire_flamming09: {name: 'wis_fire_flamming09', caption: '���������� ����� [9]', description: '������� ���� ���� ����� �� ���� �����', iname: 'wis_fire_flamming08', school: 'fire',
		required: {level:9,intellect:60,firemagicskill:9},
		consumes: {mana:82},
		attack: {damage:69,nextturns:5}
	},
	wis_fire_flamming10: {name: 'wis_fire_flamming10', caption: '���������� ����� [10]', description: '������� ���� ���� ����� �� ���� �����', iname: 'wis_fire_flamming08', school: 'fire',
		required: {level:10,intellect:75,firemagicskill:10},
		consumes: {mana:98},
		attack: {damage:83,nextturns:5}
	},
	wis_fire_flamming11: {name: 'wis_fire_flamming11', caption: '���������� ����� [11]', description: '������� ���� ���� ����� �� ���� �����', iname: 'wis_fire_flamming08', school: 'fire',
		required: {level:11,intellect:100,firemagicskill:11},
		consumes: {mana:118},
		attack: {damage:100,nextturns:5}
	},
	wis_fire_incenerate04: {name: 'wis_fire_incenerate04', caption: '����������� [4]', description: '������� ���� ���� �����', iname: 'wis_fire_incenerate08', school: 'fire',
		required: {level:4,intellect:15,firemagicskill:4},
		consumes: {mana:15},
		attack: {damage:21}
	},
	wis_fire_incenerate05: {name: 'wis_fire_incenerate05', caption: '����������� [5]', description: '������� ���� ���� �����', iname: 'wis_fire_incenerate08', school: 'fire',
		required: {level:5,intellect:20,firemagicskill:5},
		consumes: {mana:23},
		attack: {damage:25}
	},
	wis_fire_incenerate06: {name: 'wis_fire_incenerate06', caption: '����������� [6]', description: '������� ���� ���� �����', iname: 'wis_fire_incenerate08', school: 'fire',
		required: {level:6,intellect:30,firemagicskill:6},
		consumes: {mana:34},
		attack: {damage:30}
	},
	wis_fire_incenerate07: {name: 'wis_fire_incenerate07', caption: '����������� [7]', description: '������� ���� ���� �����', iname: 'wis_fire_incenerate08', school: 'fire',
		required: {level:7,intellect:40,firemagicskill:7},
		consumes: {mana:52},
		attack: {damage:36}
	},
	wis_fire_incenerate08: {name: 'wis_fire_incenerate08', caption: '����������� [8]', description: '������� ���� ���� �����', iname: 'wis_fire_incenerate08', school: 'fire',
		required: {level:8,intellect:50,firemagicskill:8},
		consumes: {mana:62},
		attack: {damage:44}
	},
	wis_fire_incenerate09: {name: 'wis_fire_incenerate09', caption: '����������� [9]', description: '������� ���� ���� �����', iname: 'wis_fire_incenerate08', school: 'fire',
		required: {level:9,intellect:60,firemagicskill:9},
		consumes: {mana:74},
		attack: {damage:52}
	},
	wis_fire_incenerate10: {name: 'wis_fire_incenerate10', caption: '����������� [10]', description: '������� ���� ���� �����', iname: 'wis_fire_incenerate08', school: 'fire',
		required: {level:10,intellect:75,firemagicskill:10},
		consumes: {mana:89},
		attack: {damage:63}
	},
	wis_fire_incenerate11: {name: 'wis_fire_incenerate11', caption: '����������� [11]', description: '������� ���� ���� �����', iname: 'wis_fire_incenerate08', school: 'fire',
		required: {level:11,intellect:100,firemagicskill:11},
		consumes: {mana:107},
		attack: {damage:76}
	},
	wis_fire_mark: {name: 'wis_fire_mark', caption: '���� ����', description: '��������� ���������������� ����������� ����� ����. ����� ��������� �� ���� ���� �� 5 ���.', school: 'fire',
		required: {level:7,intellect:40,firemagicskill:7},
		resources: {},
		consumes: {mana:20,spiritlevel:0.5}
	},
	wis_fire_sign: {name: 'wis_fire_sign', caption: '���� ����', description: '��� �������� +n ��. �������� ����� ������. ���������� ������� 10 ���� ������ ���.', school: 'fire',
		required: {level:4,intellect:25,firemagicskill:2},
		resources: {},
		consumes: {mana:100,spiritlevel:1}
	},
	wis_fire_flameshock: {name: 'wis_fire_flameshock', caption: '�������� ����', description: '������������ ������� ������ �������� ���������� ����� �� ����. ���� �������� ���� ����� � �� ����� ������������ ������ ��� �������� ���� ������� 2 ����.', school: 'fire',
		required: {level:7,intellect:40,firemagicskill:7},
		consumes: {mana:200}
	},
	wis_fire_flamedestroy: {name: 'wis_fire_flamedestroy', caption: '�������� �����', description: '������������ ������� ������ ��������  ���������� ����� �� ����.���� � ��� 4 ��������� ���� �������� 33% ����������� ����� ����������� ������� ������ ����.', school: 'fire',
		required: {level:7,intellect:40,firemagicskill:7},
		consumes: {mana:83}
	},
	wis_fire_flamedeath: {name: 'wis_fire_flamedeath', caption: '�������� ������', description: '������������ ������� ������ ��������  ���������� ����� �� ����, ���� � ������� ����� ����� 33%.���� �������� 125% ����������� ����� ����������� �������.', school: 'fire',
		required: {level:7,intellect:40,firemagicskill:7},
		consumes: {mana:83}
	},
	wis_fire_boost: {name: 'wis_fire_boost', caption: '��������', description: '���� ��������� �������� ���������� ������� +100 ��. �������� ����� ����.�� ��������� ����.', school: 'fire',
		required: {level:7,intellect:25,firemagicskill:7},
		consumes: {mana:25}
	},
	wis_fire_sacrifice: {name: 'wis_fire_sacrifice', caption: '������ ����', description: '�� ������� 10%��, �� ���������������� 20% ���� (��� ������������� � ��� ������ ���� �� ������ 10%��).', school: 'fire',
		required: {level:7,intellect:40,firemagicskill:7},
		consumes: {mana:4}
	},
	wis_fire_hiddenpower: {name: 'wis_fire_hiddenpower', caption: '������� �����', description: '���� ������� ����� ����� ���� 33%, �� ��� ������������� ������� ������� �������� �� ����������� ����� ����.���� ��� �� ���.', school: 'fire',
		required: {level:8,intellect:50,firemagicskill:8},
		consumes: {mana:83}
	},
	wis_fire_shield: {name: 'wis_fire_shield', caption: '�������� ���', description: '�� ��������� �� 50% ������ ����� 2 ����������� �������, ���������� ���� ��������������� ���� ����.�� ��������� ����.', school: 'fire',
		required: {level:8,intellect:50,firemagicskill:8},
		consumes: {mana:133}
	},
	wis_fire_flametongue08: {name: 'wis_fire_flametongue08', caption: '���� ������� [8]', description: '������� ���� 5% ����� ������ ���� �� � ������������� ������ �����.� ��� +2% �� ������ ������� ���� ����.���������� �� ����� ������� ����� 300 ������ �����, �� ������� ����������� ����. ', iname: 'wis_fire_flametongue', school: 'fire',
		required: {level:8,intellect:50,firemagicskill:8},
		consumes: {mana:109}
	},
	wis_fire_flametongue09: {name: 'wis_fire_flametongue09', caption: '���� ������� [9]', description: '������� ���� 5% ����� ������ ���� �� � ������������� ������ �����.� ��� +2% �� ������ ������� ���� ����.���������� �� ����� ������� ����� 400 ������ �����, �� ������� ����������� ����. ', iname: 'wis_fire_flametongue', school: 'fire',
		required: {level:9,intellect:60,firemagicskill:9},
		consumes: {mana:131}
	},
	wis_fire_flametongue10: {name: 'wis_fire_flametongue10', caption: '���� ������� [10]', description: '������� ���� 5% ����� ������ ���� �� � ������������� ������ �����.� ��� +2% �� ������ ������� ���� ����.���������� �� ����� ������� ����� 500 ������ �����, �� ������� ����������� ����. ', iname: 'wis_fire_flametongue', school: 'fire',
		required: {level:10,intellect:75,firemagicskill:10},
		consumes: {mana:157}
	},
	wis_water_cloud08: {name: 'wis_water_cloud08', caption: '�������� ������ [8]', description: '������� 3-5 ����� ���� ���� �� ���� �����', iname: 'wis_water_cloud08', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		consumes: {mana:156},
		attack: {mincount:3,maxcount:5,nextdamage:27,nextturns:5}
	},
	wis_water_cloud09: {name: 'wis_water_cloud09', caption: '�������� ������ [9]', description: '������� 3-5 ����� ���� ���� �� ���� �����', iname: 'wis_water_cloud08', school: 'water',
		required: {level:9,intellect:60,watermagicskill:9},
		consumes: {mana:1887},
		attack: {mincount:3,maxcount:5,nextdamage:33,nextturns:5}
	},
	wis_water_cloud10: {name: 'wis_water_cloud10', caption: '�������� ������ [10]', description: '������� 3-5 ����� ���� ���� �� ���� �����', iname: 'wis_water_cloud08', school: 'water',
		required: {level:10,intellect:75,watermagicskill:10},
		consumes: {mana:224},
		attack: {mincount:3,maxcount:5,nextdamage:39,nextturns:5}
	},
	wis_water_cloud11: {name: 'wis_water_cloud11', caption: '�������� ������ [11]', description: '������� 3-5 ����� ���� ���� �� ���� �����', iname: 'wis_water_cloud08', school: 'water',
		required: {level:11,intellect:100,watermagicskill:11},
		consumes: {mana:269},
		attack: {mincount:3,maxcount:5,nextdamage:47,nextturns:5}
	},
	wis_water_frost04: {name: 'wis_water_frost04', caption: '���������� [4]', description: '��������� ������� ���� ���� ������� � ��� ������� �� �� ������ ����', iname: 'wis_water_frost08', school: 'water',
		required: {level:4,intellect:15,watermagicskill:4},
		consumes: {mana:17},
		attack: {damage:19,nextdamage:3,nextturns:4}
	},
	wis_water_frost05: {name: 'wis_water_frost05', caption: '���������� [5]', description: '��������� ������� ���� ���� ������� � ��� ������� �� �� ������ ����', iname: 'wis_water_frost08', school: 'water',
		required: {level:5,intellect:20,watermagicskill:5},
		consumes: {mana:26},
		attack: {damage:23,nextdamage:3,nextturns:4}
	},
	wis_water_frost06: {name: 'wis_water_frost06', caption: '���������� [6]', description: '��������� ������� ���� ���� ������� � ��� ������� �� �� ������ ����', iname: 'wis_water_frost08', school: 'water',
		required: {level:6,intellect:30,watermagicskill:6},
		consumes: {mana:39},
		attack: {damage:27,nextdamage:4,nextturns:4}
	},
	wis_water_frost07: {name: 'wis_water_frost07', caption: '���������� [7]', description: '��������� ������� ���� ���� ������� � ��� ������� �� �� ������ ����', iname: 'wis_water_frost08', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		consumes: {mana:58},
		attack: {damage:33,nextdamage:26,nextturns:4}
	},
	wis_water_frost08: {name: 'wis_water_frost08', caption: '���������� [8]', description: '��������� ������� ���� ���� ������� � ��� ������� �� �� ������ ����', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		consumes: {mana:70},
		attack: {damage:39,nextdamage:6,nextturns:4}
	},
	wis_water_frost09: {name: 'wis_water_frost09', caption: '���������� [9]', description: '��������� ������� ���� ���� ������� � ��� ������� �� �� ������ ����', iname: 'wis_water_frost08', school: 'water',
		required: {level:9,intellect:60,watermagicskill:9},
		consumes: {mana:84},
		attack: {damage:47,nextdamage:7,nextturns:4}
	},
	wis_water_frost10: {name: 'wis_water_frost10', caption: '���������� [10]', description: '��������� ������� ���� ���� ������� � ��� ������� �� �� ������ ����', iname: 'wis_water_frost08', school: 'water',
		required: {level:10,intellect:75,watermagicskill:10},
		consumes: {mana:101},
		attack: {damage:57,nextdamage:9,nextturns:4}
	},
	wis_water_frost11: {name: 'wis_water_frost11', caption: '���������� [11]', description: '��������� ������� ���� ���� ������� � ��� ������� �� �� ������ ����', iname: 'wis_water_frost08', school: 'water',
		required: {level:11,intellect:100,watermagicskill:11},
		consumes: {mana:121},
		attack: {damage:68,nextdamage:11,nextturns:4}
	},
	wis_water_poison06: {name: 'wis_water_poison06', caption: '���������� [6]', description: '������� ���� ���� ���� �� ������ �����. ���������� ������� ���� ������ ���.', iname: 'wis_water_poison08', school: 'water',
		required: {level:6,intellect:30,watermagicskill:6},
		consumes: {mana:34},
		attack: {nextdamage:61,nextturns:10}
	},
	wis_water_poison07: {name: 'wis_water_poison07', caption: '���������� [7]', description: '������� ���� ���� ���� �� ������ �����. ���������� ������� ���� ������ ���.', iname: 'wis_water_poison08', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		consumes: {mana:52},
		attack: {nextdamage:73,nextturns:10}
	},
	wis_water_poison08: {name: 'wis_water_poison08', caption: '���������� [8]', description: '������� ���� ���� ���� �� ������ �����. ���������� ������� ���� ������ ���.', iname: 'wis_water_poison08', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		consumes: {mana:62},
		attack: {nextdamage:88,nextturns:10}
	},
	wis_water_poison09: {name: 'wis_water_poison09', caption: '���������� [9]', description: '������� ���� ���� ���� �� ������ �����. ���������� ������� ���� ������ ���.', iname: 'wis_water_poison08', school: 'water',
		required: {level:9,intellect:60,watermagicskill:9},
		consumes: {mana:74},
		attack: {nextdamage:105,nextturns:10}
	},
	wis_water_poison10: {name: 'wis_water_poison10', caption: '���������� [10]', description: '������� ���� ���� ���� �� ������ �����. ���������� ������� ���� ������ ���.', iname: 'wis_water_poison08', school: 'water',
		required: {level:10,intellect:75,watermagicskill:10},
		consumes: {mana:89},
		attack: {nextdamage:127,nextturns:10}
	},
	wis_water_poison11: {name: 'wis_water_poison11', caption: '���������� [11]', description: '������� ���� ���� ���� �� ������ �����. ���������� ������� ���� ������ ���.', iname: 'wis_water_poison08', school: 'water',
		required: {level:11,intellect:100,watermagicskill:11},
		consumes: {mana:107},
		attack: {nextdamage:152,nextturns:10}
	},
	wis_water_regen05: {name: 'wis_water_regen05', caption: '����������� [5]', description: '��������������� ���� ��  ������  ����� ������� ����� ������ ����. ���������� ������� ���� ������ ���.', iname: 'wis_water_regen08', school: 'water',
		required: {level:5,intellect:20,watermagicskill:5},
		resources: {hp:2},
		consumes: {mana:28},
		healing: {nexthitpoints:60,nextturns:8}
	},
	wis_water_regen06: {name: 'wis_water_regen06', caption: '����������� [6]', description: '��������������� ���� ��  ������  ����� ������� ����� ������ ����. ���������� ������� ���� ������ ���.', iname: 'wis_water_regen08', school: 'water',
		required: {level:6,intellect:30,watermagicskill:6},
		resources: {hp:2},
		consumes: {mana:43},
		healing: {nexthitpoints:72,nextturns:8}
	},
	wis_water_regen07: {name: 'wis_water_regen07', caption: '����������� [7]', description: '��������������� ���� ��  ������  ����� ������� ����� ������ ����. ���������� ������� ���� ������ ���.', iname: 'wis_water_regen08', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		resources: {hp:2},
		consumes: {mana:65},
		healing: {nexthitpoints:87,nextturns:8}
	},
	wis_water_regen08: {name: 'wis_water_regen08', caption: '����������� [8]', description: '��������������� ���� ��  ������  ����� ������� ����� ������ ����. ���������� ������� ���� ������ ���.', iname: 'wis_water_regen08', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		resources: {hp:2},
		consumes: {mana:78},
		healing: {nexthitpoints:104,nextturns:8}
	},
	wis_water_regen09: {name: 'wis_water_regen09', caption: '����������� [9]', description: '��������������� ���� ��  ������  ����� ������� ����� ������ ����. ���������� ������� ���� ������ ���.', iname: 'wis_water_regen08', school: 'water',
		required: {level:9,intellect:60,watermagicskill:9},
		resources: {hp:2},
		consumes: {mana:93},
		healing: {nexthitpoints:125,nextturns:8}
	},
	wis_water_regen10: {name: 'wis_water_regen10', caption: '����������� [10]', description: '��������������� ���� ��  ������  ����� ������� ����� ������ ����. ���������� ������� ���� ������ ���.', iname: 'wis_water_regen08', school: 'water',
		required: {level:10,intellect:75,watermagicskill:10},
		resources: {hp:2},
		consumes: {mana:112},
		healing: {nexthitpoints:151,nextturns:8}
	},
	wis_water_regen11: {name: 'wis_water_regen11', caption: '����������� [11]', description: '��������������� ���� ��  ������  ����� ������� ����� ������ ����. ���������� ������� ���� ������ ���.', iname: 'wis_water_regen08', school: 'water',
		required: {level:11,intellect:100,watermagicskill:11},
		resources: {hp:2},
		consumes: {mana:134},
		healing: {nexthitpoints:181,nextturns:8}
	},
	wis_water_mark: {name: 'wis_water_mark', caption: '���� ����', description: '��������� ���������������� ����������� ����� ����. ����� ��������� �� ���� ���� �� 5 ���.', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		resources: {},
		consumes: {mana:20,spiritlevel:0.5}
	},
	wis_water_sign: {name: 'wis_water_sign', caption: '���� ����', description: '��� �������� +n ��. ���������. ���������� ������� ���� ������ ���.', school: 'water',
		required: {level:4,intellect:25,watermagicskill:2},
		resources: {},
		consumes: {mana:100,spiritlevel:1}
	},
	wis_water_shield: {name: 'wis_water_shield', caption: '���� [7]', description: '�� ��������� �� 25% ������ ����� 4 ����������� �������.', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		consumes: {mana:89}
	},
	wis_water_shield: {name: 'wis_water_shield', caption: '���� [8]', description: '�� ��������� �� 25% ������ ����� 4 ����������� �������, <br>��������� ������� �������� ���������� � ����� ����, �� ��������� ����.', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		consumes: {mana:133}
	},
	wis_water_shield: {name: 'wis_water_shield', caption: '���� [9]', description: '�� ��������� �� 25% ������ ����� 4 ����������� �������, <br>��������� ������� �������� ���������� � ����� ���� � ����� ������������ �����, �� ��������� ����.', school: 'water',
		required: {level:9,intellect:60,watermagicskill:9},
		consumes: {mana:195}
	},
	wis_gray_beam: {name: 'wis_gray_beam', caption: '������� ���', description: '������� ���������� ���� ������ �������� ������ ����������.', school: 'grey',
		required: {level:7,intellect:40,greymagicskill:4},
		consumes: {mana:5}
	},
	wis_gray_meditation: {name: 'wis_gray_meditation', caption: '���������', description: '��������������� 10% ����.', school: 'grey',
		required: {level:7,intellect:50,greymagicskill:3},
		resources: {},
		consumes: {spiritlevel:2}
	},
	wis_gray_forcefield07: {name: 'wis_gray_forcefield07', caption: '������� ���� [7]', description: '������� ������� ���� ������ ����, ��������� ��������� 120 ��. �����. ������� ����������� ���� ������� �� �������� ���� - ����������', iname: 'wis_gray_forcefield08', school: 'grey',
		required: {level:7,intellect:40,greymagicskill:2},
		resources: {},
		consumes: {mana:150}
	},
	wis_gray_forcefield08: {name: 'wis_gray_forcefield08', caption: '������� ���� [8]', description: '������� ������� ���� ������ ����, ��������� ��������� 144 ��. �����. ������� ����������� ���� ������� �� �������� ���� - ����������', iname: 'wis_gray_forcefield08', school: 'grey',
		required: {level:8,intellect:50,greymagicskill:3},
		resources: {},
		consumes: {mana:180,spiritlevel:1}
	},
	wis_gray_forcefield09: {name: 'wis_gray_forcefield09', caption: '������� ���� [9]', description: '������� ������� ���� ������ ����, ��������� ��������� 172 ��. �����. ������� ����������� ���� ������� �� �������� ���� - ����������', iname: 'wis_gray_forcefield08', school: 'grey',
		required: {level:9,intellect:60,greymagicskill:4},
		resources: {},
		consumes: {mana:216,spiritlevel:2}
	},
	wis_gray_forcefield10: {name: 'wis_gray_forcefield10', caption: '������� ���� [10]', description: '������� ������� ���� ������ ����, ��������� ��������� 207 ��. �����. ������� ����������� ���� ������� �� �������� ���� - ����������', iname: 'wis_gray_forcefield08', school: 'grey',
		required: {level:10,intellect:75,greymagicskill:5},
		resources: {},
		consumes: {mana:259,spiritlevel:3}
	},
	wis_gray_forcefield11: {name: 'wis_gray_forcefield11', caption: '������� ���� [11]', description: '������� ������� ���� ������ ����, ��������� ��������� 248 ��. �����. ������� ����������� ���� ������� �� �������� ���� - ����������', iname: 'wis_gray_forcefield08', school: 'grey',
		required: {level:11,intellect:100,greymagicskill:6},
		resources: {},
		consumes: {mana:311,spiritlevel:4}
	},
	wis_gray_manabarrier07: {name: 'wis_gray_manabarrier07', caption: '���������� ������ [7]', description: '������� ���������� ������ ������ ����, ��������� ��������� n ��. �����, ����� 1.8 ��. ���� �� ������ ������� �����. <br>������ ��������� 55% �����������. <br>���� ������� ����������� ���� �� ������� �������� �� 14%. �� ��������� �������� ����.', iname: 'wis_gray_manabarrier2', school: 'grey',
		required: {level:7,intellect:40},
		consumes: {mana:15}
	},
	wis_gray_manabarrier08: {name: 'wis_gray_manabarrier08', caption: '���������� ������ [8]', description: '������� ���������� ������ ������ ����, ��������� ��������� n ��. �����, ����� 1.6 ��. ���� �� ������ ������� �����. <br>������ ��������� 60% �����������. <br>���� ������� ����������� ���� �� ������� �������� �� 16%. �� ��������� �������� ����.', iname: 'wis_gray_manabarrier2', school: 'grey',
		required: {level:8,intellect:50},
		consumes: {mana:15}
	},
	wis_gray_manabarrier09: {name: 'wis_gray_manabarrier09', caption: '���������� ������ [9]', description: '������� ���������� ������ ������ ����, ��������� ��������� n ��. �����, ����� 1.4 ��. ���� �� ������ ������� �����. <br>������ ��������� 65% �����������. <br>���� ������� ����������� ���� �� ������� �������� �� 18%. �� ��������� �������� ����.', iname: 'wis_gray_manabarrier2', school: 'grey',
		required: {level:9,intellect:60},
		consumes: {mana:15}
	},
	wis_gray_manabarrier10: {name: 'wis_gray_manabarrier10', caption: '���������� ������ [10]', description: '������� ���������� ������ ������ ����, ��������� ��������� n ��. �����, ����� 1.2 ��. ���� �� ������ ������� �����. <br>������ ��������� 70% �����������. <br>���� ������� ����������� ���� �� ������� �������� �� 20%. �� ��������� �������� ����.', iname: 'wis_gray_manabarrier2', school: 'grey',
		required: {level:10,intellect:75},
		consumes: {mana:15}
	},
	wis_gray_manabarrier11: {name: 'wis_gray_manabarrier11', caption: '���������� ������ [11]', description: '������� ���������� ������ ������ ����, ��������� ��������� n ��. �����, ����� 1 ��. ���� �� ������ ������� �����. <br>������ ��������� 75% �����������. <br>���� ������� ����������� ���� �� ������� �������� �� 22%. �� ��������� �������� ����.', iname: 'wis_gray_manabarrier2', school: 'grey',
		required: {level:11,intellect:100},
		consumes: {mana:15}
	},
	wis_gray_mastery: {name: 'wis_gray_mastery', caption: '����� ����������', description: '����������� ����� � ����� ������, ����������� �� 5 ���.<br />������ 10*(������� ����������) � ���.', school: 'grey',
		required: {level:7,intellect:40,greymagicskill:4},
		consumes: {mana:50,spiritlevel:3}
	},
	wis_gray_manabarrier: {name: 'wis_gray_manabarrier', caption: '���������� ������', description: '������� ���������� ������ ������ ����, ��������� ��������� 293 ��. �����, ����� 2 ��. ���� �� ������ ������� �����. <br>������ ��������� ���� �������� �����������. �� ��������� �������� ����.', school: 'grey',
		required: {level:4,intellect:30},
		consumes: {mana:5}
	},
	/*wis_gray_beam01: {name: 'wis_gray_beam01', caption: '���������� ���', description: '������� ���� 7*(��� �������) ��. ����� ����� ������.', iname: 'wis_gray_beam', school: 'grey',
		required: {level:4,intellect:30},
		consumes: {mana:50}
	},*/
	wis_light_heal04: {name: 'wis_light_heal04', caption: '���������� ���������', description: '�������� ���� �� 50��, �� ����� ���� ����.', iname: 'wis_light_heal07', school: 'grey',
		required: {level:4,intellect:30},
		consumes: {mana:125}
	},
	wis_light_cleance: {name: 'wis_light_cleance', caption: '��������', description: '������� ���� ���������� ������ ���������, ������� ��� ����������.', school: 'light',
		required: {level:8,intellect:50,lightmagicskill:5},
		consumes: {mana:100}
	},
	wis_light_damage07: {name: 'wis_light_damage07', caption: '��������� [7]', description: '������� ���� ���� ������ �����, ���� ������ �������������� �� ��������� �����.', iname: 'wis_light_damage08', school: 'light',
		required: {level:7,intellect:40,lightmagicskill:2},
		consumes: {mana:58,spiritlevel:1},
		attack: {damage:32}
	},
	wis_light_damage08: {name: 'wis_light_damage08', caption: '��������� [8]', description: '������� ���� ���� ������ �����, ���� ������ �������������� �� ��������� �����.', iname: 'wis_light_damage08', school: 'light',
		required: {level:8,intellect:50,lightmagicskill:3},
		consumes: {mana:70,spiritlevel:1},
		attack: {damage:38}
	},
	wis_light_damage09: {name: 'wis_light_damage09', caption: '��������� [9]', description: '������� ���� ���� ������ �����, ���� ������ �������������� �� ��������� �����.', iname: 'wis_light_damage08', school: 'light',
		required: {level:9,intellect:60,lightmagicskill:4},
		consumes: {mana:84,spiritlevel:1},
		attack: {damage:46}
	},
	wis_light_damage10: {name: 'wis_light_damage10', caption: '��������� [10]', description: '������� ���� ���� ������ �����, ���� ������ �������������� �� ��������� �����.', iname: 'wis_light_damage08', school: 'light',
		required: {level:10,intellect:75,lightmagicskill:5},
		consumes: {mana:101,spiritlevel:1},
		attack: {damage:55}
	},
	wis_light_damage11: {name: 'wis_light_damage11', caption: '��������� [11]', description: '������� ���� ���� ������ �����, ���� ������ �������������� �� ��������� �����.', iname: 'wis_light_damage08', school: 'light',
		required: {level:11,intellect:100,lightmagicskill:6},
		consumes: {mana:121,spiritlevel:1},
		attack: {damage:66}
	},
	wis_light_heal07: {name: 'wis_light_heal07', caption: '������� [7]', description: '�������� ���� ������ �����.', iname: 'wis_light_heal08', school: 'light',
		required: {level:7,intellect:40,lightmagicskill:2},
		resources: {hp:1},
		consumes: {mana:117},
		healing: {hitpoints:138}
	},
	wis_light_heal08: {name: 'wis_light_heal08', caption: '������� [8]', description: '�������� ���� ������ �����.', iname: 'wis_light_heal08', school: 'light',
		required: {level:8,intellect:50,lightmagicskill:3},
		resources: {hp:1},
		consumes: {mana:140},
		healing: {hitpoints:165}
	},
	wis_light_heal09: {name: 'wis_light_heal09', caption: '������� [9]', description: '�������� ���� ������ �����.', iname: 'wis_light_heal08', school: 'light',
		required: {level:9,intellect:60,lightmagicskill:4},
		resources: {hp:1},
		consumes: {mana:168},
		healing: {hitpoints:198}
	},
	wis_light_heal10: {name: 'wis_light_heal10', caption: '������� [10]', description: '�������� ���� ������ �����.', iname: 'wis_light_heal08', school: 'light',
		required: {level:10,intellect:75,lightmagicskill:5},
		resources: {hp:1},
		consumes: {mana:202},
		healing: {hitpoints:238}
	},
	wis_light_heal11: {name: 'wis_light_heal11', caption: '������� [11]', description: '�������� ���� ������ �����.', iname: 'wis_light_heal08', school: 'light',
		required: {level:11,intellect:100,lightmagicskill:6},
		resources: {hp:1},
		consumes: {mana:242},
		healing: {hitpoints:286}
	},
	wis_light_insight07: {name: 'wis_light_insight07', caption: '��������� [7]', description: '��������������� 552 ���� �� 20 �����.', iname: 'wis_light_insight', school: 'light',
		required: {level:7,intellect:40,lightmagicskill:2},
		resources: {},
		consumes: {mana:312,spiritlevel:5}
	},
	wis_light_insight08: {name: 'wis_light_insight08', caption: '��������� [8]', description: '��������������� 662 ���� �� 20 �����.', iname: 'wis_light_insight', school: 'light',
		required: {level:8,intellect:50,lightmagicskill:3},
		resources: {},
		consumes: {mana:374,spiritlevel:5}
	},
	wis_light_insight09: {name: 'wis_light_insight09', caption: '��������� [9]', description: '��������������� 794 ���� �� 20 �����.', iname: 'wis_light_insight', school: 'light',
		required: {level:9,intellect:60,lightmagicskill:4},
		resources: {},
		consumes: {mana:449,spiritlevel:5}
	},
	wis_light_insight10: {name: 'wis_light_insight10', caption: '��������� [10]', description: '��������������� 953 ���� �� 20 �����.', iname: 'wis_light_insight', school: 'light',
		required: {level:10,intellect:75,lightmagicskill:5},
		resources: {},
		consumes: {mana:539,spiritlevel:5}
	},
	wis_light_insight11: {name: 'wis_light_insight11', caption: '��������� [11]', description: '��������������� 1144 ���� �� 20 �����.', iname: 'wis_light_insight', school: 'light',
		required: {level:11,intellect:100,lightmagicskill:6},
		resources: {},
		consumes: {mana:646,spiritlevel:5}
	},
	wis_light_shield: {name: 'wis_light_shield', caption: '������ ����� ', description: '������� ���� ���� ���������� ����� �� 10%, �������� ����� �������������� �� ����� ����� ��������� �� 1 ���.', iname: 'wis_light_shield', school: 'light',
		required: {level:7,intellect:40,lightmagicskill:4},
		resources: {},
		consumes: {mana:200}
	},
	wis_dark_soulweak: {name: 'wis_dark_soulweak', caption: '�������� ����', description: '�� 3 ���� ��� ���������� ���� ����� ������, � ���������� ���� ��������. ���� �������� ��������� � ����� ���������� �� 10 �����.', school: 'dark',
		required: {level:8,intellect:50,darkmagicskill:5},
		consumes: {mana:100}
	},
	wis_dark_souleat: {name: 'wis_dark_souleat', caption: '���������', description: '�� ���������� ��� ������� � ���, �������������� ����. ���� ���� ����� ��������� ������ ���� ���. �������� �� ������ �� ������� ���� ����.', school: 'dark',
		required: {level:8,intellect:50,darkmagicskill:5},
		consumes: {mana:50}
	},
	wis_dark_damage07: {name: 'wis_dark_damage07', caption: '���������� [7]', description: '������� ���� ���� ������ ����, ����� ����� ����� ����.', iname: 'wis_dark_damage08', school: 'dark',
		required: {level:7,intellect:40,darkmagicskill:5},
		consumes: {mana:58},
		attack: {damage:25}
	},
	wis_dark_damage08: {name: 'wis_dark_damage08', caption: '���������� [8]', description: '������� ���� ���� ������ ����, ����� ����� ����� ����.', iname: 'wis_dark_damage08', school: 'dark',
		required: {level:8,intellect:50,darkmagicskill:6},
		consumes: {mana:70},
		attack: {damage:30}
	},
	wis_dark_damage09: {name: 'wis_dark_damage09', caption: '���������� [9]', description: '������� ���� ���� ������ ����, ����� ����� ����� ����.', iname: 'wis_dark_damage08', school: 'dark',
		required: {level:9,intellect:60,darkmagicskill:7},
		consumes: {mana:84},
		attack: {damage:36}
	},
	wis_dark_damage10: {name: 'wis_dark_damage10', caption: '���������� [10]', description: '������� ���� ���� ������ ����, ����� ����� ����� ����.', iname: 'wis_dark_damage08', school: 'dark',
		required: {level:10,intellect:75,darkmagicskill:8},
		consumes: {mana:101},
		attack: {damage:43}
	},
	wis_dark_damage11: {name: 'wis_dark_damage11', caption: '���������� [11]', description: '������� ���� ���� ������ ����, ����� ����� ����� ����.', iname: 'wis_dark_damage08', school: 'dark',
		required: {level:11,intellect:100,darkmagicskill:9},
		consumes: {mana:121},
		attack: {damage:52}
	},
	wis_dark_manadamage07: {name: 'wis_dark_manadamage07', caption: '����������� [7]', description: '������ ���� ���� ��� ������ ����� ����, <br>����� ���� ����������� ������������ ��������� ���������� ���� � ��� ����� ���� �� ������ �� 3 ����.<br>���� �������� ��������� � ����������� �� 10 �����.', iname: 'wis_dark_manadamage08', school: 'dark',
		required: {level:7,intellect:40,darkmagicskill:5},
		resources: {hp:2},
		consumes: {mana:130},
		attack: {manadamage:184}
	},
	wis_dark_manadamage08: {name: 'wis_dark_manadamage08', caption: '����������� [8]', description: '������ ���� ���� ��� ������ ����� ����, <br>����� ���� ����������� ������������ ��������� ���������� ���� � ��� ����� ���� �� ������ �� 3 ����.<br>���� �������� ��������� � ����������� �� 10 �����.', iname: 'wis_dark_manadamage08', school: 'dark',
		required: {level:8,intellect:50,darkmagicskill:6},
		resources: {hp:2},
		consumes: {mana:156},
		attack: {manadamage:220}
	},
	wis_dark_manadamage09: {name: 'wis_dark_manadamage09', caption: '����������� [9]', description: '������ ���� ���� ��� ������ ����� ����, <br>����� ���� ����������� ������������ ��������� ���������� ���� � ��� ����� ���� �� ������ �� 3 ����.<br>���� �������� ��������� � ����������� �� 10 �����.', iname: 'wis_dark_manadamage08', school: 'dark',
		required: {level:9,intellect:60,darkmagicskill:7},
		resources: {hp:2},
		consumes: {mana:187},
		attack: {manadamage:264}
	},
	wis_dark_manadamage10: {name: 'wis_dark_manadamage10', caption: '����������� [10]', description: '������ ���� ���� ��� ������ ����� ����, <br>����� ���� ����������� ������������ ��������� ���������� ���� � ��� ����� ���� �� ������ �� 3 ����.<br>���� �������� ��������� � ����������� �� 10 �����.', iname: 'wis_dark_manadamage08', school: 'dark',
		required: {level:10,intellect:75,darkmagicskill:8},
		resources: {hp:2},
		consumes: {mana:224},
		attack: {manadamage:317}
	},
	wis_dark_manadamage11: {name: 'wis_dark_manadamage11', caption: '����������� [11]', description: '������ ���� ���� ��� ������ ����� ����, <br>����� ���� ����������� ������������ ��������� ���������� ���� � ��� ����� ���� �� ������ �� 3 ����.<br>���� �������� ��������� � ����������� �� 10 �����.', iname: 'wis_dark_manadamage08', school: 'dark',
		required: {level:11,intellect:100,darkmagicskill:9},
		resources: {hp:2},
		consumes: {mana:269},
		attack: {manadamage:381}
	},
	wis_dark_eyeforeye: {name: 'wis_dark_eyeforeye', caption: '���� �� ����', description: '��������� ���������� ��� ���� ������� �� ����� �������� �����, <br>���������� �������� ������ ���� ������� ���������, �� �� ����� 50*(��� �������) ��. �����.', iname: 'wis_dark_eyeforeye', school: 'dark',
		required: {level:7,intellect:40,darkmagicskill:4},
		consumes: {mana:200}
	},
	wis_air_charge: {name: 'wis_air_charge', caption: '�������', description: '������, ���� ������, �����, �����, � ����� �� ���������� ���� ����� �������� ����, ���������� ���������� �� ����� ������� ���� �� 1%. ��� ����� ��������������� ������������ ��������.', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		consumes: {mana:25,spiritlevel:1}
	},
	wis_air_charge_shock: {name: 'wis_air_charge_shock', caption: '�����: ���', description: '�������� ����������, ����� ��� ����������� ������������ ��������� ����������� ����� �� 5 ����� � ���������� ���� ���������� ���������� ������.', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		resources: {hp:1}
	},
	wis_air_charge_gain: {name: 'wis_air_charge_gain', caption: '�����: �������', description: '��������������� 33 ���� �� ������ ������� ������ �� ���� � ������� � ���� ���� ���������� ���������� ������.', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		resources: {hp:1}
	},
	wis_air_charge_dmg: {name: 'wis_air_charge_dmg', caption: '�����: ���������', description: '������� ���� 1-2% ����� ������ ������� �� �� ������������� ������ ����� �� ������ ������� ������. <br>���������� �� ����� ������� ����� 350 ��. �����.<br>���������� �� ����� ������� ����� 250 ��. ����� ��� 9�� ������.<br>���������� �� ����� ������� ����� 300 ��. ����� ��� 10�� ������.<br>���������� �� ����� ������� ����� 350 ��. ����� ��� 11�� ������.', iname: 'wis_air_charge_dmg', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		resources: {hp:1}
	},
	wis_air_manaheal: {name: 'wis_air_manaheal', caption: '������� �������', description: '��������������� ���� 1-10% ���� �� ������ ��� ������ ����������. ���������� ���������� �������� ��� ������������� ������ ������� ���������� ����� 5 �����.', school: 'air',
		required: {level:7,intellect:40,airmagicskill:11},
		resources: {hp:1},
		consumes: {spiritlevel:3}
	},
	wis_air_sacrifice: {name: 'wis_air_sacrifice', caption: '������ �������', description: '��� �������� 25 ��. �������� ����� ������� �� 4 ����. ��������� ������� ��������� ������.', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		resources: {hp:5},
		consumes: {mana:10}
	},
	wis_air_speed: {name: 'wis_air_speed', caption: '�������� ������', description: '��������� ��������: 5. ����� ��������� ����� �� ������ ����.', school: 'air',
		required: {level:8,intellect:50,airmagicskill:8},
		consumes: {mana:85,spiritlevel:4}
	},
	wis_air_spark: {name: 'wis_air_spark', caption: '�����', description: '��������� ������� ���������� ���� ���� �������� ��� �������� �������������.', school: 'air',
		required: {level:8,intellect:50,airmagicskill:8},
		consumes: {mana:121}
	},
	/*wis_air_shield: {name: 'wis_air_shield', caption: '��������� ���', description: '������ ��������� ����� ������ ����, ��������� ��������� 1-? ��. �����. ���� ���� �� ��������� �������� ����. ����� �������� � ����������� ������� ����.', school: 'air',
		required: {level:9,intellect:60,airmagicskill:9},
		consumes: {mana:172}
	},*/
	wis_water_tempheal: {name: 'wis_water_tempheal', caption: '������� ��������', description: '��������� ������������� ������������, ������� ���� �� ???HP ������ ����, �� �� 5 ����� ������ 50% ����������� ��������.', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		resources: {hp:1},
		consumes: {mana:168}
	},
	wis_water_break: {name: 'wis_water_break', caption: '�����������: �������!', description: '������� ������� ���� ������������ ���������� ??? ����� ������ ���� � ��� ???, ���� ������� ����� ���� ����� (���.������*5+50)', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		consumes: {mana:200}
	},
	wis_water_crystalize: {name: 'wis_water_crystalize', caption: '��������������', description: '��������� ������� ���� ���� ������ ������ ���� ���� �� �� ����� ��� 10*(��� �������). ������� ���� � �������� ���� �� (���������� �������� �����) �� ��� ����.', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		consumes: {mana:200}
	},
	wis_water_icegrap: {name: 'wis_water_icegrap', caption: '������ ����', description: '����� 2 ���� ���� ������ ����������� ������������ ������ ��� �������� ���� ������� �� 3 ����.', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		consumes: {mana:100}
	},
	wis_water_spirit: {name: 'wis_water_spirit', caption: '���� ����', description: '�� ��� ���� ����������� ��. �������� ����� ���� �� 15. ����� ������ ������� ����� ������ ����, ��������������� ��� ����.', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		resources: {hp:4},
		consumes: {spiritlevel:5}
	},
	wis_water_aheal: {name: 'wis_water_aheal', caption: '��������������', description: '��������� ������� ������� �� ���� �� 10% ����� ��������� �� ���� ���� �� 5 ���.', school: 'water',
		required: {level:9,intellect:60,watermagicskill:9},
		resources: {hp:1},
		consumes: {mana:70}
	},
	wis_water_cleance: {name: 'wis_water_cleance', caption: '������� ����', description: '������� ���� ���������� ������ ����� ��� ����������.', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		consumes: {mana:100}
	},
	wis_water_hiddenpower: {name: 'wis_water_hiddenpower', caption: '������� ������', description: '��� ������������� ������� ������� �������� �� ����������� ����� ����. �� ��������� �������� ����.', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		consumes: {mana:200}
	},
	wis_water_sacrifice: {name: 'wis_water_sacrifice', caption: '������ ����', description: '��� ������ 10% ����� �� 5 �����, �� ���� ���� �������� ������� �� 50%.', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		resources: {hp:5},
		consumes: {mana:5}
	},
	wis_water_strike: {name: 'wis_water_strike', caption: '������ �����', description: '������� ���� ������� ����.', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		consumes: {mana:162}
	} 
 };
 
