package br.com.plac.service;

import java.text.ParseException;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.plac.entities.Contato;
import br.com.plac.repository.ContatoRepository;

@Service
public class DBService {

	@Autowired
	private ContatoRepository repo;

	public void instantiateTestDatabase() throws ParseException {

		Contato cprivado1 = new Contato(1l, "Contato privado 1", "contatoprivado1@teste.com.br", "pri");
		Contato cprivado2 = new Contato(2l, "Contato privado 2", "contatoprivado2@teste.com.br", "pri");
		Contato cprivado3 = new Contato(3l, "Contato privado 3", "contatoprivado3@teste.com.br", "pri");

		Contato cpublico1 = new Contato(4l, "Contato publico 1", "contatopublico1@teste.com.br", "pub");
		Contato cpublico2 = new Contato(5l, "Contato publico 2", "contatopublico2@teste.com.br", "pub");
		Contato cpublico3 = new Contato(6l, "Contato publico 3", "contatopublico3@teste.com.br", "pub");
		Contato cpublico4 = new Contato(7l, "Contato publico 4", "contatopublico4@teste.com.br", "pub");
		Contato cpublico5 = new Contato(8l, "Contato publico 5", "contatopublico5@teste.com.br", "pub");

		Contato crestrito1 = new Contato(9l, "Contato restrito 1", "contatorestrito1@teste.com.br", "rsto");
		Contato crestrito2 = new Contato(10l, "Contato restrito 2", "contatorestrito2@teste.com.br", "rsto");

		repo.saveAll(Arrays.asList(cprivado1, cprivado2, cprivado3, cpublico1, cpublico2, cpublico3, cpublico4,
				cpublico5, crestrito1, crestrito2));

	}

}
