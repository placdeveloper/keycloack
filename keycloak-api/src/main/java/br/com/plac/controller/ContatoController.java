package br.com.plac.controller;

import java.util.List;

import javax.annotation.security.RolesAllowed;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.plac.entities.Contato;
import br.com.plac.service.ContatoService;

@RestController
@RequestMapping("/contatos")
public class ContatoController {

	@Autowired
	private ContatoService service;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<String> getLiberado() {
    	return ResponseEntity.status(200).body("acesso liberado");
    }

    @RequestMapping(value = "/publica", method = RequestMethod.GET)
    public ResponseEntity<List<Contato>> getSuples() {
    	return ResponseEntity.ok(service.findContato("pub"));
    }

    @RolesAllowed("user")
    @RequestMapping(value = "/usuario", method = RequestMethod.GET)
    public ResponseEntity<String> getUser(@RequestHeader String Authorization) {
        return ResponseEntity.ok("Somente com role de usuario");
    }

    @RolesAllowed("admin")
    @RequestMapping(value = "/privado", method = RequestMethod.GET)
    public ResponseEntity<List<Contato>>getAdmin(@RequestHeader String Authorization) {
    	return ResponseEntity.ok(service.findContato("pri"));
    }

    @RolesAllowed("app-admin")
    @RequestMapping(value = "/restrita", method = RequestMethod.GET)
    public ResponseEntity<List<Contato>>getListaGeral(@RequestHeader String Authorization) {
    	return ResponseEntity.ok(service.findContato("rsto"));
    }

    @RolesAllowed({ "admin", "user" })
    @RequestMapping(value = "/todasroles", method = RequestMethod.GET)
    public ResponseEntity<String> getAllUser(@RequestHeader String Authorization) {
        return ResponseEntity.ok("Role de usuario e administrador");
    }

}