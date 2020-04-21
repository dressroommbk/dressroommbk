var tricks = {
	novice_def: {name: 'novice_def', caption: 'Прикрыться', description: 'Следующий удар по вам нанесет на 3 ед. меньше урона.', school: 'novice'
	},
	novice_hit: {name: 'novice_hit', caption: 'Вломить', description: 'Следующий удар наносит на 4 ед. больше урона.', school: 'novice'
	},
	novice_hp: {name: 'novice_hp', caption: 'Собрать Зубы', description: 'Вы восстанавливаете от 2-5 НР.', school: 'novice',
	},
	block_absolute: {name: 'block_absolute', caption: 'Абсолютная защита', description: 'До Вашего следующего размена ударами, все повреждения от оружия или магии по Вам сводятся к 1.', school: 'fight',
		required: {level:7},
		resources: {block:7}
	},
	block_fullshield: {name: 'block_fullshield', caption: 'Полная защита', description: 'Следующий удар или заклятие нанесет вам не более 1 повреждения.', school: 'fight',
		required: {level:5},
		resources: {block:5}
	},
	block_activeshield: {name: 'block_activeshield', caption: 'Активная защита', description: 'Следующий удар или заклятие нанесет вам лишь половину повреждений.', school: 'fight',
		required: {level:2},
		resources: {block:3}
	},
	block_addchange: {name: 'block_addchange', caption: 'Выбор противника', description: 'Дополнительная смена противника.', school: 'fight',
		required: {level:2},
		resources: {block:1}
	},
	block_target: {name: 'block_target', caption: 'Защитить', description: 'Следующий удар по защищаемой цели попадает по вам.', school: 'fight',
		required: {level:8,endurance:35},
		resources: {block:2}
	},
	block_aftershock: {name: 'block_aftershock', caption: 'Контузия', description: 'Оглушает противника ударом щита, нанося уровень-уровень*2 урона, лишая его возможности использовать последний применённый им приём на два хода.<br>Требует для использования наличия щита.', school: 'fight',
		required: {level:5},
		resources: {block:2}
	},
	block_restore: {name: 'block_restore', caption: 'Глухая Защита', description: 'Вы восстанавливаете 15%HP за 6 ходов, урон по Вам падает на 25%.<br>Требует для использования наличия щита.', school: 'fight',
		required: {level:6,strength:30,endurance:30},
		resources: {block:10}
	},
	/*block_target_shield: {name: 'block_target_shield', caption: 'Живой щит', description: 'Предложить себя в качестве живого щита на один ход. Если кто-то использует на вас прием Живой меч, то нанесет удар по противнику вместо вас.', school: 'fight',
		required: {level:8,endurance:30},
		resources: {block:1}
	},*/
	block_magicshield: {name: 'block_magicshield', caption: 'Магическая Защита', description: 'Следующее заклятие нанесет вам не более 1 повреждения, защита действует не более трех ходов.', school: 'fight',
		required: {level:7},
		resources: {block:3}
	},
	block_revenge: {name: 'block_revenge', caption: 'Возмездие', description: 'Нанесший вам удар получит 6*(ваш уровень) ед. урона.', school: 'fight',
		required: {level:7},
		resources: {block:5}
	},
	block_path: {name: 'block_path', caption: 'Путь Щита', description: 'Увеличивает ваш мф. против критического удара на 50 и снижает весь получаемый урон на 5%. Можно применять трижды.<br>Требует для использования наличия щита.', school: 'fight',
		required: {level:7},
		resources: {block:5}
	},
	spirit_11_prot_100: {name: 'spirit_11_prot_100', caption: 'Призрачный Кинжал', description: 'Уменьшает колющий урон в два раза на 3 хода.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:5}
	},
	spirit_12_prot_100: {name: 'spirit_12_prot_100', caption: 'Призрачный Топор', description: 'Уменьшает рубящий урон в два раза на 3 хода.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:5}
	},
	spirit_13_prot_100: {name: 'spirit_13_prot_100', caption: 'Призрачный Удар', description: 'Уменьшает дробящий урон в два раза на 3 хода.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:5}
	},
	spirit_14_prot_100: {name: 'spirit_14_prot_100', caption: 'Призрачное Лезвие', description: 'Уменьшает режущий урон в два раза на 3 хода.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:5}
	},
	spirit_1_protfire100: {name: 'spirit_1_protfire100', caption: 'Призрачный Огонь', description: 'Уменьшает урон от Магии Огня в два раза на 3 хода.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:5}
	},
	spirit_2_protwater100: {name: 'spirit_2_protwater100', caption: 'Призрачная Вода', description: 'Уменьшает урон от Магии Воды в два раза на 3 хода.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:5}
	},
	spirit_3_protair100: {name: 'spirit_3_protair100', caption: 'Призрачный Воздух', description: 'Уменьшает урон от Магии Воздуха в два раза на 3 хода.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:5}
	},
	spirit_4_protearth100: {name: 'spirit_4_protearth100', caption: 'Призрачная Земля', description: 'Уменьшает урон от Магии Земли в два раза на 3 хода.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:5}
	},
	spirit_block25: {name: 'spirit_block25', caption: 'Призрачная защита', description: 'До вашего следующего размена ударами, вы получаете лишь четверть повреждений от оружия или магии.', school: 'fight',
		required: {level:7},
		resources: {},
		consumes: {spiritlevel:10}
	},
	spirit_survive: {name: 'spirit_survive', caption: 'Выжить', description: 'Исцеляет вас, используя все набранные вами тактики. Сила Духа на лечение не тратится.', school: 'fight',
		required: {level:7,endurance:30},
		resources: {},
		consumes: {spiritlevel:10}
	},
	hit_strong: {name: 'hit_strong', caption: 'Сильный удар', description: 'Следующий удар наносит на 3*(Ваш уровень) ед. урона больше.', school: 'fight',
		required: {level:2},
		resources: {hit:3}
	},
	hit_luck: {name: 'hit_luck', caption: 'Удачный удар', description: 'Следующий удар наносит на 6*(Ваш уровень) ед. урона больше.', school: 'fight',
		required: {level:4},
		resources: {hit:5}
	},
	hit_overhit: {name: 'hit_overhit', caption: 'Подлый удар', description: 'Мгновенно наносит противнику 5*(уровень) ед. урона.', school: 'fight',
		required: {level:4},
		resources: {hit:7},
		consumes: {spiritlevel:1}
	},
	hit_restrike: {name: 'hit_restrike', caption: 'Прорыв', description: 'Мгновенно наносит противнику треть урона оружием.', school: 'fight',
		required: {level:8,strength:45},
		resources: {hit:9},
		consumes: {spiritlevel:1}
	},
	hit_resolve: {name: 'hit_resolve', caption: 'Разведка боем', description: 'Успешное попадание раскрывает тактику противника, пять ходов показывая все его усиления и приемы.', school: 'fight',
		required: {level:5},
		resources: {hit:2}
	},
	hit_shock: {name: 'hit_shock', caption: 'Ошеломить', description: 'Ваше следующее попадание ошеломляет противника снижая его урон вдвое на один ход.', school: 'fight',
		required: {level:7},
		resources: {hit:3}
	},
	/*hit_target_sword: {name: 'hit_target_sword', caption: 'Живой меч', description: 'Нанести удар вместо союзника решившего стать живым щитом. Требуется цель с приемом Живой щит.', school: 'fight',
		required: {level:8,strength:50},
		resources: {hit:3}
	},*/
	blood_gainattack: {name: 'blood_gainattack', caption: 'Рывок', description: 'Ослабляя свою защиту, вы прорываетесь к противнику и получаете <img src="' + baseImgPath + 'hit.gif" width=8 height=8> 3', school: 'fight',
		required: {level:7,strength:25,endurance:25}
	},
	hit_willpower: {name: 'hit_willpower', caption: 'Воля к победе', description: 'Вы восстанавливаете 5*(уровень)+7 HP, эффект увеличен на 25%, если ваши HP ниже 33%', school: 'fight',
		required: {level:3},
		resources: {hit:5},
		consumes: {spiritlevel:1}
	},
	hit_empower: {name: 'hit_empower', caption: 'Усиленные удары', description: 'Все удары в следующем размене наносят на 5*(Уровень) ед. урона больше.', school: 'fight',
		required: {level:7},
		resources: {hit:3}
	},
	krit_wildluck: {name: 'krit_wildluck', caption: 'Дикая удача', description: 'Следующий критический удар наносит максимальные повреждения.', school: 'fight',
		required: {level:3},
		resources: {krit:3}
	},
	krit_blindluck: {name: 'krit_blindluck', caption: 'Слепая удача', description: 'Следующий удар будет критическим.Вы не получите <IMG width=7 height=8 src="' + baseImgPath + 'krit.gif"> с этого крита.', school: 'fight',
		required: {level:5},
		resources: {krit:5}
	},
	krit_crush: {name: 'krit_crush', caption: 'Сокрушающий удар', description: 'Ваш следующий удар нанесет двойной урон.', school: 'fight',
		required: {level:7},
		resources: {krit:7}
	},
	krit_blooddrink: {name: 'krit_blooddrink', caption: 'Хлебнуть Крови', description: 'Ваш следуюший критический удар и два удара за ним лечит вас частью нанесеного урона, но не более чем 154 НР с противника 10 уровня. Выпитая крoвь придает вам силы.', school: 'fight',
		required: {level:6},
		resources: {krit:7,block:3},
		consumes: {spiritlevel:2}
	},
	krit_bloodlust: {name: 'krit_bloodlust', caption: 'Жажда Крови', description: 'Увеличивает ваш мф. критического удара на 50 до конца боя и увеличивает физический урон на 5%. Можно применять трижды.', school: 'fight',
		required: {level:7},
		resources: {hit:2,krit:3}
	},
	counter_winddance: {name: 'counter_winddance', caption: 'Танец ветра', description: 'Вы увернетесь от следующего направленного в вас удара.Вы не получите <IMG width=8 height=8 src="' + baseImgPath + 'counter.gif"> за контрудар с этого уворота.', school: 'fight',
		required: {level:3},
		resources: {counter:3}
	},
	counter_bladedance: {name: 'counter_bladedance', caption: 'Танец лезвий', description: 'Вы увернетесь от следующего направленного в вас удара и нанесете контрудар.Вы не получите <IMG width=8 height=8 src="' + baseImgPath + 'counter.gif"> за контрудар с этого уворота.', school: 'fight',
		required: {level:5},
		resources: {counter:5}
	},
	counter_ward: {name: 'counter_ward', caption: 'Осторожность', description: 'Уменьшает урон от магии стихий вдвое на три хода.', school: 'fight',
		required: {level:7},
		resources: {counter:2}
	},
	counter_deathwalk: {name: 'counter_deathwalk', caption: 'Поступь Смерти', description: 'Увеличивает максимальный урон оружием на 1*(Уровень). Каждый успешный удар увеличивает макс. урон еще на 1*(Уровень) ед., до 10*(Уровень) и обновляет время эффекта. Эффект длится один ход.', school: 'fight',
		required: {level:7},
		resources: {counter:5}
	},
	parry_prediction: {name: 'parry_prediction', caption: 'Предвидение', description: 'Следующий удар противника парируется.Вы не получите <img width=8 height=8 src="' + baseImgPath + 'parry.gif"> за это парирование.', school: 'fight',
		required: {level:3},
		resources: {parry:3}
	},
	parry_secondlife: {name: 'parry_secondlife', caption: 'Второе дыхание', description: 'Следующий удар противника - парируется, за каждый уровень противника, чей удар вы парировали, вы получаете 5 ХП.Вы не получите <img width=8 height=8 src="' + baseImgPath + 'parry.gif"> за это парирование.', school: 'fight',
		required: {level:5},
		resources: {parry:5},
		consumes: {spiritlevel:2}
	},
	parry_supreme: {name: 'parry_supreme', caption: 'Превосходство', description: 'Увеличивает ваш мф. против критического удара и мф. против увертывания на 25 до конца боя. Снижает урон от магии на 5%. Можно применять трижды.', school: 'fight',
		required: {level:7},
		resources: {block:1,parry:3}
	},
	multi_hitshock: {name: 'multi_hitshock', caption: 'Шокирующий удар', description: 'Ваше следующее попадание оглушает противника, лишая его возможности использовать приемы и получать очки тактики на два хода.', school: 'fight',
		required: {level:7},
		resources: {hit:3,counter:1}
	},
	multi_agressiveshield: {name: 'multi_agressiveshield', caption: 'Агрессивная защита', description: 'Следующий удар или заклятие противника нанесет не более 1 повреждения, противник получает 3*(уровень) ед. урона.<br>Защищает от приемов <b>Разгадать Тактику</b> и <b>Ставка на опережение</b>', school: 'fight',
		required: {level:5},
		resources: {hit:2,block:5}
	},
	multi_blockchanges: {name: 'multi_blockchanges', caption: 'Ограничить маневр', description: 'Количество смен противника у противника устанавливается на 0.', school: 'fight',
		required: {level:5},
		resources: {hit:1,block:2}
	},
	multi_cowardshift: {name: 'multi_cowardshift', caption: 'Коварный уход', description: 'Следующий удар противника наносится по нему, вместо вас.', school: 'fight',
		required: {level:7},
		resources: {counter:5,block:2}
	},
	multi_doom: {name: 'multi_doom', caption: 'Обречённость', description: 'Шанс увернуться от вашего удара, парировать или отбить его щитом снижен на 25% на 3 хода', school: 'fight',
		required: {level:5},
		resources: {hit:2,block:3}
	},
	multi_followme: {name: 'multi_followme', caption: 'Преследование', description: 'Целью противника становитесь вы. Боец не в праве менять противника, до тех пор, пока не разменяется ударом с вами.', school: 'fight',
		required: {level:5},
		resources: {hit:3,block:2}
	},
	multi_hiddendodge: {name: 'multi_hiddendodge', caption: 'Скрытая ловкость', description: 'Вы уворачиваетесь от следующего удара по вам и наносите контрудар.', school: 'fight',
		required: {level:6},
		resources: {krit:3,block:2}
	},
	multi_hiddenpower: {name: 'multi_hiddenpower', caption: 'Скрытая сила', description: 'Следующий ваш удар - критический.', school: 'fight',
		required: {level:6},
		resources: {hit:3,counter:4}
	},
	multi_resolvetactic: {name: 'multi_resolvetactic', caption: 'Разгадать тактику', description: 'Отменяет все приемы на противнике при размене ударами.', school: 'fight',
		required: {level:5},
		resources: {hit:1,block:2}
	},
	multi_skiparmor: {name: 'multi_skiparmor', caption: 'Точный удар', description: 'Следующий ваш удар игнорирует броню противника и снижает сопротивление урону на 250ед., но не ниже 0.', school: 'fight',
		required: {level:5},
		resources: {hit:5,counter:1,parry:2}
	},
	multi_speedup: {name: 'multi_speedup', caption: 'Ставка на опережение', description: 'При размене ударами, вы украдете все активные приемы на противнике.', school: 'fight',
		required: {level:7},
		resources: {hit:3,counter:3}
	},
	multi_rollback: {name: 'multi_rollback', caption: 'Отменить', description: 'Отменяет последнее полученное повреждение или лечение. Доступно 3 раза за бой.', school: 'fight',
		required: {level:7,strength:25,endurance:25},
		resources: {hit:2,block:2}
	},
	hp_circleshield: {name: 'hp_circleshield', caption: 'Круговая защита', description: 'Физический урон, наносимый вашей команде, уменьшен на 1 до конца боя.', school: 'fight',
		required: {level:4,endurance:10},
		resources: {hp:10}
	},
	hp_natisk: {name: 'hp_natisk', caption: 'Натиск', description: 'Физический урон, наносимый вашей командой, увеличен на 1 до конца боя.', school: 'fight',
		required: {level:4,endurance:10},
		resources: {hp:10}
	},
	hp_cleance: {name: 'hp_cleance', caption: 'Очиститься кровью', description: 'Снимает один негативный эффект от магии, болезни или отравления', school: 'fight',
		required: {level:7},
		resources: {hp:1}
	},
	hp_defence: {name: 'hp_defence', caption: 'Стойкость', description: 'Увеличивает вашу защиту от урона до конца боя. Можно применять трижды.', school: 'fight',
		required: {level:4},
		resources: {hp:5}
	},
	hp_enrage: {name: 'hp_enrage', caption: 'Ярость', description: 'Увеличивает ваш урон до конца боя. Можно применять трижды.', school: 'fight',
		required: {level:4},
		resources: {hp:5}
	},
	hp_laststrike: {name: 'hp_laststrike', caption: 'Последний удар', description: 'Ценой всей силы духа увеличивает урон на один удар. Нанеся врагу физический урон, вы погибаете.', school: 'fight',
		required: {level:4},
		resources: {hp:3},
		consumes: {spiritlevel:'100%'}
	},
	hp_regen: {name: 'hp_regen', caption: 'Утереть пот', description: 'Вы восстанавливаете 2*ваш уровень НP. Сила Духа не тратится.', school: 'fight',
		required: {level:2},
		resources: {hp:5}
	},
	hp_travma: {name: 'hp_travma', caption: 'Искалечить', description: 'По окончанию боя, противник может получить травму при поражении. Не работает на монстрах.', school: 'fight',
		required: {level:5},
		resources: {hp:10}
	},
	/*hp_trade: {name: 'hp_trade', caption: 'Разделить Кровь', description: 'Цель получает <img width=8 height=8 src="hp.gif">1', school: 'fight',
		required: {level:7},
		resources: {hp:3}
	},*/
	wis_air_chaincure05: {name: 'wis_air_chaincure05', caption: 'Цепь Исцеления [5]', spendsMove : true,
		action: 'Восстанавливает 1-3 целям 1-126 HP магией Воздуха.', iname: 'wis_air_chaincure08', school: 'air',
		required: {level:5,intellect:20,airmagicskill:5},
		resources: {hp:1},
		consumes: {mana:46},
		delay: 3,
		healing: {mincount:1,maxcount:3,minhitpoints:1,maxhitpoints:126}
	},
	wis_air_chaincure06: {name: 'wis_air_chaincure06', caption: 'Цепь Исцеления [6]', spendsMove : true,
		action: 'Восстанавливает 1-3 целям 1-152 HP магией Воздуха.', iname: 'wis_air_chaincure08', school: 'air',
		required: {level:6,intellect:30,airmagicskill:6},
		resources: {hp:1},
		consumes: {mana:69},
		delay: 3,
		healing: {mincount:1,maxcount:3,minhitpoints:1,maxhitpoints:152}
	},
	wis_air_chaincure07: {name: 'wis_air_chaincure07', caption: 'Цепь Исцеления [7]', spendsMove : true,
		action: 'Восстанавливает 1-3 целям 1-183 HP магией Воздуха.', iname: 'wis_air_chaincure08', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		resources: {hp:1},
		consumes: {mana:104},
		delay: 3,
		healing: {mincount:1,maxcount:3,minhitpoints:1,maxhitpoints:183}
	},
	wis_air_chaincure08: {name: 'wis_air_chaincure08', caption: 'Цепь Исцеления [8]', spendsMove : true,
		action: 'Восстанавливает 1-3 целям 1-219 HP магией Воздуха.', school: 'air',
		required: {level:8,intellect:50,airmagicskill:8},
		resources: {hp:1},
		consumes: {mana:124},
		delay: 3,
		healing: {mincount:1,maxcount:3,minhitpoints:1,maxhitpoints:219}
	},
	wis_air_chaincure09: {name: 'wis_air_chaincure09', caption: 'Цепь Исцеления [9]', spendsMove : true,
		action: 'Восстанавливает 1-3 целям 1-263 HP магией Воздуха.', iname: 'wis_air_chaincure08', school: 'air',
		required: {level:9,intellect:60,airmagicskill:9},
		resources: {hp:1},
		consumes: {mana:149},
		delay: 3,
		healing: {mincount:1,maxcount:3,minhitpoints:1,maxhitpoints:263}
	},
	wis_air_chaincure10: {name: 'wis_air_chaincure10', caption: 'Цепь Исцеления [10]', spendsMove : true,
		action: 'Восстанавливает 1-3 целям 1-316 HP магией Воздуха.', iname: 'wis_air_chaincure08', school: 'air',
		required: {level:10,intellect:75,airmagicskill:10},
		resources: {hp:1},
		consumes: {mana:179},
		delay: 3,
		healing: {mincount:1,maxcount:3,minhitpoints:1,maxhitpoints:316}
	},
	wis_air_chaincure11: {name: 'wis_air_chaincure11', caption: 'Цепь Исцеления [11]', spendsMove : true,
		action: 'Восстанавливает 1-3 целям 1-380 HP магией Воздуха.', iname: 'wis_air_chaincure08', school: 'air',
		required: {intellect:100,airmagicskill:11,level:11},
		resources: {hp:1},
		consumes: {mana:215},
		delay: 3,
		healing: {mincount:1,maxcount:3,minhitpoints:1,maxhitpoints:380}
	},
	wis_air_chainlight06: {name: 'wis_air_chainlight06', caption: 'Цепь Молний [6]', spendsMove : true,
		action: 'Наносит 2-5 целям 1-46 урона электричеством.', iname: 'wis_air_chainlight08', school: 'air',
		required: {level:6,intellect:30,airmagicskill:6},
		consumes: {mana:71},
		delay: 3,
		attack: {mincount:2,maxcount:5,mindamage:1,maxdamage:46}
	},
	wis_air_chainlight07: {name: 'wis_air_chainlight07', caption: 'Цепь Молний [7]', spendsMove : true,
		action: 'Наносит 2-5 целям 1-55 урона электричеством.', iname: 'wis_air_chainlight08', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		consumes: {mana:107},
		delay: 3,
		attack: {mincount:2,maxcount:5,mindamage:1,maxdamage:55}
	},
	wis_air_chainlight08: {name: 'wis_air_chainlight08', caption: 'Цепь Молний [8]', spendsMove : true,
		action: 'Наносит 2-5 целям 1-67 урона электричеством.', school: 'air',
		required: {level:8,intellect:50,airmagicskill:8},
		consumes: {mana:128},
		delay: 3,
		attack: {mincount:2,maxcount:5,mindamage:1,maxdamage:67}
	},
	wis_air_chainlight09: {name: 'wis_air_chainlight09', caption: 'Цепь Молний [9]', spendsMove : true,
		action: 'Наносит 2-5 целям 1-81 урона электричеством.', iname: 'wis_air_chainlight08', school: 'air',
		required: {level:9,intellect:60,airmagicskill:9},
		consumes: {mana:154},
		delay: 3,
		attack: {mincount:2,maxcount:5,mindamage:1,maxdamage:81}
	},
	wis_air_chainlight10: {name: 'wis_air_chainlight10', caption: 'Цепь Молний [10]', spendsMove : true,
		action: 'Наносит 2-5 целям 1-97 урона электричеством.', iname: 'wis_air_chainlight08', school: 'air',
		required: {level:10,intellect:75,airmagicskill:10},
		consumes: {mana:185},
		delay: 3,
		attack: {mincount:2,maxcount:5,mindamage:1,maxdamage:97}
	},
	wis_air_chainlight11: {name: 'wis_air_chainlight11', caption: 'Цепь Молний [11]', spendsMove : true,
		action: 'Наносит 2-5 целям 1-116 урона электричеством.', iname: 'wis_air_chainlight08', school: 'air',
		required: {level:11,intellect:100,airmagicskill:11},
		consumes: {mana:222},
		delay: 3,
		attack: {mincount:2,maxcount:5,mindamage:1,maxdamage:116}
	},
	wis_air_shaft04: {name: 'wis_air_shaft04', caption: 'Молния [4]', spendsMove : true,
		action: 'Наносит цели 1-55 урона электричеством', iname: 'wis_air_shaft08', school: 'air',
		required: {level:4,intellect:15,airmagicskill:4},
		consumes: {mana:15},
		delay: 1,
		attack: {mindamage:1,maxdamage:55}
	},
	wis_air_shaft05: {name: 'wis_air_shaft05', caption: 'Молния [5]', spendsMove : true,
		action: 'Наносит цели 1-66 урона электричеством', iname: 'wis_air_shaft08', school: 'air',
		required: {level:5,intellect:20,airmagicskill:5},
		consumes: {mana:23},
		delay: 1,
		attack: {mindamage:1,maxdamage:66}
	},
	wis_air_shaft06: {name: 'wis_air_shaft06', caption: 'Молния [6]', spendsMove : true,
		action: 'Наносит цели 1-79 урона электричеством', iname: 'wis_air_shaft08', school: 'air',
		required: {level:6,intellect:30,airmagicskill:6},
		consumes: {mana:34},
		delay: 1,
		attack: {mindamage:1,maxdamage:79}
	},
	wis_air_shaft07: {name: 'wis_air_shaft07', caption: 'Молния [7]', spendsMove : true,
		action: 'Наносит цели 1-97 урона электричеством', iname: 'wis_air_shaft08', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		consumes: {mana:52},
		delay: 1,
		attack: {mindamage:1,maxdamage:97}
	},
	wis_air_shaft08: {name: 'wis_air_shaft08', caption: 'Молния [8]', spendsMove : true,
		action: 'Наносит цели 1-115 урона электричеством', school: 'air',
		required: {level:8,intellect:50,airmagicskill:8},
		consumes: {mana:62},
		delay: 1,
		attack: {mindamage:1,maxdamage:115}
	},
	wis_air_shaft09: {name: 'wis_air_shaft09', caption: 'Молния [9]', spendsMove : true,
		action: 'Наносит цели 1-139 урона электричеством', iname: 'wis_air_shaft08', school: 'air',
		required: {level:9,intellect:60,airmagicskill:9},
		consumes: {mana:74},
		delay: 1,
		attack: {mindamage:1,maxdamage:139}
	},
	wis_air_shaft10: {name: 'wis_air_shaft10', caption: 'Молния [10]', spendsMove : true,
		action: 'Наносит цели 1-167 урона электричеством', iname: 'wis_air_shaft08', school: 'air',
		required: {level:10,intellect:75,airmagicskill:10},
		consumes: {mana:89},
		delay: 1,
		attack: {mindamage:1,maxdamage:167}
	},
	wis_air_shaft11: {name: 'wis_air_shaft11', caption: 'Молния [11]', spendsMove : true,
		action: 'Наносит цели 1-200 урона электричеством', iname: 'wis_air_shaft08', school: 'air',
		required: {level:11,intellect:100,airmagicskill:11},
		consumes: {mana:107},
		delay: 1,
		attack: {mindamage:1,maxdamage:200}
	},
	wis_air_sparks08: {name: 'wis_air_sparks08', caption: 'Искры [8]', 
		action: 'Наносит 1-7 целям 1-54 урона электричеством', school: 'air',
		required: {level:8,intellect:50,airmagicskill:8},
		consumes: {mana:117},
		delay: 16,
		attack: {mincount:1,maxcount:7,mindamage:1,maxdamage:54}
	},
	wis_air_sparks09: {name: 'wis_air_sparks09', caption: 'Искры [9]', 
		action: 'Наносит 1-7 целям 1-66 урона электричеством', iname: 'wis_air_sparks08', school: 'air',
		required: {level:9,intellect:60,airmagicskill:9},
		consumes: {mana:140},
		delay: 16,
		attack: {mincount:1,maxcount:7,mindamage:1,maxdamage:66}
	},
	wis_air_sparks10: {name: 'wis_air_sparks10', caption: 'Искры [10]', 
		action: 'Наносит 1-7 целям 1-79 урона электричеством', iname: 'wis_air_sparks08', school: 'air',
		required: {level:10,intellect:75,airmagicskill:10},
		consumes: {mana:168},
		delay: 16,
		attack: {mincount:1,maxcount:7,mindamage:1,maxdamage:79}
	},
	wis_air_sparks11: {name: 'wis_air_sparks11', caption: 'Искры [11]', 
		action: 'Наносит 1-7 целям 1-95 урона электричеством', iname: 'wis_air_sparks08', school: 'air',
		required: {level:11,intellect:100,airmagicskill:11},
		consumes: {mana:202},
		delay: 16,
		attack: {mincount:1,maxcount:7,mindamage:1,maxdamage:95}
	},
	wis_air_mark: {name: 'wis_air_mark', caption: 'Цель Воздуха', 
		action: 'Уменьшает сопротивляемость воздействию Магии Воздуха. Можно применить на одну цель до 5 раз.', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		resources: {},
		delay: 1,
		consumes: {mana:20,spiritlevel:0.5}
	},
	wis_air_sign: {name: 'wis_air_sign', caption: 'Знак Воздуха', 
		action: 'Маг получает 10 маны каждый ход.<br>Стоимость всех заклинаний снижена на 3%.', school: 'air',
		required: {level:4,intellect:25,airmagicskill:2},
		resources: {},
		consumes: {mana:11,spiritlevel:1}
	},
	wis_air_shield07: {name: 'wis_air_shield07', caption: 'Туманный Образ [7]', 
		action: 'Все атаки по вам в следующем размене будут отражены в случайного союзника (в том числе и в вас).<br>Прием не подвержен действию шока.', iname: 'wis_air_shield08', school: 'air',
		required: {level:7,intellect:20,airmagicskill:7},
		resources: {hp:1},
		delay: 8,
		consumes: {mana:80}
	},
	wis_air_shield08: {name: 'wis_air_shield08', caption: 'Туманный Образ [8]', 
		action: 'Следующая атака по вам будет отражена в случайного противника или союзника.<br>Прием не подвержен действию шока.', school: 'air',
		required: {level:8,intellect:40,airmagicskill:8},
		resources: {hp:1},
		delay: 8,
		consumes: {mana:160}
	},
	wis_air_shield09: {name: 'wis_air_shield09', caption: 'Туманный Образ [9]', 
		action: 'Следующая атака по вам будет отражена в случайного противника.<br>Прием не подвержен действию шока.', iname: 'wis_air_shield08', school: 'air',
		required: {level:9,intellect:60,airmagicskill:9},
		resources: {hp:1},
		delay: 8,
		consumes: {mana:240}
	},
	wis_air_shield10: {name: 'wis_air_shield10', caption: 'Туманный Образ [10]', 
		action: 'Следующая атака по вам будет отражена обратно в атакующего.<br>Прием не подвержен действию шока.', iname: 'wis_air_shield08', school: 'air',
		required: {level:10,intellect:80,airmagicskill:10},
		resources: {hp:1},
		delay: 8,
		consumes: {mana:240}
	},
	wis_earth_gravity07: {name: 'wis_earth_gravity07', caption: 'Гравитация [7]', description: 'Наносит цели 10% урона магией Земли от ее текущего уровня жизни. Заклинание не может нанести более 170 ед. урона. урона.', iname: 'wis_earth_gravity08', school: 'earth',
		required: {level:7,intellect:40,earthmagicskill:7},
		consumes: {mana:65}
	},
	wis_earth_gravity08: {name: 'wis_earth_gravity08', caption: 'Гравитация [8]', description: 'Наносит цели 10% урона от её текущего уровня жизни. Заклинание не может нанести более 204 ед. урона.', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		consumes: {mana:78}
	},
	wis_earth_gravity09: {name: 'wis_earth_gravity09', caption: 'Гравитация [9]', description: 'Наносит цели 10% урона от её текущего уровня жизни. Заклинание не может нанести более 244 ед. урона.', iname: 'wis_earth_gravity08', school: 'earth',
		required: {level:9,intellect:60,earthmagicskill:9},
		consumes: {mana:93}
	},
	wis_earth_gravity10: {name: 'wis_earth_gravity10', caption: 'Гравитация [10]', description: 'Наносит цели 10% урона от её текущего уровня жизни. Заклинание не может нанести более 293 ед. урона.', iname: 'wis_earth_gravity08', school: 'earth',
		required: {level:10,intellect:75,earthmagicskill:10},
		consumes: {mana:112}
	},
	wis_earth_gravity11: {name: 'wis_earth_gravity11', caption: 'Гравитация [11]', description: 'Наносит цели 10% урона от её текущего уровня жизни. Заклинание не может нанести более 352 ед. урона.', iname: 'wis_earth_gravity08', school: 'earth',
		required: {level:11,intellect:100,earthmagicskill:11},
		consumes: {mana:134}
	},
	wis_earth_heal05: {name: 'wis_earth_heal05', caption: 'Дух Природы [5]', description: 'Восстанавливает 5 целям уровень жизни магией земли', iname: 'wis_earth_heal08', school: 'earth',
		required: {level:5,intellect:20,earthmagicskill:5},
		resources: {hp:1},
		consumes: {mana:23},
		healing: {count:5,hitpoints:11,selfhitpoints:23}
	},
	wis_earth_heal06: {name: 'wis_earth_heal06', caption: 'Дух Природы [6]', description: 'Восстанавливает 5 целям уровень жизни магией земли', iname: 'wis_earth_heal08', school: 'earth',
		required: {level:6,intellect:30,earthmagicskill:6},
		resources: {hp:1},
		consumes: {mana:34},
		healing: {count:5,hitpoints:13,selfhitpoints:27}
	},
	wis_earth_heal07: {name: 'wis_earth_heal07', caption: 'Дух Природы [7]', description: 'Восстанавливает 5 целям уровень жизни магией земли', iname: 'wis_earth_heal08', school: 'earth',
		required: {level:7,intellect:40,earthmagicskill:7},
		resources: {hp:1},
		consumes: {mana:52},
		healing: {count:5,hitpoints:16,selfhitpoints:33}
	},
	wis_earth_heal08: {name: 'wis_earth_heal08', caption: 'Дух Природы [8]', description: 'Восстанавливает 5 целям уровень жизни магией земли', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {hp:1},
		consumes: {mana:78},
		healing: {count:5,hitpoints:19,selfhitpoints:39}
	},
	wis_earth_heal09: {name: 'wis_earth_heal09', caption: 'Дух Природы [9]', description: 'Восстанавливает 5 целям уровень жизни магией земли', iname: 'wis_earth_heal08', school: 'earth',
		required: {level:9,intellect:60,earthmagicskill:9},
		resources: {hp:1},
		consumes: {mana:93},
		healing: {count:5,hitpoints:23,selfhitpoints:47}
	},
	wis_earth_heal10: {name: 'wis_earth_heal10', caption: 'Дух Природы [10]', description: 'Восстанавливает 5 целям уровень жизни магией земли', iname: 'wis_earth_heal08', school: 'earth',
		required: {level:10,intellect:75,earthmagicskill:10},
		resources: {hp:1},
		consumes: {mana:112},
		healing: {count:5,hitpoints:28,selfhitpoints:57}
	},
	wis_earth_heal11: {name: 'wis_earth_heal11', caption: 'Дух Природы [11]', description: 'Восстанавливает 5 целям уровень жизни магией земли', iname: 'wis_earth_heal08', school: 'earth',
		required: {level:11,intellect:100,earthmagicskill:11},
		resources: {hp:1},
		consumes: {mana:134},
		healing: {count:5,hitpoints:34,selfhitpoints:68}
	},
	wis_earth_meteor06: {name: 'wis_earth_meteor06', caption: 'Метеорит [6]', description: 'Наносит цели урон через три хода', iname: 'wis_earth_meteor08', school: 'earth',
		required: {level:6,intellect:30,earthmagicskill:6},
		consumes: {mana:17},
		attack: {mindamage:46,maxdamage:49}
	},
	wis_earth_meteor07: {name: 'wis_earth_meteor07', caption: 'Метеорит [7]', description: 'Наносит цели урон через три хода', iname: 'wis_earth_meteor08', school: 'earth',
		required: {level:7,intellect:40,earthmagicskill:7},
		consumes: {mana:26},
		attack: {mindamage:55,maxdamage:59}
	},
	wis_earth_meteor08: {name: 'wis_earth_meteor08', caption: 'Метеорит [8]', description: 'Наносит цели урон через три хода', iname: 'wis_earth_meteor08', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		consumes: {mana:31},
		attack: {mindamage:66,maxdamage:71}
	},
	wis_earth_meteor09: {name: 'wis_earth_meteor09', caption: 'Метеорит [9]', description: 'Наносит цели урон через три хода', iname: 'wis_earth_meteor08', school: 'earth',
		required: {level:9,intellect:60,earthmagicskill:9},
		consumes: {mana:37},
		attack: {mindamage:79,maxdamage:86}
	},
	wis_earth_meteor10: {name: 'wis_earth_meteor10', caption: 'Метеорит [10]', description: 'Наносит цели урон через три хода', iname: 'wis_earth_meteor08', school: 'earth',
		required: {level:10,intellect:75,earthmagicskill:10},
		consumes: {mana:44},
		attack: {mindamage:95,maxdamage:103}
	},
	wis_earth_meteor11: {name: 'wis_earth_meteor11', caption: 'Метеорит [11]', description: 'Наносит цели урон через три хода', iname: 'wis_earth_meteor08', school: 'earth',
		required: {level:11,intellect:100,earthmagicskill:11},
		consumes: {mana:53},
		attack: {mindamage:114,maxdamage:124}
	},
	wis_earth_rain05: {name: 'wis_earth_rain05', caption: 'Каменный Дождь [5]', description: 'Наносит 8 целям урон магией земли', iname: 'wis_earth_rain08', school: 'earth',
		required: {level:5,intellect:20,earthmagicskill:5},
		consumes: {mana:52},
		attack: {count:8,damage:7}
	},
	wis_earth_rain06: {name: 'wis_earth_rain06', caption: 'Каменный Дождь [6]', description: 'Наносит 8 целям урон магией земли', iname: 'wis_earth_rain08', school: 'earth',
		required: {level:6,intellect:30,earthmagicskill:6},
		consumes: {mana:78},
		attack: {count:8,damage:9}
	},
	wis_earth_rain07: {name: 'wis_earth_rain07', caption: 'Каменный Дождь [7]', description: 'Наносит 8 целям урон магией земли', iname: 'wis_earth_rain08', school: 'earth',
		required: {level:7,intellect:40,earthmagicskill:7},
		consumes: {mana:99},
		attack: {count:8,damage:11}
	},
	wis_earth_rain08: {name: 'wis_earth_rain08', caption: 'Каменный Дождь [8]', description: 'Наносит 8 целям урон магией земли', iname: 'wis_earth_rain08', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		consumes: {mana:140},
		attack: {count:8,damage:13}
	},
	wis_earth_rain09: {name: 'wis_earth_rain09', caption: 'Каменный Дождь [9]', description: 'Наносит 8 целям урон магией земли', iname: 'wis_earth_rain08', school: 'earth',
		required: {level:9,intellect:60,earthmagicskill:9},
		consumes: {mana:168},
		attack: {count:8,damage:16}
	},
	wis_earth_rain10: {name: 'wis_earth_rain10', caption: 'Каменный Дождь [10]', description: 'Наносит 8 целям урон магией земли', iname: 'wis_earth_rain08', school: 'earth',
		required: {level:10,intellect:75,earthmagicskill:10},
		consumes: {mana:202},
		attack: {count:8,damage:19}
	},
	wis_earth_rain11: {name: 'wis_earth_rain11', caption: 'Каменный Дождь [11]', description: 'Наносит 8 целям урон магией земли', iname: 'wis_earth_rain08', school: 'earth',
		required: {level:11,intellect:100,earthmagicskill:11},
		consumes: {mana:242},
		attack: {count:8,damage:23}
	},
	wis_earth_mark: {name: 'wis_earth_mark', caption: 'Цель Земли', description: 'Уменьшает сопротивляемость воздействию Магии Земли. Можно применить на одну цель до 5 раз.', school: 'earth',
		required: {level:7,intellect:40,earthmagicskill:7},
		resources: {},
		consumes: {mana:20,spiritlevel:0.5}
	},
	wis_earth_sign: {name: 'wis_earth_sign', caption: 'Знак Земли', description: 'Цель получает +0 брони. Заклинание требует 10 маны каждый ход.', school: 'earth',
		required: {level:4,intellect:25,earthmagicskill:1},
		resources: {},
		consumes: {mana:100,spiritlevel:1}
	},
	wis_earth_strike07: {name: 'wis_earth_strike07', caption: 'Каменный Удар [7]', description: 'Наносит одной цели дробящий урон.', iname: 'wis_earth_strike', school: 'earth',
		required: {level:7,intellect:40,earthmagicskill:7},
		resources: {},
		consumes: {mana:75},
		attack: {damage:187}
	},
	wis_earth_strike08: {name: 'wis_earth_strike08', caption: 'Каменный Удар [8]', description: 'Наносит одной цели дробящий урон.', iname: 'wis_earth_strike', school: 'earth',
		required: {level:7,intellect:60,earthmagicskill:7},
		resources: {},
		consumes: {mana:90},
		attack: {damage:224}
	},
	wis_earth_cleance: {name: 'wis_earth_cleance', caption: 'Коснуться Земли', description: 'Снимает один негативный эффект от магии или болезни и восстанавливает 3% маны.', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {},
		consumes: {mana:50}
	},
	wis_earth_dmg04: {name: 'wis_earth_dmg04', caption: 'Булыжник [4]', description: 'Наносит цели урон магией земли.', iname: 'wis_earth_dmg08', school: 'earth',
		required: {level:4,intellect:15,earthmagicskill:4},
		resources: {},
		consumes: {mana:11},
		attack: {mindamage:17,maxdamage:19}
	},
	wis_earth_dmg05: {name: 'wis_earth_dmg05', caption: 'Булыжник [5]', description: 'Наносит цели урон магией земли.', iname: 'wis_earth_dmg08', school: 'earth',
		required: {level:5,intellect:20,earthmagicskill:5},
		resources: {},
		consumes: {mana:17},
		attack: {mindamage:20,maxdamage:23}
	},
	wis_earth_dmg06: {name: 'wis_earth_dmg06', caption: 'Булыжник [6]', description: 'Наносит цели урон магией земли.', iname: 'wis_earth_dmg08', school: 'earth',
		required: {level:6,intellect:30,earthmagicskill:6},
		resources: {},
		consumes: {mana:26},
		attack: {mindamage:24,maxdamage:28}
	},
	wis_earth_dmg07: {name: 'wis_earth_dmg07', caption: 'Булыжник [7]', description: 'Наносит цели урон магией земли.', iname: 'wis_earth_dmg08', school: 'earth',
		required: {level:7,intellect:40,earthmagicskill:7},
		resources: {},
		consumes: {mana:39},
		attack: {mindamage:29,maxdamage:34}
	},
	wis_earth_dmg08: {name: 'wis_earth_dmg08', caption: 'Булыжник [8]', description: 'Наносит цели урон магией земли.', iname: 'wis_earth_dmg08', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {},
		consumes: {mana:46},
		attack: {mindamage:35,maxdamage:41}
	},
	wis_earth_dmg09: {name: 'wis_earth_dmg09', caption: 'Булыжник [9]', description: 'Наносит цели урон магией земли.', iname: 'wis_earth_dmg08', school: 'earth',
		required: {level:9,intellect:60,earthmagicskill:9},
		resources: {},
		consumes: {mana:56},
		attack: {mindamage:43,maxdamage:49}
	},
	wis_earth_dmg10: {name: 'wis_earth_dmg10', caption: 'Булыжник [10]', description: 'Наносит цели урон магией земли.', iname: 'wis_earth_dmg08', school: 'earth',
		required: {level:10,intellect:75,earthmagicskill:10},
		resources: {},
		consumes: {mana:67},
		attack: {mindamage:51,maxdamage:59}
	},
	wis_earth_dmg11: {name: 'wis_earth_dmg11', caption: 'Булыжник [11]', description: 'Наносит цели урон магией земли.', iname: 'wis_earth_dmg08', school: 'earth',
		required: {level:11,intellect:100,earthmagicskill:11},
		resources: {},
		consumes: {mana:80},
		attack: {mindamage:62,maxdamage:71}
	},
	wis_earth_flower8: {name: 'wis_earth_flower8', caption: 'Каменный Цветок [8]', description: 'Цель получает урон магией земли и лишается возможности использовать приемы 1 ход.<br>Еще 3 цели получают треть урона магией земли', iname: 'wis_earth_flower', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {hp:1},
		consumes: {mana:128},
		attack: {count:3,damage:44}
	},
	wis_earth_flower9: {name: 'wis_earth_flower9', caption: 'Каменный Цветок [9]', description: 'Цель получает урон магией земли и лишается возможности использовать приемы 1 ход. <br>Еще 3 цели получают треть урона магией земли', iname: 'wis_earth_flower', school: 'earth',
		required: {level:9,intellect:60,earthmagicskill:9},
		resources: {hp:1},
		consumes: {mana:154},
		attack: {count:3,damage:52}
	},
	wis_earth_flower10: {name: 'wis_earth_flower10', caption: 'Каменный Цветок [10]', description: 'Цель получает урон магией земли и лишается возможности использовать приемы 1 ход.<br> Еще 3 цели получают треть урона магией земли', iname: 'wis_earth_flower', school: 'earth',
		required: {level:10,intellect:75,earthmagicskill:10},
		resources: {hp:1},
		consumes: {mana:185},
		attack: {count:3,damage:63}
	},
	wis_earth_flower11: {name: 'wis_earth_flower11', caption: 'Каменный Цветок [11]', description: 'Цель получает урон магией земли и лишается возможности использовать приемы 1 ход.<br> Еще 3 цели получают треть урона магией земли', iname: 'wis_earth_flower', school: 'earth',
		required: {level:11,intellect:100,earthmagicskill:11},
		resources: {hp:1},
		consumes: {mana:222},
		attack: {count:3,damage:76}
	},
	wis_earth_link_minus: {name: 'wis_earth_link_minus', caption: 'Заземление: Минус', description: 'Цель теряет 79 маны за 10 ходов. Разные виды Заземления замещают друг друга. <br>Маг в состоянии поддерживать лишь одно Заземление. Требует 1 маны каждый ход. <br>Применяется до 5 раз.Прием не подвержен действию шока.', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {},
		consumes: {mana:16}
	},
	wis_earth_link_plus: {name: 'wis_earth_link_plus', caption: 'Заземление: Плюс', description: 'Исцеляет мага на 39HP за 10 ходов за счет жизни цели. Разные виды Заземления замещают друг друга. <br>Маг в состоянии поддерживать лишь одно Заземление. Требует 1 маны каждый ход. <br>Применяется до 5 раз.Прием не подвержен действию шока.', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {},
		consumes: {mana:16}
	},
	wis_earth_link_zero: {name: 'wis_earth_link_zero', caption: 'Заземление: Ноль', description: 'Увеличивает весь урон по цели на 3% и уменьшает целебные эффекты на 7%. Разные виды Заземления замещают друг друга. <br>Маг в состоянии поддерживать лишь одно Заземление. Требует 1 маны каждый ход. <br>Применяется до 5 раз.Прием не подвержен действию шока.', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {},
		consumes: {mana:16}
	},
	wis_earth_sacrifice: {name: 'wis_earth_sacrifice', caption: 'Жертва Земле', description: 'Вы восстанавливаете 5%HP и 5%маны.', school: 'earth',
		required: {level:7,intellect:40,earthmagicskill:7},
		resources: {hp:5},
		consumes: {mana:5}
	},
	wis_earth_shield: {name: 'wis_earth_shield', caption: 'Каменный Щит', description: 'Вы получаете на 95% меньше урона в этот размен.<br>Прием не подвержен действию шока.', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {},
		consumes: {mana:150}
	},
	wis_earth_shield2: {name: 'wis_earth_shield2', caption: 'Песчаный Щит', description: 'Вы получаете на 30% меньше урона от магии в течение 5 ходов.<br>Прием не подвержен действию шока.', school: 'earth',
		required: {level:8,intellect:50,earthmagicskill:8},
		resources: {},
		consumes: {mana:150}
	},
	wis_earth_summon: {name: 'wis_earth_summon', caption: 'Призвать Каменного Стража', description: 'Призывает в бой Каменного Стража для защиты мага. Страж нуждается в 10 маны каждый ход.', school: 'earth',
		required: {level:8,earthmagicskill:12},
		resources: {},
		consumes: {mana:200}
	},
	wis_fire_burst08: {name: 'wis_fire_burst08', caption: 'Вспышка [8]', description: 'Мгновенно наносит цели урон огнем. Урон увеличен на 5% за каждую Цель Огня присутствующую на жертве.', school: 'fire',
		required: {level:8,intellect:50,firemagicskill:8},
		consumes: {mana:70},
		attack: {damage:33}
	},
	wis_fire_burst09: {name: 'wis_fire_burst09', caption: 'Вспышка [9]', description: 'Мгновенно наносит цели урон огнем. Урон увеличен на 5% за каждую Цель Огня присутствующую на жертве.', iname: 'wis_fire_burst08', school: 'fire',
		required: {level:9,intellect:60,firemagicskill:9},
		consumes: {mana:84},
		attack: {damage:39}
	},
	wis_fire_burst10: {name: 'wis_fire_burst10', caption: 'Вспышка [10]', description: 'Мгновенно наносит цели урон огнем. Урон увеличен на 5% за каждую Цель Огня присутствующую на жертве.', iname: 'wis_fire_burst08', school: 'fire',
		required: {level:10,intellect:75,firemagicskill:10},
		consumes: {mana:101},
		attack: {damage:47}
	},
	wis_fire_burst11: {name: 'wis_fire_burst11', caption: 'Вспышка [11]', description: 'Мгновенно наносит цели урон огнем. Урон увеличен на 5% за каждую Цель Огня присутствующую на жертве.', iname: 'wis_fire_burst08', school: 'fire',
		required: {level:11,intellect:100,firemagicskill:11},
		consumes: {mana:121},
		attack: {damage:57}
	},
	wis_fire_heal05: {name: 'wis_fire_heal05', caption: 'Тепло Жизни [5]', description: 'Исцеляет цель магией огня. Эффект выше при применении на себя.', iname: 'wis_fire_heal08', school: 'fire',
		required: {level:5,intellect:20,firemagicskill:5},
		resources: {hp:1},
		consumes: {mana:40},
		healing: {minhitpoints:37,maxhitpoints:42}
	},
	wis_fire_heal06: {name: 'wis_fire_heal06', caption: 'Тепло Жизни [6]', description: 'Исцеляет цель магией огня. Эффект выше при применении на себя.', iname: 'wis_fire_heal08', school: 'fire',
		required: {level:6,intellect:30,firemagicskill:6},
		resources: {hp:1},
		consumes: {mana:60},
		healing: {minhitpoints:44,maxhitpoints:51}
	},
	wis_fire_heal07: {name: 'wis_fire_heal07', caption: 'Тепло Жизни [7]', description: 'Исцеляет цель магией огня. Эффект выше при применении на себя.', iname: 'wis_fire_heal08', school: 'fire',
		required: {level:7,intellect:40,firemagicskill:7},
		resources: {hp:1},
		consumes: {mana:91},
		healing: {minhitpoints:53,maxhitpoints:61}
	},
	wis_fire_heal08: {name: 'wis_fire_heal08', caption: 'Тепло Жизни [8]', description: 'Исцеляет цель магией огня. Эффект выше при применении на себя.', iname: 'wis_fire_heal08', school: 'fire',
		required: {level:8,intellect:50,firemagicskill:8},
		resources: {hp:1},
		consumes: {mana:109},
		healing: {minhitpoints:64,maxhitpoints:73}
	},
	wis_fire_heal09: {name: 'wis_fire_heal09', caption: 'Тепло Жизни [9]', description: 'Исцеляет цель магией огня. Эффект выше при применении на себя.', iname: 'wis_fire_heal08', school: 'fire',
		required: {level:9,intellect:60,firemagicskill:9},
		resources: {hp:1},
		consumes: {mana:131},
		healing: {minhitpoints:77,maxhitpoints:88}
	},
	wis_fire_heal10: {name: 'wis_fire_heal10', caption: 'Тепло Жизни [10]', description: 'Исцеляет цель магией огня. Эффект выше при применении на себя.', iname: 'wis_fire_heal08', school: 'fire',
		required: {level:10,intellect:75,firemagicskill:10},
		resources: {hp:1},
		consumes: {mana:157},
		healing: {minhitpoints:92,maxhitpoints:105}
	},
	wis_fire_heal11: {name: 'wis_fire_heal11', caption: 'Тепло Жизни [11]', description: 'Исцеляет цель магией огня. Эффект выше при применении на себя.', iname: 'wis_fire_heal08', school: 'fire',
		required: {level:11,intellect:100,firemagicskill:11},
		resources: {hp:1},
		consumes: {mana:188},
		healing: {minhitpoints:111,maxhitpoints:127}
	},
	wis_fire_flamming06: {name: 'wis_fire_flamming06', caption: 'Пожирающее Пламя [6]', description: 'Наносит цели урон огнем за пять ходов', iname: 'wis_fire_flamming08', school: 'fire',
		required: {level:6,intellect:30,firemagicskill:6},
		consumes: {mana:38},
		attack: {damage:40,nextturns:5}
	},
	wis_fire_flamming07: {name: 'wis_fire_flamming07', caption: 'Пожирающее Пламя [7]', description: 'Наносит цели урон огнем за пять ходов', iname: 'wis_fire_flamming08', school: 'fire',
		required: {level:7,intellect:40,firemagicskill:7},
		consumes: {mana:57},
		attack: {damage:48,nextturns:5}
	},
	wis_fire_flamming08: {name: 'wis_fire_flamming08', caption: 'Пожирающее Пламя [8]', description: 'Наносит цели урон огнем за пять ходов', iname: 'wis_fire_flamming08', school: 'fire',
		required: {level:8,intellect:50,firemagicskill:8},
		consumes: {mana:68},
		attack: {damage:58,nextturns:5}
	},
	wis_fire_flamming09: {name: 'wis_fire_flamming09', caption: 'Пожирающее Пламя [9]', description: 'Наносит цели урон огнем за пять ходов', iname: 'wis_fire_flamming08', school: 'fire',
		required: {level:9,intellect:60,firemagicskill:9},
		consumes: {mana:82},
		attack: {damage:69,nextturns:5}
	},
	wis_fire_flamming10: {name: 'wis_fire_flamming10', caption: 'Пожирающее Пламя [10]', description: 'Наносит цели урон огнем за пять ходов', iname: 'wis_fire_flamming08', school: 'fire',
		required: {level:10,intellect:75,firemagicskill:10},
		consumes: {mana:98},
		attack: {damage:83,nextturns:5}
	},
	wis_fire_flamming11: {name: 'wis_fire_flamming11', caption: 'Пожирающее Пламя [11]', description: 'Наносит цели урон огнем за пять ходов', iname: 'wis_fire_flamming08', school: 'fire',
		required: {level:11,intellect:100,firemagicskill:11},
		consumes: {mana:118},
		attack: {damage:100,nextturns:5}
	},
	wis_fire_incenerate04: {name: 'wis_fire_incenerate04', caption: 'Испепеление [4]', description: 'Наносит цели урон огнем', iname: 'wis_fire_incenerate08', school: 'fire',
		required: {level:4,intellect:15,firemagicskill:4},
		consumes: {mana:15},
		attack: {damage:21}
	},
	wis_fire_incenerate05: {name: 'wis_fire_incenerate05', caption: 'Испепеление [5]', description: 'Наносит цели урон огнем', iname: 'wis_fire_incenerate08', school: 'fire',
		required: {level:5,intellect:20,firemagicskill:5},
		consumes: {mana:23},
		attack: {damage:25}
	},
	wis_fire_incenerate06: {name: 'wis_fire_incenerate06', caption: 'Испепеление [6]', description: 'Наносит цели урон огнем', iname: 'wis_fire_incenerate08', school: 'fire',
		required: {level:6,intellect:30,firemagicskill:6},
		consumes: {mana:34},
		attack: {damage:30}
	},
	wis_fire_incenerate07: {name: 'wis_fire_incenerate07', caption: 'Испепеление [7]', description: 'Наносит цели урон огнем', iname: 'wis_fire_incenerate08', school: 'fire',
		required: {level:7,intellect:40,firemagicskill:7},
		consumes: {mana:52},
		attack: {damage:36}
	},
	wis_fire_incenerate08: {name: 'wis_fire_incenerate08', caption: 'Испепеление [8]', description: 'Наносит цели урон огнем', iname: 'wis_fire_incenerate08', school: 'fire',
		required: {level:8,intellect:50,firemagicskill:8},
		consumes: {mana:62},
		attack: {damage:44}
	},
	wis_fire_incenerate09: {name: 'wis_fire_incenerate09', caption: 'Испепеление [9]', description: 'Наносит цели урон огнем', iname: 'wis_fire_incenerate08', school: 'fire',
		required: {level:9,intellect:60,firemagicskill:9},
		consumes: {mana:74},
		attack: {damage:52}
	},
	wis_fire_incenerate10: {name: 'wis_fire_incenerate10', caption: 'Испепеление [10]', description: 'Наносит цели урон огнем', iname: 'wis_fire_incenerate08', school: 'fire',
		required: {level:10,intellect:75,firemagicskill:10},
		consumes: {mana:89},
		attack: {damage:63}
	},
	wis_fire_incenerate11: {name: 'wis_fire_incenerate11', caption: 'Испепеление [11]', description: 'Наносит цели урон огнем', iname: 'wis_fire_incenerate08', school: 'fire',
		required: {level:11,intellect:100,firemagicskill:11},
		consumes: {mana:107},
		attack: {damage:76}
	},
	wis_fire_mark: {name: 'wis_fire_mark', caption: 'Цель Огня', description: 'Уменьшает сопротивляемость воздействию Магии Огня. Можно применить на одну цель до 5 раз.', school: 'fire',
		required: {level:7,intellect:40,firemagicskill:7},
		resources: {},
		consumes: {mana:20,spiritlevel:0.5}
	},
	wis_fire_sign: {name: 'wis_fire_sign', caption: 'Знак Огня', description: 'Маг получает +n мф. мощности магии стихий. Заклинание требует 10 маны каждый ход.', school: 'fire',
		required: {level:4,intellect:25,firemagicskill:2},
		resources: {},
		consumes: {mana:100,spiritlevel:1}
	},
	wis_fire_flameshock: {name: 'wis_fire_flameshock', caption: 'Пылающий Ужас', description: 'Высвобождает энергию вашего заклятия Пожирающее Пламя на цели. Цель получает урон огнем и не может использовать приемы или набирать очки тактики 2 хода.', school: 'fire',
		required: {level:7,intellect:40,firemagicskill:7},
		consumes: {mana:200}
	},
	wis_fire_flamedestroy: {name: 'wis_fire_flamedestroy', caption: 'Пылающий взрыв', description: 'Высвобождает энергию вашего заклятия  Пожирающее Пламя на цели.Цель и еще 4 случайных цели получает 33% оставшегося урона Пожирающего Пламени магией Огня.', school: 'fire',
		required: {level:7,intellect:40,firemagicskill:7},
		consumes: {mana:83}
	},
	wis_fire_flamedeath: {name: 'wis_fire_flamedeath', caption: 'Пылающая смерть', description: 'Высвобождает энергию вашего заклятия  Пожирающее Пламя на цели, если её уровень жизни менее 33%.Цель получает 125% оставшегося урона Пожирающего пламени.', school: 'fire',
		required: {level:7,intellect:40,firemagicskill:7},
		consumes: {mana:83}
	},
	wis_fire_boost: {name: 'wis_fire_boost', caption: 'Разогрев', description: 'Ваше следующее огненное заклинание получит +100 мф. мощности Магии Огня.Не подвержен шоку.', school: 'fire',
		required: {level:7,intellect:25,firemagicskill:7},
		consumes: {mana:25}
	},
	wis_fire_sacrifice: {name: 'wis_fire_sacrifice', caption: 'Жертва огню', description: 'Вы теряете 10%НР, но восстанавливаете 20% маны (Для использования у вас должно быть не меньше 10%НР).', school: 'fire',
		required: {level:7,intellect:40,firemagicskill:7},
		consumes: {mana:4}
	},
	wis_fire_hiddenpower: {name: 'wis_fire_hiddenpower', caption: 'Скрытое пламя', description: 'Если уровень вашей жизни ниже 33%, то при использовании убирает текущие задержки на заклинаниях школы Огня.Один раз за бой.', school: 'fire',
		required: {level:8,intellect:50,firemagicskill:8},
		consumes: {mana:83}
	},
	wis_fire_shield: {name: 'wis_fire_shield', caption: 'Огненный щит', description: 'Вы получаете на 50% меньше урона 2 последующих размена, полученный урон восстанавливает вашу ману.Не подвержен шоку.', school: 'fire',
		required: {level:8,intellect:50,firemagicskill:8},
		consumes: {mana:133}
	},
	wis_fire_flametongue08: {name: 'wis_fire_flametongue08', caption: 'Язык пламени [8]', description: 'Наносит цели 5% урона магией Огня от её Максимального уровня жизни.И ещё +2% за каждый уровень Цели Огня.Заклинание не может нанести более 300 единиц урона, не наносит критический урон. ', iname: 'wis_fire_flametongue', school: 'fire',
		required: {level:8,intellect:50,firemagicskill:8},
		consumes: {mana:109}
	},
	wis_fire_flametongue09: {name: 'wis_fire_flametongue09', caption: 'Язык пламени [9]', description: 'Наносит цели 5% урона магией Огня от её Максимального уровня жизни.И ещё +2% за каждый уровень Цели Огня.Заклинание не может нанести более 400 единиц урона, не наносит критический урон. ', iname: 'wis_fire_flametongue', school: 'fire',
		required: {level:9,intellect:60,firemagicskill:9},
		consumes: {mana:131}
	},
	wis_fire_flametongue10: {name: 'wis_fire_flametongue10', caption: 'Язык пламени [10]', description: 'Наносит цели 5% урона магией Огня от её Максимального уровня жизни.И ещё +2% за каждый уровень Цели Огня.Заклинание не может нанести более 500 единиц урона, не наносит критический урон. ', iname: 'wis_fire_flametongue', school: 'fire',
		required: {level:10,intellect:75,firemagicskill:10},
		consumes: {mana:157}
	},
	wis_water_cloud08: {name: 'wis_water_cloud08', caption: 'Ядовитое Облако [8]', description: 'Наносит 3-5 целям урон ядом за пять ходов', iname: 'wis_water_cloud08', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		consumes: {mana:156},
		attack: {mincount:3,maxcount:5,nextdamage:27,nextturns:5}
	},
	wis_water_cloud09: {name: 'wis_water_cloud09', caption: 'Ядовитое Облако [9]', description: 'Наносит 3-5 целям урон ядом за пять ходов', iname: 'wis_water_cloud08', school: 'water',
		required: {level:9,intellect:60,watermagicskill:9},
		consumes: {mana:1887},
		attack: {mincount:3,maxcount:5,nextdamage:33,nextturns:5}
	},
	wis_water_cloud10: {name: 'wis_water_cloud10', caption: 'Ядовитое Облако [10]', description: 'Наносит 3-5 целям урон ядом за пять ходов', iname: 'wis_water_cloud08', school: 'water',
		required: {level:10,intellect:75,watermagicskill:10},
		consumes: {mana:224},
		attack: {mincount:3,maxcount:5,nextdamage:39,nextturns:5}
	},
	wis_water_cloud11: {name: 'wis_water_cloud11', caption: 'Ядовитое Облако [11]', description: 'Наносит 3-5 целям урон ядом за пять ходов', iname: 'wis_water_cloud08', school: 'water',
		required: {level:11,intellect:100,watermagicskill:11},
		consumes: {mana:269},
		attack: {mincount:3,maxcount:5,nextdamage:47,nextturns:5}
	},
	wis_water_frost04: {name: 'wis_water_frost04', caption: 'Оледенение [4]', description: 'Мгновенно наносит цели урон холодом и ещё столько же за четыре хода', iname: 'wis_water_frost08', school: 'water',
		required: {level:4,intellect:15,watermagicskill:4},
		consumes: {mana:17},
		attack: {damage:19,nextdamage:3,nextturns:4}
	},
	wis_water_frost05: {name: 'wis_water_frost05', caption: 'Оледенение [5]', description: 'Мгновенно наносит цели урон холодом и ещё столько же за четыре хода', iname: 'wis_water_frost08', school: 'water',
		required: {level:5,intellect:20,watermagicskill:5},
		consumes: {mana:26},
		attack: {damage:23,nextdamage:3,nextturns:4}
	},
	wis_water_frost06: {name: 'wis_water_frost06', caption: 'Оледенение [6]', description: 'Мгновенно наносит цели урон холодом и ещё столько же за четыре хода', iname: 'wis_water_frost08', school: 'water',
		required: {level:6,intellect:30,watermagicskill:6},
		consumes: {mana:39},
		attack: {damage:27,nextdamage:4,nextturns:4}
	},
	wis_water_frost07: {name: 'wis_water_frost07', caption: 'Оледенение [7]', description: 'Мгновенно наносит цели урон холодом и ещё столько же за четыре хода', iname: 'wis_water_frost08', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		consumes: {mana:58},
		attack: {damage:33,nextdamage:26,nextturns:4}
	},
	wis_water_frost08: {name: 'wis_water_frost08', caption: 'Оледенение [8]', description: 'Мгновенно наносит цели урон холодом и ещё столько же за четыре хода', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		consumes: {mana:70},
		attack: {damage:39,nextdamage:6,nextturns:4}
	},
	wis_water_frost09: {name: 'wis_water_frost09', caption: 'Оледенение [9]', description: 'Мгновенно наносит цели урон холодом и ещё столько же за четыре хода', iname: 'wis_water_frost08', school: 'water',
		required: {level:9,intellect:60,watermagicskill:9},
		consumes: {mana:84},
		attack: {damage:47,nextdamage:7,nextturns:4}
	},
	wis_water_frost10: {name: 'wis_water_frost10', caption: 'Оледенение [10]', description: 'Мгновенно наносит цели урон холодом и ещё столько же за четыре хода', iname: 'wis_water_frost08', school: 'water',
		required: {level:10,intellect:75,watermagicskill:10},
		consumes: {mana:101},
		attack: {damage:57,nextdamage:9,nextturns:4}
	},
	wis_water_frost11: {name: 'wis_water_frost11', caption: 'Оледенение [11]', description: 'Мгновенно наносит цели урон холодом и ещё столько же за четыре хода', iname: 'wis_water_frost08', school: 'water',
		required: {level:11,intellect:100,watermagicskill:11},
		consumes: {mana:121},
		attack: {damage:68,nextdamage:11,nextturns:4}
	},
	wis_water_poison06: {name: 'wis_water_poison06', caption: 'Отравление [6]', description: 'Наносит цели урон ядом за десять ходов. Заклинание требует ману каждый ход.', iname: 'wis_water_poison08', school: 'water',
		required: {level:6,intellect:30,watermagicskill:6},
		consumes: {mana:34},
		attack: {nextdamage:61,nextturns:10}
	},
	wis_water_poison07: {name: 'wis_water_poison07', caption: 'Отравление [7]', description: 'Наносит цели урон ядом за десять ходов. Заклинание требует ману каждый ход.', iname: 'wis_water_poison08', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		consumes: {mana:52},
		attack: {nextdamage:73,nextturns:10}
	},
	wis_water_poison08: {name: 'wis_water_poison08', caption: 'Отравление [8]', description: 'Наносит цели урон ядом за десять ходов. Заклинание требует ману каждый ход.', iname: 'wis_water_poison08', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		consumes: {mana:62},
		attack: {nextdamage:88,nextturns:10}
	},
	wis_water_poison09: {name: 'wis_water_poison09', caption: 'Отравление [9]', description: 'Наносит цели урон ядом за десять ходов. Заклинание требует ману каждый ход.', iname: 'wis_water_poison08', school: 'water',
		required: {level:9,intellect:60,watermagicskill:9},
		consumes: {mana:74},
		attack: {nextdamage:105,nextturns:10}
	},
	wis_water_poison10: {name: 'wis_water_poison10', caption: 'Отравление [10]', description: 'Наносит цели урон ядом за десять ходов. Заклинание требует ману каждый ход.', iname: 'wis_water_poison08', school: 'water',
		required: {level:10,intellect:75,watermagicskill:10},
		consumes: {mana:89},
		attack: {nextdamage:127,nextturns:10}
	},
	wis_water_poison11: {name: 'wis_water_poison11', caption: 'Отравление [11]', description: 'Наносит цели урон ядом за десять ходов. Заклинание требует ману каждый ход.', iname: 'wis_water_poison08', school: 'water',
		required: {level:11,intellect:100,watermagicskill:11},
		consumes: {mana:107},
		attack: {nextdamage:152,nextturns:10}
	},
	wis_water_regen05: {name: 'wis_water_regen05', caption: 'Регенерация [5]', description: 'Восстанавливает цели за  восемь  ходов уровень жизни магией воды. Заклинание требует ману каждый ход.', iname: 'wis_water_regen08', school: 'water',
		required: {level:5,intellect:20,watermagicskill:5},
		resources: {hp:2},
		consumes: {mana:28},
		healing: {nexthitpoints:60,nextturns:8}
	},
	wis_water_regen06: {name: 'wis_water_regen06', caption: 'Регенерация [6]', description: 'Восстанавливает цели за  восемь  ходов уровень жизни магией воды. Заклинание требует ману каждый ход.', iname: 'wis_water_regen08', school: 'water',
		required: {level:6,intellect:30,watermagicskill:6},
		resources: {hp:2},
		consumes: {mana:43},
		healing: {nexthitpoints:72,nextturns:8}
	},
	wis_water_regen07: {name: 'wis_water_regen07', caption: 'Регенерация [7]', description: 'Восстанавливает цели за  восемь  ходов уровень жизни магией воды. Заклинание требует ману каждый ход.', iname: 'wis_water_regen08', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		resources: {hp:2},
		consumes: {mana:65},
		healing: {nexthitpoints:87,nextturns:8}
	},
	wis_water_regen08: {name: 'wis_water_regen08', caption: 'Регенерация [8]', description: 'Восстанавливает цели за  восемь  ходов уровень жизни магией воды. Заклинание требует ману каждый ход.', iname: 'wis_water_regen08', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		resources: {hp:2},
		consumes: {mana:78},
		healing: {nexthitpoints:104,nextturns:8}
	},
	wis_water_regen09: {name: 'wis_water_regen09', caption: 'Регенерация [9]', description: 'Восстанавливает цели за  восемь  ходов уровень жизни магией воды. Заклинание требует ману каждый ход.', iname: 'wis_water_regen08', school: 'water',
		required: {level:9,intellect:60,watermagicskill:9},
		resources: {hp:2},
		consumes: {mana:93},
		healing: {nexthitpoints:125,nextturns:8}
	},
	wis_water_regen10: {name: 'wis_water_regen10', caption: 'Регенерация [10]', description: 'Восстанавливает цели за  восемь  ходов уровень жизни магией воды. Заклинание требует ману каждый ход.', iname: 'wis_water_regen08', school: 'water',
		required: {level:10,intellect:75,watermagicskill:10},
		resources: {hp:2},
		consumes: {mana:112},
		healing: {nexthitpoints:151,nextturns:8}
	},
	wis_water_regen11: {name: 'wis_water_regen11', caption: 'Регенерация [11]', description: 'Восстанавливает цели за  восемь  ходов уровень жизни магией воды. Заклинание требует ману каждый ход.', iname: 'wis_water_regen08', school: 'water',
		required: {level:11,intellect:100,watermagicskill:11},
		resources: {hp:2},
		consumes: {mana:134},
		healing: {nexthitpoints:181,nextturns:8}
	},
	wis_water_mark: {name: 'wis_water_mark', caption: 'Цель Воды', description: 'Уменьшает сопротивляемость воздействию Магии Воды. Можно применить на одну цель до 5 раз.', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		resources: {},
		consumes: {mana:20,spiritlevel:0.5}
	},
	wis_water_sign: {name: 'wis_water_sign', caption: 'Знак Воды', description: 'Маг получает +n мф. антикрита. Заклинание требует маны каждый ход.', school: 'water',
		required: {level:4,intellect:25,watermagicskill:2},
		resources: {},
		consumes: {mana:100,spiritlevel:1}
	},
	wis_water_shield: {name: 'wis_water_shield', caption: 'Иней [7]', description: 'Вы получаете на 25% меньше урона 4 последующих размена.', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		consumes: {mana:89}
	},
	wis_water_shield: {name: 'wis_water_shield', caption: 'Иней [8]', description: 'Вы получаете на 25% меньше урона 4 последующих размена, <br>атакующий оружием получает уязвимость к магии воды, не подвержен шоку.', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		consumes: {mana:133}
	},
	wis_water_shield: {name: 'wis_water_shield', caption: 'Иней [9]', description: 'Вы получаете на 25% меньше урона 4 последующих размена, <br>атакующий оружием получает уязвимость к магии воды и часть поглощённого урона, не подвержен шоку.', school: 'water',
		required: {level:9,intellect:60,watermagicskill:9},
		consumes: {mana:195}
	},
	wis_gray_beam: {name: 'wis_gray_beam', caption: 'Силовой луч', description: 'Наносит противнику урон равный значению вашего интеллекта.', school: 'grey',
		required: {level:7,intellect:40,greymagicskill:4},
		consumes: {mana:5}
	},
	wis_gray_meditation: {name: 'wis_gray_meditation', caption: 'Медитация', description: 'Восстанавливает 10% маны.', school: 'grey',
		required: {level:7,intellect:50,greymagicskill:3},
		resources: {},
		consumes: {spiritlevel:2}
	},
	wis_gray_forcefield07: {name: 'wis_gray_forcefield07', caption: 'Силовое Поле [7]', description: 'Создает силовое поле вокруг мага, способное поглотить 120 ед. урона. Нанести критический удар оружием по силовому полю - невозможно', iname: 'wis_gray_forcefield08', school: 'grey',
		required: {level:7,intellect:40,greymagicskill:2},
		resources: {},
		consumes: {mana:150}
	},
	wis_gray_forcefield08: {name: 'wis_gray_forcefield08', caption: 'Силовое Поле [8]', description: 'Создает силовое поле вокруг мага, способное поглотить 144 ед. урона. Нанести критический удар оружием по силовому полю - невозможно', iname: 'wis_gray_forcefield08', school: 'grey',
		required: {level:8,intellect:50,greymagicskill:3},
		resources: {},
		consumes: {mana:180,spiritlevel:1}
	},
	wis_gray_forcefield09: {name: 'wis_gray_forcefield09', caption: 'Силовое Поле [9]', description: 'Создает силовое поле вокруг мага, способное поглотить 172 ед. урона. Нанести критический удар оружием по силовому полю - невозможно', iname: 'wis_gray_forcefield08', school: 'grey',
		required: {level:9,intellect:60,greymagicskill:4},
		resources: {},
		consumes: {mana:216,spiritlevel:2}
	},
	wis_gray_forcefield10: {name: 'wis_gray_forcefield10', caption: 'Силовое Поле [10]', description: 'Создает силовое поле вокруг мага, способное поглотить 207 ед. урона. Нанести критический удар оружием по силовому полю - невозможно', iname: 'wis_gray_forcefield08', school: 'grey',
		required: {level:10,intellect:75,greymagicskill:5},
		resources: {},
		consumes: {mana:259,spiritlevel:3}
	},
	wis_gray_forcefield11: {name: 'wis_gray_forcefield11', caption: 'Силовое Поле [11]', description: 'Создает силовое поле вокруг мага, способное поглотить 248 ед. урона. Нанести критический удар оружием по силовому полю - невозможно', iname: 'wis_gray_forcefield08', school: 'grey',
		required: {level:11,intellect:100,greymagicskill:6},
		resources: {},
		consumes: {mana:311,spiritlevel:4}
	},
	wis_gray_manabarrier07: {name: 'wis_gray_manabarrier07', caption: 'Магический Барьер [7]', description: 'Создает магический барьер вокруг мага, способный поглотить n ед. урона, ценой 1.8 ед. маны за каждую единицу урона. <br>Барьер поглощает 55% повреждений. <br>Шанс нанести критический удар по барьеру уменьшен на 14%. Не подвержен действию шока.', iname: 'wis_gray_manabarrier2', school: 'grey',
		required: {level:7,intellect:40},
		consumes: {mana:15}
	},
	wis_gray_manabarrier08: {name: 'wis_gray_manabarrier08', caption: 'Магический Барьер [8]', description: 'Создает магический барьер вокруг мага, способный поглотить n ед. урона, ценой 1.6 ед. маны за каждую единицу урона. <br>Барьер поглощает 60% повреждений. <br>Шанс нанести критический удар по барьеру уменьшен на 16%. Не подвержен действию шока.', iname: 'wis_gray_manabarrier2', school: 'grey',
		required: {level:8,intellect:50},
		consumes: {mana:15}
	},
	wis_gray_manabarrier09: {name: 'wis_gray_manabarrier09', caption: 'Магический Барьер [9]', description: 'Создает магический барьер вокруг мага, способный поглотить n ед. урона, ценой 1.4 ед. маны за каждую единицу урона. <br>Барьер поглощает 65% повреждений. <br>Шанс нанести критический удар по барьеру уменьшен на 18%. Не подвержен действию шока.', iname: 'wis_gray_manabarrier2', school: 'grey',
		required: {level:9,intellect:60},
		consumes: {mana:15}
	},
	wis_gray_manabarrier10: {name: 'wis_gray_manabarrier10', caption: 'Магический Барьер [10]', description: 'Создает магический барьер вокруг мага, способный поглотить n ед. урона, ценой 1.2 ед. маны за каждую единицу урона. <br>Барьер поглощает 70% повреждений. <br>Шанс нанести критический удар по барьеру уменьшен на 20%. Не подвержен действию шока.', iname: 'wis_gray_manabarrier2', school: 'grey',
		required: {level:10,intellect:75},
		consumes: {mana:15}
	},
	wis_gray_manabarrier11: {name: 'wis_gray_manabarrier11', caption: 'Магический Барьер [11]', description: 'Создает магический барьер вокруг мага, способный поглотить n ед. урона, ценой 1 ед. маны за каждую единицу урона. <br>Барьер поглощает 75% повреждений. <br>Шанс нанести критический удар по барьеру уменьшен на 22%. Не подвержен действию шока.', iname: 'wis_gray_manabarrier2', school: 'grey',
		required: {level:11,intellect:100},
		consumes: {mana:15}
	},
	wis_gray_mastery: {name: 'wis_gray_mastery', caption: 'Серое Мастерство', description: 'Увеличивает навык в магии стихий, применяется до 5 раз.<br />Тратит 10*(уровень заклинания) в ход.', school: 'grey',
		required: {level:7,intellect:40,greymagicskill:4},
		consumes: {mana:50,spiritlevel:3}
	},
	wis_gray_manabarrier: {name: 'wis_gray_manabarrier', caption: 'Магический Барьер', description: 'Создает магический барьер вокруг мага, способный поглотить 293 ед. урона, ценой 2 ед. маны за каждую единицу урона. <br>Барьер поглощает лишь половину повреждений. Не подвержен действию шока.', school: 'grey',
		required: {level:4,intellect:30},
		consumes: {mana:5}
	},
	/*wis_gray_beam01: {name: 'wis_gray_beam01', caption: 'Магический луч', description: 'Наносит цели 7*(ваш уровень) ед. урона серой магией.', iname: 'wis_gray_beam', school: 'grey',
		required: {level:4,intellect:30},
		consumes: {mana:50}
	},*/
	wis_light_heal04: {name: 'wis_light_heal04', caption: 'Магический исцеление', description: 'Исцеляет мага на 50НР, не тратя силу Духа.', iname: 'wis_light_heal07', school: 'grey',
		required: {level:4,intellect:30},
		consumes: {mana:125}
	},
	wis_light_cleance: {name: 'wis_light_cleance', caption: 'Очищение', description: 'Снимает один негативный эффект проклятья, болезни или отравления.', school: 'light',
		required: {level:8,intellect:50,lightmagicskill:5},
		consumes: {mana:100}
	},
	wis_light_damage07: {name: 'wis_light_damage07', caption: 'Усмирение [7]', description: 'Наносит цели урон магией Света, цель теряет характеристики на несколько ходов.', iname: 'wis_light_damage08', school: 'light',
		required: {level:7,intellect:40,lightmagicskill:2},
		consumes: {mana:58,spiritlevel:1},
		attack: {damage:32}
	},
	wis_light_damage08: {name: 'wis_light_damage08', caption: 'Усмирение [8]', description: 'Наносит цели урон магией Света, цель теряет характеристики на несколько ходов.', iname: 'wis_light_damage08', school: 'light',
		required: {level:8,intellect:50,lightmagicskill:3},
		consumes: {mana:70,spiritlevel:1},
		attack: {damage:38}
	},
	wis_light_damage09: {name: 'wis_light_damage09', caption: 'Усмирение [9]', description: 'Наносит цели урон магией Света, цель теряет характеристики на несколько ходов.', iname: 'wis_light_damage08', school: 'light',
		required: {level:9,intellect:60,lightmagicskill:4},
		consumes: {mana:84,spiritlevel:1},
		attack: {damage:46}
	},
	wis_light_damage10: {name: 'wis_light_damage10', caption: 'Усмирение [10]', description: 'Наносит цели урон магией Света, цель теряет характеристики на несколько ходов.', iname: 'wis_light_damage08', school: 'light',
		required: {level:10,intellect:75,lightmagicskill:5},
		consumes: {mana:101,spiritlevel:1},
		attack: {damage:55}
	},
	wis_light_damage11: {name: 'wis_light_damage11', caption: 'Усмирение [11]', description: 'Наносит цели урон магией Света, цель теряет характеристики на несколько ходов.', iname: 'wis_light_damage08', school: 'light',
		required: {level:11,intellect:100,lightmagicskill:6},
		consumes: {mana:121,spiritlevel:1},
		attack: {damage:66}
	},
	wis_light_heal07: {name: 'wis_light_heal07', caption: 'Лечение [7]', description: 'Исцеляет цель магией Света.', iname: 'wis_light_heal08', school: 'light',
		required: {level:7,intellect:40,lightmagicskill:2},
		resources: {hp:1},
		consumes: {mana:117},
		healing: {hitpoints:138}
	},
	wis_light_heal08: {name: 'wis_light_heal08', caption: 'Лечение [8]', description: 'Исцеляет цель магией Света.', iname: 'wis_light_heal08', school: 'light',
		required: {level:8,intellect:50,lightmagicskill:3},
		resources: {hp:1},
		consumes: {mana:140},
		healing: {hitpoints:165}
	},
	wis_light_heal09: {name: 'wis_light_heal09', caption: 'Лечение [9]', description: 'Исцеляет цель магией Света.', iname: 'wis_light_heal08', school: 'light',
		required: {level:9,intellect:60,lightmagicskill:4},
		resources: {hp:1},
		consumes: {mana:168},
		healing: {hitpoints:198}
	},
	wis_light_heal10: {name: 'wis_light_heal10', caption: 'Лечение [10]', description: 'Исцеляет цель магией Света.', iname: 'wis_light_heal08', school: 'light',
		required: {level:10,intellect:75,lightmagicskill:5},
		resources: {hp:1},
		consumes: {mana:202},
		healing: {hitpoints:238}
	},
	wis_light_heal11: {name: 'wis_light_heal11', caption: 'Лечение [11]', description: 'Исцеляет цель магией Света.', iname: 'wis_light_heal08', school: 'light',
		required: {level:11,intellect:100,lightmagicskill:6},
		resources: {hp:1},
		consumes: {mana:242},
		healing: {hitpoints:286}
	},
	wis_light_insight07: {name: 'wis_light_insight07', caption: 'Прозрение [7]', description: 'Восстанавливает 552 маны за 20 ходов.', iname: 'wis_light_insight', school: 'light',
		required: {level:7,intellect:40,lightmagicskill:2},
		resources: {},
		consumes: {mana:312,spiritlevel:5}
	},
	wis_light_insight08: {name: 'wis_light_insight08', caption: 'Прозрение [8]', description: 'Восстанавливает 662 маны за 20 ходов.', iname: 'wis_light_insight', school: 'light',
		required: {level:8,intellect:50,lightmagicskill:3},
		resources: {},
		consumes: {mana:374,spiritlevel:5}
	},
	wis_light_insight09: {name: 'wis_light_insight09', caption: 'Прозрение [9]', description: 'Восстанавливает 794 маны за 20 ходов.', iname: 'wis_light_insight', school: 'light',
		required: {level:9,intellect:60,lightmagicskill:4},
		resources: {},
		consumes: {mana:449,spiritlevel:5}
	},
	wis_light_insight10: {name: 'wis_light_insight10', caption: 'Прозрение [10]', description: 'Восстанавливает 953 маны за 20 ходов.', iname: 'wis_light_insight', school: 'light',
		required: {level:10,intellect:75,lightmagicskill:5},
		resources: {},
		consumes: {mana:539,spiritlevel:5}
	},
	wis_light_insight11: {name: 'wis_light_insight11', caption: 'Прозрение [11]', description: 'Восстанавливает 1144 маны за 20 ходов.', iname: 'wis_light_insight', school: 'light',
		required: {level:11,intellect:100,lightmagicskill:6},
		resources: {},
		consumes: {mana:646,spiritlevel:5}
	},
	wis_light_shield: {name: 'wis_light_shield', caption: 'Защита Света ', description: 'Снижает весь урон получаемый магом на 10%, ускоряет время восстановления от любых видов оглушения на 1 ход.', iname: 'wis_light_shield', school: 'light',
		required: {level:7,intellect:40,lightmagicskill:4},
		resources: {},
		consumes: {mana:200}
	},
	wis_dark_soulweak: {name: 'wis_dark_soulweak', caption: 'Слабость Духа', description: 'На 3 хода все заклинания цели стоят дороже, а физический урон сокращён. Цель получает иммунитет к этому заклинанию на 10 ходов.', school: 'dark',
		required: {level:8,intellect:50,darkmagicskill:5},
		consumes: {mana:100}
	},
	wis_dark_souleat: {name: 'wis_dark_souleat', caption: 'Поглотить', description: 'Вы поглощаете дух павшего в бою, восстанавливая себя. Одну цель можно поглотить только один раз. Заклятие не влияет на уровень духа цели.', school: 'dark',
		required: {level:8,intellect:50,darkmagicskill:5},
		consumes: {mana:50}
	},
	wis_dark_damage07: {name: 'wis_dark_damage07', caption: 'Разрушение [7]', description: 'Наносит цели урон магией Тьмы, часть урона лечит мага.', iname: 'wis_dark_damage08', school: 'dark',
		required: {level:7,intellect:40,darkmagicskill:5},
		consumes: {mana:58},
		attack: {damage:25}
	},
	wis_dark_damage08: {name: 'wis_dark_damage08', caption: 'Разрушение [8]', description: 'Наносит цели урон магией Тьмы, часть урона лечит мага.', iname: 'wis_dark_damage08', school: 'dark',
		required: {level:8,intellect:50,darkmagicskill:6},
		consumes: {mana:70},
		attack: {damage:30}
	},
	wis_dark_damage09: {name: 'wis_dark_damage09', caption: 'Разрушение [9]', description: 'Наносит цели урон магией Тьмы, часть урона лечит мага.', iname: 'wis_dark_damage08', school: 'dark',
		required: {level:9,intellect:60,darkmagicskill:7},
		consumes: {mana:84},
		attack: {damage:36}
	},
	wis_dark_damage10: {name: 'wis_dark_damage10', caption: 'Разрушение [10]', description: 'Наносит цели урон магией Тьмы, часть урона лечит мага.', iname: 'wis_dark_damage08', school: 'dark',
		required: {level:10,intellect:75,darkmagicskill:8},
		consumes: {mana:101},
		attack: {damage:43}
	},
	wis_dark_damage11: {name: 'wis_dark_damage11', caption: 'Разрушение [11]', description: 'Наносит цели урон магией Тьмы, часть урона лечит мага.', iname: 'wis_dark_damage08', school: 'dark',
		required: {level:11,intellect:100,darkmagicskill:9},
		consumes: {mana:121},
		attack: {damage:52}
	},
	wis_dark_manadamage07: {name: 'wis_dark_manadamage07', caption: 'Опустошение [7]', description: 'Лишает цель маны при помощи магии Тьмы, <br>лишая цель возможности использовать последний применённый приём и все приёмы того же класса на 3 хода.<br>Цель получает иммунитет к Опустошению на 10 ходов.', iname: 'wis_dark_manadamage08', school: 'dark',
		required: {level:7,intellect:40,darkmagicskill:5},
		resources: {hp:2},
		consumes: {mana:130},
		attack: {manadamage:184}
	},
	wis_dark_manadamage08: {name: 'wis_dark_manadamage08', caption: 'Опустошение [8]', description: 'Лишает цель маны при помощи магии Тьмы, <br>лишая цель возможности использовать последний применённый приём и все приёмы того же класса на 3 хода.<br>Цель получает иммунитет к Опустошению на 10 ходов.', iname: 'wis_dark_manadamage08', school: 'dark',
		required: {level:8,intellect:50,darkmagicskill:6},
		resources: {hp:2},
		consumes: {mana:156},
		attack: {manadamage:220}
	},
	wis_dark_manadamage09: {name: 'wis_dark_manadamage09', caption: 'Опустошение [9]', description: 'Лишает цель маны при помощи магии Тьмы, <br>лишая цель возможности использовать последний применённый приём и все приёмы того же класса на 3 хода.<br>Цель получает иммунитет к Опустошению на 10 ходов.', iname: 'wis_dark_manadamage08', school: 'dark',
		required: {level:9,intellect:60,darkmagicskill:7},
		resources: {hp:2},
		consumes: {mana:187},
		attack: {manadamage:264}
	},
	wis_dark_manadamage10: {name: 'wis_dark_manadamage10', caption: 'Опустошение [10]', description: 'Лишает цель маны при помощи магии Тьмы, <br>лишая цель возможности использовать последний применённый приём и все приёмы того же класса на 3 хода.<br>Цель получает иммунитет к Опустошению на 10 ходов.', iname: 'wis_dark_manadamage08', school: 'dark',
		required: {level:10,intellect:75,darkmagicskill:8},
		resources: {hp:2},
		consumes: {mana:224},
		attack: {manadamage:317}
	},
	wis_dark_manadamage11: {name: 'wis_dark_manadamage11', caption: 'Опустошение [11]', description: 'Лишает цель маны при помощи магии Тьмы, <br>лишая цель возможности использовать последний применённый приём и все приёмы того же класса на 3 хода.<br>Цель получает иммунитет к Опустошению на 10 ходов.', iname: 'wis_dark_manadamage08', school: 'dark',
		required: {level:11,intellect:100,darkmagicskill:9},
		resources: {hp:2},
		consumes: {mana:269},
		attack: {manadamage:381}
	},
	wis_dark_eyeforeye: {name: 'wis_dark_eyeforeye', caption: 'Глаз за глаз', description: 'Следующее заклинание или удар нанесет не более половины урона, <br>оставшуюся половину магией тьмы получит атакующий, но не более 50*(ваш уровень) ед. урона.', iname: 'wis_dark_eyeforeye', school: 'dark',
		required: {level:7,intellect:40,darkmagicskill:4},
		consumes: {mana:200}
	},
	wis_air_charge: {name: 'wis_air_charge', caption: 'Статика', 
		action: 'Молния, Цепь молний, Искра, Искры, и удары по Воздушному Щиту будут заряжать цель, увеличивая получаемый от магии Воздуха урон на 1%.<br />Маг может воспользоваться накопленными зарядами.', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		delay: 3,
		consumes: {mana:25,spiritlevel:1}
	},
	wis_air_charge_shock: {name: 'wis_air_charge_shock', caption: 'Заряд: Шок', 
		action: 'Шокирует противника, лишая его возможности использовать последний примененный прием на 5 ходов и рассеивает один позитивный магический эффект.', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		delay: 5,
		resources: {hp:1}
	},
	wis_air_charge_gain: {name: 'wis_air_charge_gain', caption: 'Заряд: Собрать', 
		action: 'Восстанавливает 3* (уровень персонажа) маны за каждый уровень заряда на цели и снимает один негативный магический эффект.', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		delay: 3,
		resources: {hp:1}
	},
	wis_air_charge_dmg: {name: 'wis_air_charge_dmg', caption: 'Заряд: Поражение', 
		action: 'Наносит цели 1-3% урона магией Воздуха от ее максимального уровня жизни за каждый уровень Заряда.<br>Заклинание не может нанести более 250 ед. урона для 9го уровня.<br>Заклинание не может нанести более 300 ед. урона для 10го уровня.<br>Заклинание не может нанести более 350 ед. урона для 11го уровня.', iname: 'wis_air_charge_dmg', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		delay: 3,
		resources: {hp:1}
	},
	wis_air_manaheal: {name: 'wis_air_manaheal', caption: 'Энергия Воздуха', 
		action: 'Восстанавливает цели 1-10% маны за каждый ход работы заклинания.<br />Заклинание прекращает действие при использовании любого другого заклинания или через 5 ходов.', school: 'air',
		required: {level:7,intellect:40,airmagicskill:11},
		resources: {hp:1},
		delay: 10,
		consumes: {spiritlevel:3}
	},
	wis_air_sacrifice: {name: 'wis_air_sacrifice', caption: 'Жертва Воздуху', 
		action: 'Маг получает 25 мф. мощности магии Воздуха на 4 хода.<br />Снимается приемом Очистится кровью.', school: 'air',
		required: {level:7,intellect:40,airmagicskill:7},
		resources: {hp:5},
		delay: 10,
		consumes: {mana:10}
	},
	wis_air_speed: {name: 'wis_air_speed', caption: 'Скорость Молнии', 
		action: 'Любой следующий прием не тратит хода.', school: 'air',
		required: {level:8,intellect:50,airmagicskill:8},
		delay: 10,
		beginDelay: 10,
		consumes: {mana:85,spiritlevel:4}
	},
	wis_air_spark: {name: 'wis_air_spark', caption: 'Искра', 
		action: 'Мгновенно наносит цели 1-100 урона воздухом или исцеляет дружественную цель.', school: 'air',
		required: {level:8,intellect:50,airmagicskill:8},
		delay: 10,
		consumes: {mana:121}
	},
	/*wis_air_shield: {name: 'wis_air_shield', caption: 'Воздушный Щит', description: 'Создаёт воздушный кокон вокруг мага, способный поглотить 1-? ед. урона. Этот приём не подвержен действию шока. Общая задержка с заклинанием Силовое поле.', school: 'air',
		required: {level:9,intellect:60,airmagicskill:9},
		consumes: {mana:172}
	},*/
	wis_water_tempheal: {name: 'wis_water_tempheal', caption: 'Ледяное Спасение', description: 'Мгновенно останавливает кровотечения, исцеляя мага на ???HP магией воды, но за 5 ходов теряет 50% полученного здоровья.', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		resources: {hp:1},
		consumes: {mana:168}
	},
	wis_water_break: {name: 'wis_water_break', caption: 'Оледенениие: Разбить!', description: 'Наносит текущей цели подверженной Оледенению ??? урона магией воды и еще ???, если уровень жизни цели менее (кол.умений*5+50)', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		consumes: {mana:200}
	},
	wis_water_crystalize: {name: 'wis_water_crystalize', caption: 'Кристаллизация', description: 'Мгновенно наносит цели урон равный уровню силы цели но не более чем 10*(ваш уровень). Снижает силу и ловкость цели на (количество владений водой) на три хода.', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		consumes: {mana:200}
	},
	wis_water_icegrap: {name: 'wis_water_icegrap', caption: 'Хватка Льда', description: 'Через 2 хода цель теряет возможность использовать приемы или набирать очки тактики на 3 хода.', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		consumes: {mana:100}
	},
	wis_water_spirit: {name: 'wis_water_spirit', caption: 'Духи Льда', description: 'На три хода увеличивает мф. мощности Магии Воды на 15. Часть вашего прямого урона магией воды, восстанавливают вам ману.', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		resources: {hp:4},
		consumes: {spiritlevel:5}
	},
	wis_water_aheal: {name: 'wis_water_aheal', caption: 'Переохлаждение', description: 'Уменьшает эффекты лечения на цели на 10% Можно применить на одну цель до 5 раз.', school: 'water',
		required: {level:9,intellect:60,watermagicskill:9},
		resources: {hp:1},
		consumes: {mana:70}
	},
	wis_water_cleance: {name: 'wis_water_cleance', caption: 'Чистота Воды', description: 'Снимает один негативный эффект магии или отравления.', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		consumes: {mana:100}
	},
	wis_water_hiddenpower: {name: 'wis_water_hiddenpower', caption: 'Ледяное Сердце', description: 'При использовании убирает текущие задержки на заклинаниях школы Воды. Не подвержен действию шока.', school: 'water',
		required: {level:8,intellect:50,watermagicskill:8},
		consumes: {mana:200}
	},
	wis_water_sacrifice: {name: 'wis_water_sacrifice', caption: 'Жертва Воде', description: 'Маг теряет 10% жизни за 5 ходов, но цена всех заклятий снижена на 50%.', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		resources: {hp:5},
		consumes: {mana:5}
	},
	wis_water_strike: {name: 'wis_water_strike', caption: 'Острая Грань', description: 'Наносит цели колющий урон.', school: 'water',
		required: {level:7,intellect:40,watermagicskill:7},
		consumes: {mana:162}
	} 
 };
 
