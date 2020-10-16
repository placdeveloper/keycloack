package br.com.plac.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.plac.entities.Contato;
import br.com.plac.repository.ContatoRepository;

@Service
public class ContatoService {

	@Autowired
	private ContatoRepository repo;

	public List<Contato> findContato(String tipo) {
		return repo.findContatoPorTipo(tipo);
	}
}
